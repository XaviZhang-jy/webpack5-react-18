import { Typography } from '@kdcloudjs/kdesign'
import './index.less';
import ItemContainer from './container';
import React from 'react';

const { Text } = Typography

export default function System(){
    return(
        <div className='system'>
            <Text className='system-title'>完善的设计开发资源</Text>
            <Text style={{display:'block',fontSize:'16px'}} type="assist">开发极致的产品</Text>
            <ItemContainer></ItemContainer>
        </div>
    );
};