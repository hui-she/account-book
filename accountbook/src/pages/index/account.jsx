import React from 'react';
import './styles/account.scss'
export default class Account extends React.Component{

    constructor() {
        super();
        this.state = {
            accList : [{
                timeName: '今天',
                timeTip: '还没有记过账',
                labelIcon: 'iconrili',
                expendNum: '0.00',
                incomeNum: '0.00',
                link: '#'
            },{
                timeName: '本周',
                timeTip: '还没有记过账',
                labelIcon: 'iconrili1',
                expendNum: '0.00',
                incomeNum: '0.00',
                link: '#'
            },{
                timeName: '本月',
                timeTip: '还没有记过账',
                labelIcon: 'iconmonth',
                expendNum: '0.00',
                incomeNum: '0.00',
                link: '#'
            },{
                timeName: '本年',
                timeTip: '还没有记过账',
                labelIcon: 'iconnian',
                expendNum: '0.00',
                incomeNum: '0.00',
                link: '#'
            }]
        }
    }

    render() {
        let {accList} = this.state;
        // console.log(accList)
        return (
            <div className="acc-box">
                <div className="acc-top">
                    <div className="tip-box">
                        <div className="tip-t">
                            <span className="month">10</span><span>月·支出</span>
                        </div>
                        <div className="tip-c">
                            <span className="total-expend">0.00</span>
                            <i className="iconfont iconyanjing"></i>
                        </div>
                        <div className="tip-b">
                            <div className="budget-box">
                                <span className="label">预算</span><span className="setting-btn">点此设置</span>
                            </div>
                            <div className="income-box">
                                <span className="label">本月收入</span><span className="total-income">0.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="acc-list">
                    {/* <li>
                        <a href="#">
                            <div className="item-l">
                                <i className="iconfont iconrili label-icon"></i>
                                <div className="time-box">
                                    <p className="time-name">今天</p>
                                    <p className="time-tip">还没有记过账</p>
                                </div>
                            </div>
                            <div className="item-r">
                                <div className="price-box">
                                    <p className="expend-num">0.00</p>
                                    <p className="income-num">0.00</p>
                                </div>
                                <i className="iconfont iconarrow-right1"></i>
                            </div>
                        </a>
                    </li> */}
                    {
                        accList.map( (it,idx) => (
                            <li key={idx}>
                                <a href={it.link}>
                                    <div className="item-l">
                                        <i className={`iconfont label-icon ${it.labelIcon}`}></i>
                                        <div className="time-box">
                                            <p className="time-name">{it.timeName}</p>
                                            <p className="time-tip">{it.timeTip}</p>
                                        </div>
                                    </div>
                                    <div className="item-r">
                                        <div className="price-box">
                                            <p className="expend-num">{it.expendNum}</p>
                                            <p className="income-num">{it.incomeNum}</p>
                                        </div>
                                        <i className="iconfont iconarrow-right1"></i>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}