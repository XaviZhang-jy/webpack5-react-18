import './index.less';
import React from 'react'

export default function Tab2(props:any){

    const tagImg = [
        {img:'https://kingdee.design/static/rule-develop.774a2604.svg',content:'高代码开发'},
        {img:'https://kingdee.design/static/rule-develop-active.17f35e6a.svg',content:'高代码开发'}
    ]
    return(
        <div className='tab-item'>
            <img src={tagImg[props.number-1].img} alt="" />
            <span>{tagImg[props.number-1].content}</span>
        </div>
    );
}