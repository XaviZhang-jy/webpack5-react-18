import React from 'react';
import './index.less';
import NavbarSearch from "./search";
// @ts-ignore
import { Me } from "@kdcloudjs/kdesign-icons"
import axios from 'axios';
import '../../../../mock/navbar'

const Navbar = () => {

  React.useEffect(() => {
    axios.get('mock/navTitles').then(res => {
      setNavTitles(res.data.navTitles);
    }).catch(error => {
      console.error(error);
    });
  }, []);


  const [navTitles, setNavTitles] = React.useState<Array<string>>([]);
  const [isAtTop, setIsAtTop] = React.useState<boolean>(true);
  const [hovered, setHovered] = React.useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setHovered(true);
  }
  const handleMouseLeave = (): void => {
    setHovered(false);
  }

  const handleScroll = (): void => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsAtTop(scrollTop === 0);
  };

  const style: React.CSSProperties = {
    background: isAtTop && !hovered ? 'transparent' : 'white',
    boxShadow: isAtTop && !hovered ? "none" : "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
  }
  const textStyle: React.CSSProperties = {
    color: isAtTop && !hovered ? "white" : "black",
  }
  const logoStyle: React.CSSProperties = {
    backgroundImage: isAtTop && !hovered ? 'url(https://kingdee.design/theme/kui_white.svg)' : 'url(https://kingdee.design/theme/kui.svg)',
  }
  const MeStyle: React.CSSProperties = {
    fill: isAtTop && !hovered ? '#fff' : 'black',
  }

  // 添加滚动事件监听器
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="navbar" style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navbar-Logo" style={logoStyle}></div>

        <ul className="navbar-titles">
          {navTitles.map((navTitle, index) => (
            <li className="nav-title" key={index}>
              <span className="nav-title-span" style={textStyle}>
                {navTitle}
              </span>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="nav-titles"></div>
          <NavbarSearch isAtTop={isAtTop} hovered={hovered} />
        </div>
      </div>
      <div className="loginLogo-container">
        <Me className="loginLogo" fill={MeStyle.fill} />
      </div>
    </React.Fragment>
  );
}

export default Navbar;
