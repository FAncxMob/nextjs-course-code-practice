# next.js

优点

- 项目会变成服务端渲染的 SPO 项目，且不用配置任何服务端渲染的额外代码。
- 服务端渲染好处：

  - 对搜索引擎（爬虫）友好，很适合公开的网站为主的项目，如股票，网站官网之类的。
  - 服务端取完数据直接渲染返回给前端，直接显示，渲染速度快，加载等待的时间变少。

- 基于文件的路由，动态路由。
  比如`[id].js`，`[...slug].js`(可以取得该目录下的所有信息，以数组的方式返回)

## 常用的

- 使用 `import { useRouter } from "next/router";` 获取路由相关的数据
- 使用 `import Link from "next/link"`
- ```router.push({
  import Link from "next/link";
  import { useRouter } from "next/router";
    
  const router = useRouter();
  
  ...
  
   router.push({
        pathname: "/client/[clientId]/[clientRelatedId]",
        query: {
          clientRelatedId: "test-clientRelatedId",
          clientRelatedName: "test-clientRelatedName",
          clientId: "text-client",
        },
      });
  ```

     
- 

## 

