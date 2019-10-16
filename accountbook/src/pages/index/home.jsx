import React from 'react';
export default class Home extends React.Component{

    render() {
        // let {list} = this.props;
        return (
            <div style={{width:'100px',minHeight:'20px'}}>
                {/* {list.length?
                    list.map((it)=>{
                        return <p key={it.name}>{it.name}你好</p>
                    }): */}
                    <p>账户</p>
                {/* } */}
            </div>
        )
    }
}