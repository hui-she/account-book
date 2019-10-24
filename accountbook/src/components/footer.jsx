import React from 'react';
import { NavLink } from "react-router-dom";

import '../styles/footer.scss'
export default class Footer extends React.Component{

    render() {
        // let {list} = this.props;
        return (
            <div className="footer-box">
                <ul>
                    <li>
                        <NavLink to="/home/account" activeClassName="active">
                            <i className="iconfont iconzhangben"></i>
                            <p>账户</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/current" activeClassName="active">
                            <i className="iconfont iconliushui"></i>
                            <p>流水</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" className="add-btn">
                            记一笔
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/chart" activeClassName="active">
                            <i className="iconfont icontubiao"></i>
                            <p>图表</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/mine" activeClassName="active">
                            <i className="iconfont iconwode"></i>
                            <p>我的</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}