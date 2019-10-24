import React from 'react';
import { NavLink } from "react-router-dom";

import '../styles/header.scss'
export default class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.children)
        console.log(this.props.name)
    }

    render() {
        // let {list} = this.props;
        return (
            <div className="header-box">
                <p className="goBack">
                    <i className="iconfont iconarrow-right"></i>
                </p>
                <p className="hader-name">{this.props.name||''}</p>
                <p className="header-right">{this.props.children}</p>
            </div>
        )
    }
}