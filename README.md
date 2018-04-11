## jsonp

*   超级轻量jsonp

## demo

```git clone https://github.com/webkonglong/jsonp.git``` 然后打开index.html 打开浏览器控制台 -> Network -> js或all 查看

## 说明

* 接口肯定是以 ```/jsonp``` 结尾, 但请求接口不需要写 ```/jsonp``` , 这个库会帮你自动加上

* 只需要 ```var ajax = new Jsonp({
        api: 'http://www.baidu.com/'
      });``` 一次即可, 后面所有的都是 ```ajax.get(url, data, successCallback)``` 这种用法

* ```url``` 请求参数 完整的请求链接为 ```http://www.baidu.com/api/getname/jsonp``` 因为你在 ```new Jsonp({ api: 'http://www.baidu.com/' })``` 所以 ```url``` 填写 ```api/getname``` 即可。

* ```new Jsonp ``` 的 ```api``` 会添加在你所有请求的url前面，可以不填写。



🎉 来来来 求个 star 哦~ 🎉





## Other

*   来来来 求基友，anmingzhe@me.com;
