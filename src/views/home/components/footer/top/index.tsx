import FooterLogo from "./logo";
import FooterMain from "./main";
import { Image } from '@kdcloudjs/kdesign'
import './index.less';
import React from 'react';


export default function FooterTop(){
    return(
        <div className="footer-top">
            <div>
                <FooterLogo></FooterLogo>
                <FooterMain></FooterMain>
            </div>
            <div style={{textAlign: 'center',marginTop: '43px'}}>
                <Image style={{marginBottom:'7px',width:'98px',cursor: 'pointer',display: 'inline-block'}} src="https://kingdee.design/resource/wechat.jpg"/>
                <div style={{fontFamily:'PingFangSC-Regular,PingFang SC',fontSize:'12px',color: 'hsla(0,0%,100%,.7)',fontWeight: '400'}}>欢迎加入KDesign微信交流群</div>
            </div>
        </div>
    );
};