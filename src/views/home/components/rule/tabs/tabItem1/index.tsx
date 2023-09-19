import './index.less';
import React from 'react';

export default function Tab1(props:any){
    const tagImg = [
        {img:'https://kingdee.design/static/rule-info-active.239bd68c.svg',content:'视觉标注'},
        {img:'https://kingdee.design/static/rule-info.71cf8522.svg',content:'视觉标注'},
    ]
    return(
        <div className='tab-item'>
            <img src={tagImg[props.number-1].img} alt="" />
            <span>{tagImg[props.number-1].content}</span>
        </div>
    );
}