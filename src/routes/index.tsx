import React, { FC, lazy, Suspense } from "react";
import { Route, Switch, RouteProps } from "react-router";

import Loading from '@components/Loading/Loading';
import NotFound from '@pages/NotFound/NotFound';

// 定义路由集合
const routes: RouteProps[] = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('@pages/Home/Home'))
    },
    {
        path: '/login',
        exact: true,
        component: lazy(() => import('@pages/Login/Login'))
    }
]

// 定义路由组件
const Routes: FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {
                    routes.map((route,index)=>{
                        const {path,exact,component: LazyCom} = route;
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
