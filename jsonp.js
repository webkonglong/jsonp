
function Jsonp (option) {
  this.option = option;
  this.counter = 0;
  this.head = null;
  this.query = null;
}

Jsonp.prototype.get = function (url, params, callback) {
  this.query = (url || '').indexOf('?') === -1 ? '?' : '&';

  this.connectUrl(params);

  var uniqueName = "callback_json" + (++this.counter);

  this.setCallback(callback, uniqueName);

  var api = this.option && this.option.api && this.option.api || '';

  this.load(api + url + '/jsonp' + this.query + 'callback' + '=' + uniqueName);

  return uniqueName;
}

Jsonp.prototype.connectUrl = function (params) {
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      this.query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
  }
}

Jsonp.prototype.setCallback = function(callback, callbackName) {
  window[callbackName] = function(data) {
    callback(data);
    try {
      window[callbackName] = null;
      delete window[callbackName];
    } catch (e) {}
  };
};

Jsonp.prototype.load = function (url) {
  var script = document.createElement('script'),
    done = false;
    script.src = url;
    script.async = true;
  script.onload = script.onreadystatechange = function () {
    if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
      done = true;
      script.onload = script.onreadystatechange = null;
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    }
  };

  if (!this.head) {
    this.head = document.getElementsByTagName('head')[0];
  }
  this.head.appendChild(script);
}

if ('object' == typeof exports) {
  export default Jsonp
}

