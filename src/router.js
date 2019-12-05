import React from 'react';
import { HashRouter,Switch,Route, } from 'react-router-dom'; //BrowserRouter 用来保持UI和URL的同步   Route负责匹配url的ui Switch只渲染一个路由
import main from './pages/main';//主页面入口
import admin from './pages/index';//主页面入口
const BasicRoute = (props)=>{
    return (
       <HashRouter>
          <Switch>
              <Route exact path="/" component={main}/>
              <Route exact path="/admin" component={admin}/>
          </Switch>
       </HashRouter> 
    )
}
export default BasicRoute 

