### 昨天闲下来翻了一下koa的api做了一个增删改查小表格demo，四个接口加前端小界面，大概加查看api用了半天时间。所以koa确实是一个简单快速开发的库
看这个你应该已经学会了操作一种数据库，我这里用的是mongodb，对mongodb不会的可以去看看我的前两篇文章，上手很简单，我这里用的是可视化工具robo3.0

![](https://user-gold-cdn.xitu.io/2019/5/15/16ab928a0aadf5b6?w=1723&h=720&f=png&s=72499)

由于前端很简单我就放在了public下面，项目地址 https://github.com/ZhaoyangRao/koa.git
### 先看看实现后的效果图吧

![](https://user-gold-cdn.xitu.io/2019/5/15/16ab94944c3f5117?w=860&h=356&f=png&s=27768)
很简单的一个表格的增删改查

### 后端代码的结构
```
├── app     
│   └── controllers // 控制器文件目录，用来操作数据库
│   │   └──  ...  // 对应操作的表，这里就省略了
│   ├── middleware// 自定义中间件目录
│   ├── models    // 定义的表结构
│   │   └──  ...  // 对应的表，这里就省略了
│   └── utils     // 工具模块目录
│   │   └──  ...  // 工具模块，这里就省略了
├── routes         // 路由文件
│   ├── api    // 路由配置     
├── app.js        // 项目入口文件
└── config.js     // 配置文件
```
这里说一个题外话，其实现在前端后端有一个贯穿编码整个的思想就是MVC，这里的目录和作用也体现了MVC，models就是M,controllers就是C，routes就类似于V表现层也就是抛出来的请求接口。

## 主要目录概述
### appjs入口文件
入口文件没有业务代码，做了几件重要的事情，
```
1.require('koa')
2.连接了数据库（需要用到mongoose mongoose是nodeJS提供连接 mongodb的一个库）
3.引入调用了routes
4.require('koa2-cors');require('koa-body');
我这里还引入两个用的比较多的生态库，一个用来解决跨域，一个用来解决post请求以及文件下载等
```
### 连接数据库相关目录
首先数据库属于M层，你可以看见models里面就是mongoose连接 mongodb的，
```
mongoose.Schema( 相当于一个数据库的模板，数据结构)
mongoose.model（简单的理解就是通过mongoose.model你就可以对数据库里面的相应的数据进行操作（））
```
### controllers目录
也就是自己定义的那些操作调用数据层的那些方法控制器
### utils工具
一些常用的方法，格式化时间等
### middleware自定义中间件
你可以写一些对request response封装一下
## routes（接口）
暴露出去的接口，以及相应接口调用的回调controllers,controllers再去操作models

#### 总结，这只是我自己定义的目录，以及自己的片面理解，具体代码注释在文件里面，毕竟只看了写了半天，有不对的地方欢迎指正

