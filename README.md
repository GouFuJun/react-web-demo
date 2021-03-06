## 技术栈

前端：React + react-router + axios + TypeScript + Recoil(状态管理) + Hooks + cssnext

后端：BFF Node Koa Serverless 函数计算 OSS

## 技术点

### 1、微信扫码登录

### 2、markdown 渲染

### 3、防爬虫

### 4、pdf 渲染

## 前台代码实战

### 1、cli脚手架

#### 1.1 webpack
安装
```
// webpack 安装
npm i webpack webpack-cli -D

// scripty 安装 script 命令 window .bat liunx .sh
npm i scripty -D

// yargs-parser 安装 获取命令执行中的参数
npm i yargs-parser -D

// 使用 babel react typescript es2015+ 转义
npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript -D

// webpack 使用babel 需要 loader
npm i babel-loader -D

// webpack 配置 css 解析 loader mini-css-extract-plugin css 提取为独立文件插件
npm i css-loader postcss-loader postcss-preset-env mini-css-extract-plugin -D

... 压缩代码等未列出
```
配置 *查看 **webpacke.config.js***

#### 1.2 TypeScript
安装
```
npm i typescript
```
配置 *查看 **tsconfig.json***

#### 1.3 React
安装
```
npm i react react-dom react-router-dom

// 安装 react ts申明
npm i @types/react @types/react-dom @types/react-router-dom
```
### 2、react 知识点

1、useCallBack -- 缓存函数、useMono -- 缓存值 通过改变依赖更新
2、useEffect -- 通过改变依赖更新
```
useEffect(()=>{}) // 一直重复执行
useEffect(()=>{},[]) // 空依赖-只执行一次
useEffect(()=>{},<name>) // 依赖变量，值改变--执行
```
3、hooks
```
useEffect
use ...
```

4、react 处处皆组件（个人理解）
```
// 使用 Hook + FC 实现
```

### 3、React 代码

#### 3.1 router 实现
```
route.tsx

import React, { FC, lazy, Suspense } from "react";
import { Route, Switch, RouteProps } from "react-router";

import Loading from '@components/Loading/Loading';
import NotFound from '@pages/NotFound/NotFound';

// 定义路由集合
const routes: RouteProps[] = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import("@pages/Home/Home"))
    },
    ...
]

// 定义路由组件
const Routes: FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {
                    routes.map((r,index)=>{
                        const {path,exact,component} = r;
                        const LazyCom = component;
                        return (
                            <Route
                                key={index}
                                path={path}
                                exact={exact}
                                render={
                                    (props)=><LazyCom {...props} />
                                }
                             />
                        )
                    })
                }
                {/* 兜底的路由 */}
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    );
}

export default Routes;

```


