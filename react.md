# React.js

> what is Reactjs?
>
> 1. a client-side JavaScript library
> 2. All about building modern,reactive user interfaces for the web
> 3. Declarative,component-focused approach

---

## react-dom-router

Switch 保证只会显示一个组件（多个匹配的时候,比如/和/bookmark，url 是/bookmark，但是默认/也会匹配，加上 Switch 他会保证只显示匹配到的第一个组件）

index.js 里用 BrowserRouter 包裹`<App />`

Route ，Route 的 exact 属性（常用在/路径） `<Route path="/" exact > ....你的组件</Route>` exact 保证必须是全字符串匹配。

Link：组织浏览器的默认行为（如刷新，跳转页面），只是切换组件 `<Link to="/"></Link>`

## css

以.module.css 结尾的 CSS module，让 CSS 只应用到指定的组件，而不是全局的。

`import classes from './ThisComponentSCSS.module.css'`

使用时是以对象的形式 `className={classes.wrapper}`

**## Firebase 免费的虚拟后端 包含数据库的后端服务，我们可以向其发送请求的 API，数据将保存在该数据库中**
[FireBase](https://console.firebase.google.com/project/react-c3b8d/database/react-c3b8d-default-rtdb/data?hl=zh-cn)

## Context

createContext 传入初始值，创建 Context。
