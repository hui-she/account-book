import React from 'react';
import './styles/account.scss'
import {getAppointTime} from '@/js/util.js'
export default class Account extends React.Component{

    constructor() {
        super();
        this.state = {
            showFlag: true,     //是否显示金额
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

    componentWillMount() {
        this.initAccListTip();
    }

    // 初始化列表tip
    initAccListTip = ()=> {
        let newArr = this.state.accList;
        newArr[1].timeTip = `${getAppointTime("weekStart").tip}-${getAppointTime("weekEnd").tip}`;
        newArr[2].timeTip = `${getAppointTime("monthStart").tip}-${getAppointTime("monthEnd").tip}`;
        newArr[3].timeTip = `${getAppointTime("year").tip}`;

        this.setState({
            accList: newArr
        })
    }

    //显示/隐藏金额
    changeShowFlag = ()=>{
        this.setState({
            showFlag: !this.state.showFlag
        })
    }
    
    render() {
        let {accList, showFlag} = this.state;
        // console.log(accList)
        return (
            <div className="acc-box">
                <div className="acc-top">
                    <div className="tip-box">
                        <div className="tip-t">
                            <span className="month">10</span><span>月·支出</span>
                        </div>
                        <div className="tip-c">
                            <span className="total-expend">{showFlag?'0.00':'****'}</span>
                            {
                                showFlag?<i className="iconfont iconyanjing" onClick={this.changeShowFlag}></i>:
                                    <i className="iconfont iconyanjing1" onClick={this.changeShowFlag}></i>
                            }
                            
                        </div>
                        <div className="tip-b">
                            <div className="budget-box">
                                <span className="label">预算</span>
                                {
                                    showFlag?<span className="setting-btn">点此设置</span>:
                                    <span className="setting-btn">****</span>
                                }
                            </div>
                            <div className="income-box">
                                <span className="label">本月收入</span><span className="total-income">{showFlag?'0.00':'****'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="acc-list">
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
                                            <p className="expend-num">{showFlag?it.expendNum:''}</p>
                                            <p className="income-num">{showFlag?it.incomeNum:''}</p>
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