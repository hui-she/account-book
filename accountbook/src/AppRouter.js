import React from "react";
import { BrowserRouter as Router, Route, Link , Switch, Redirect, IndexRoute } from "react-router-dom";

import Index from './pages/index/index'
import Home from './pages/index/home'
import Account from './pages/index/account'
import Current from './pages/current/current'
import Chart from './pages/chart/chart'
import Mine from './pages/mine/mine'
import AddCharge from './pages/add/addCharge'
import Footer from 'components/footer'
import './index.css';
import './styles/reset.css';
import './styles/iconfont.css';

function AppRouter() {
    return (
        // <Index/>输出的是一个对象 而Index输出的是一个方法
        // component 接收的是一个方法而不是一个对象 而这个方法返回的值必须是react组件;  所以component使用<Index/>会报错
        <Router>
            {/* <Redirect from="/" to="/HomeIndex" /> */}
            <Switch>
                
                <Route path="/home" render={ ()=>
                    <Index>
                        {/* <Route path='/' component={Account}/> */}
                        <Route path='/home/account' component={Account}/>
                        <Route path='/home/current' component={Current}/>
                        <Route path='/home/chart' component={Chart}/>
                        <Route path='/home/mine' component={Mine}/>
                    </Index>
                }/>
                
                <Route path='/add' component={AddCharge}/>
                {/* <Route path='*' component={Current}/> */}
                <Redirect from="/" to="/home/account" /> 
            </Switch>
            
        </Router>
    );
  }
  
  export default AppRouter;