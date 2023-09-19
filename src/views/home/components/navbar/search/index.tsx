import React from 'react'
import { Search } from '@kdcloudjs/kdesign'
import './index.less';
import axios from 'axios';
import '../../../../../mock/navbar';

interface searchbarParams {
  isAtTop: boolean;
  hovered: boolean;
}
export default function NavbarSearch(props: searchbarParams) {

  const [version, setVersion] = React.useState<string>();

  React.useEffect(() => {
    axios.get('mock/version').then(res => {
      setVersion(res.data.version);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  const versionStyle = {
    color: props.isAtTop && !props.hovered ? 'white' : '#999',
  }

  return (
    <div className='search-bar'>
      <Search className='search-bar-main' prefix borderType='bordered' placeholder='搜索您感兴趣的内容' />
      <div className="version" style={versionStyle}>{version}</div>
    </div>
  )
}