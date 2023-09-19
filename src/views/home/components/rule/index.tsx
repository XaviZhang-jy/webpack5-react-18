import React from 'react';
import './index.less';
import { Typography } from '@kdcloudjs/kdesign'
import RuleTabs from './tabs';
const { Text } = Typography

export default function Rule() {
    return (
        <div className="rule">
            <Text className='system-title'>灵活丰富的典型页面规则</Text>
            <Text style={{display:'block',fontSize:'16px'}} type="assist">助力高品质平台开发</Text>
            <RuleTabs></RuleTabs>
        </div>
    );
};