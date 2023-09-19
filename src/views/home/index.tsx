import React from 'react';
import './index.less';
import Navbar from './components/navbar';
import Banner from './components/banner';
import System from './components/system';
import Rule from './components/rule';
import Footer from './components/footer';

function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <System></System>
            <Rule></Rule>
            <Footer></Footer>
        </div>
    );
  }
  export default Home;