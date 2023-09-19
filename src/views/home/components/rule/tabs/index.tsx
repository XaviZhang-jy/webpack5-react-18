import React from 'react'
import { Tabs } from '@kdcloudjs/kdesign'
import './index.less';
import Tab1 from './tabItem1';
import Tab2 from './tabItem2';
import axios from 'axios';
import '../../../../../mock/rule';

export default function RuleTabs() {

    interface ruleData {
        title: string;
        changeUrl: string;
        changeText: string;
        rulePicture: string;
    }

    React.useEffect(() => {
        axios.get('mock/ruleData').then(res => {
            setMainData(res.data.ruleData);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const [curKey, setCurKey] = React.useState(1)

    const [mainData, setMainData] = React.useState<Array<ruleData>>([]);

    const tabStyle = {
        width: '720px',
        height: '108px',
    }

    const change = (id: any): void => {
        setCurKey(id);
        console.log('curKey:' + curKey);
    }

    /**
     * TODO:
     * 有个bug，似乎是对于useEffect的异步理解不对导致的问题。通过使用：{mainData[0] ? mainData[0].title : 'Loading...'} 解决问题。
     * 思考下其他地方为什么没出现问题。
     */

    return (
        <>
            <div style={{ width: '1180px', height: '540px', display: 'flex', justifyContent: 'center', marginTop: '37px' }}>
                <Tabs effect="fade" className='container-tabs' style={tabStyle} activeKey={curKey} onChange={change}>
                    <Tabs.TabPane className='tabs-nav' key={1} tab={<Tab1 number={curKey} />}>
                        <div>
                            <div className="page-title">
                                <span>{mainData[0]&&mainData[0].title}</span>
                                <a href={mainData[0]&& mainData[0].changeUrl} target="">{mainData[0] ? mainData[0].changeText : 'Loading...'}</a>
                            </div>
                            <div className="preview-image">
                                <img src={mainData[0]&&mainData[0].rulePicture} alt="视觉标注" />
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane className='tabs-nav' key={2} tab={<Tab2 number={curKey} />} >
                        <div>
                            <div className="page-title">
                                <span>{mainData[1]&&mainData[1].title}</span>
                                <a href={mainData[1]&&mainData[1].changeUrl} target="">{mainData[1] ? mainData[1].changeText : 'Loading...'}</a>
                            </div>
                            <div className="preview-image">
                                <img src={mainData[1]&&mainData[1].rulePicture} alt="高代码开发" />
                            </div>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}