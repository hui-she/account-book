import React from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import 'styles/index.scss';

import Home from './home'
import Account from './account'
import Current from '../current/current'
import Chart from '../chart/chart'
import Mine from '../mine/mine'
import Footer from 'components/footer'
export default class Index extends React.Component{

    render() {
        // let {list} = this.props;
        return (
            <div className="content">
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}