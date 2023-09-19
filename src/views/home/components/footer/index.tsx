import FooterBottom from "./bottom";
import FooterTop from "./top";
import './index.less';
import React from 'react';


export default function Footer(){
    return(
        <div className="footer">
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </div>
    );
};