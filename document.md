1. 安装这个扩展： ES7 +react/redux 
    rcc: 创建一个类组件
    rfc: 创建一个函数组件
2. 组件化编码流程：
    （1）拆分组件：拆分界面，抽取组件
    （2）实现静态组件：使用组件实现静态页面
    （3）实现动态组件：
        a.动态显示初始化数据:数据类型、数据名称、保存在哪个组件
        b.交互（从绑定事件监听开始）
3. 使用uuid或者nanoid库，生成全球唯一的id,不重复。安装：npm i nanoid
4. todoList案例学习：
    （1）状态在哪里，操作状态的方法就在哪里。
    （2）两个子组件，一个需要展示todo列表，一个要增加todo列表，那么todo列表定义在他们的父组件的state中(即状态提升)。
    （3）父组件向子传递，用props。
    （4）若子组件要修改父组件的state中的值，即子向父传递，步骤：首先，父向子传递一个props,是一个函数；然后在子组件中需要修改的方法中，调用父给的这个props函数，并传参，参数是要改的内容。父组件里要定义这个props函数，并且是一个高阶函数（即return一个函数）。
    （5）如果孙组件要修改祖组件的state,也要通过传父，再传父。
    （6）注意defaultChecked和checked的区别。defaultChecked只在第一次进来时调用，后面更新值不变。
5. 安装prop-types库来限制props. 安装： npm i prop-types
6. 常用的ajax库：
    （1）jquery:比较重，不建议。
    （2）axios:轻量级，建议使用。特点：
        a).封装XmlHttpRequest对象的ajax
        b). promise 风格
        c).可以用在浏览器端和node服务器端。
7. react脚手架配置代理：
    （1）在package.json中追加配置： "proxy":"http://localhost:5000"
        特点：
        a).优点：配置简单，前端请求资源时可以不加任何前缀。
        b).缺点：不能配置多个代理。
        c).工作方式：上述配置，当请求了3000不存在的资源时，会去把请求转发给5000.
    （2）配置文件: src/setupProxy.js 
        a).优点：可以配置多个代理，可以灵活的控制请求是否走代理。
        b).缺点：配置繁琐，前端请求资源时必须加前缀。
8. 连续解构赋值 + 重命名。
    let obj={a:{b:{c:1}}}
    const {a: {b: {c:data}}} = obj
    console.log(data);  // 
9. github案例 -- github请求地址：https://api.github.com/search/users?q=xxx  这个接口服务端cors配置了，所以没有跨域问题. 
    产品思维：考虑第一次页面载入显示状态、请求数据过程的loading状态、 返回错误的处理状态
10. 父子通信传递：
    父向子传递： 使用props
    子向父传递： 父先向子通过props传递一个函数，子在合适的时机调用这个函数（传参数），来实现子向父传递。
11. 消息订阅-发布机制 : 发布（publish）、订阅（subscribe）
    工具库：pubsub-js
    想要使用数据的组件，在componentDidMount钩子中去订阅（subscribe）消息；在componentWillUnMount钩子中取消订阅；
    想要发送数据的组件里，使用发布(publish)消息。
    