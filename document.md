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
    适用于任意组件之间通信。
12. ajax请求： 
    (1) xhr(xmlHttpRequest) 、jquery(该库是对xhr的封装)、axios(该库是对xhr的封装);
    (2) fetch（关注分离的设计思想），这个是window上的一个方法。不是第三方库，而且是promise风格的。 老版浏览器可能不支持。
13. SPA： 
    a.单页面应用 
    b.整个页面只有一个页面 
    c.点击页面中的链接不会刷新，只做局部刷新。
    d. 数据都需要通过ajax来请求，并在前端异步展示。
14. 路由： key--value
        前端路由： path -- component
        后端路由： path -- function
        路由原理：H5的history 
        router模式：browserRouter、hashRouter

15. react-router-dom: react在web用的库。需自己安装
    路由的基本使用：
    a. 明确好界面中的导航区，展示区；
    b. 导航区的a标签改为<Link>标签：
        <Link to="/xxx">Demo</Link>
    c. 展示区写Route标签进行路由匹配：
        <Route path="/xxx" component={Demo}/>
        注意新版本的Route写法不同
        <Route path="/xxx" element={<Demo/>}/>
    d. App的最外侧包裹一个<BrowserRouter>或<HashRouter>。
16. 一般组件： 通常写在components文件夹中，可以接收正常的props;
    路由组件：是在路由匹配后渲染的组件，通常写在pages文件夹中，可以接收到3个固定参数有：history、location、match。
17. NavLink与封装NavLink:
    a. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名；
    b. 标签体内容是一个特殊的标签属性；
    c. 通过this.props.children可以获取标签体内容。
18. Switch的使用：
    a. 通常情况下，path和component是一一对应的关系；
    b. Switch可以提高路由匹配效率（单一匹配）。
19. 路由的严格匹配与模糊匹配：
    a. 默认使用的是模糊匹配，（输入的路径必须包含要匹配的路径，且顺序要一致);
    b. 开启严格模式，关键字 exact;
    c. 严格模式不能随便开启，需要再开。有时候开启严格模式会导致无法匹配二级路由。
20. redircet（重定向）的使用： 一般下在所有路由注册的最下方，当所有路由都无法匹配时，跳转到redirect所指定的地址。
    <Redirect to="/about"/>
21. 嵌套路由：
    a. 注册子路由需要写上父路由的path;
    b. 路由的匹配是按照注册路由的顺序进行的。
22. 