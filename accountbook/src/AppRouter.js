import React from "react";
import { BrowserRouter as Router, Route, Link , Switch, Redirect, IndexRoute } from "react-router-dom";

import Index from './pages/index/index'
import Home from './pages/index/home'
import Account from './pages/index/account'
import Current from './pages/index/current'
import Chart from './pages/index/chart'
import Mine from './pages/index/mine'
import Footer from 'components/footer'
import './index.css';
import './styles/reset.css';

function AppRouter() {
    return (
        // <Index/>输出的是一个对象 而Index输出的是一个方法
        // component 接收的是一个方法而不是一个对象 而这个方法返回的值必须是react组件;  所以component使用<Index/>会报错
        <Router>
            {/* <Redirect from="/" to="/HomeIndex" /> */}
            <Switch>
                {/* <Redirect from="/" to="/HomeIndex" />  */}
                <Route path="/Home" render={ ()=>
                    <Index>
                        <Route exact path='/Home' component={Home}/>
                        <Route path='/Home/Account' component={Account}/>
                        <Route path='/Home/Current' component={Current}/>
                        <Route path='/Home/Chart' component={Chart}/>
                        <Route path='/Home/Mine' component={Mine}/>
                    </Index>
                }/>
                
                <Route path='/list' component={Account}/>
                {/* <Route path='*' component={Current}/> */}
            </Switch>
            
        </Router>
    );
  }
  
  export default AppRouter;