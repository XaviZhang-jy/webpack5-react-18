import axios from 'axios';
import './index.less';
import React from 'react';
import '../../../../../../mock/footer'

interface footerMainItem {
    id: string,
    url: string,
    content:string
}
export default function FooterMain(){
    const [data,setData] = React.useState<Array<footerMainItem>>([]);

    React.useEffect(()=>{
        axios.get('mock/footerMain/data').then(res=>{
            setData(res.data.footerMainData);
        }).catch(error => {
            console.error(error);
        });
    },[])

    return(
        <div className="footer-main">
            <div className="footer-main-item">
                <div style={{color:' #fff',opacity:' .7',fontSize:' 14px'}}>邮箱:</div>
                <div style={{fontSize: '16px',marginTop: '10px',display: 'flex',maxWidth: '620px'}}>KUX@kingdee.com</div>
            </div>
            <div className="footer-main-item">
                <div style={{color:' #fff',opacity:' .7',fontSize:' 14px'}}>快速链接：</div>
                <div style={{fontSize: '16px',marginTop: '10px',display: 'flex',maxWidth: '620px'}}>
                    {data.map((item)=>(
                        <a key={item.id} href={item.url} target="_black">{item.content}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};