import React from 'react';
import './styles/addCharge.scss'
import Header from 'components/header';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
    { title: <span>1</span> },
    { title: <span>2</span> },
    { title: <span>3</span> },
  ];

const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
  ];

export default class AddCharge extends React.Component{

    constructor() {
        super();
        this.state = {
            
        }
    }

    componentWillMount() {

    }
    
    render() {
        // let {accList, showFlag} = this.state;
        // console.log(accList)
        return (
            <div className="addcharge-box">
                <Header name="记一笔">
                    <p className="header-save">
                        <i className="iconfont icondui"></i>
                        <span>保存</span>
                    </p>
                </Header>
                <div className="addcharge-main">
                    <Tabs tabs={tabs}
                        initialPage={1}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of first tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of third tab
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}