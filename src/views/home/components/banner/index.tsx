import React from "react";
import { Carousel } from "@kdcloudjs/kdesign";
import "./index.less";
import axios from 'axios';
import '../../../../mock/banner'
export default function Banner() {

    const [isHovered, setIsHovered] = React.useState<boolean>(false);
    const [bannerPicture,setbannerPicture] = React.useState<Array<string>>([]);

    const handleMouseEnter = () : void => {
      setIsHovered(true);
    };
  

    const handleMouseLeave = () : void => {
      setIsHovered(false);
    };

    React.useEffect(() => {
        axios.get('mock/bannerPicture').then(res =>{
            setbannerPicture(res.data.bannerPicture);
        }).catch(error => {
            console.error(error);
        });
      }, []);


    return (
        <div style={{ display: "flex", flexDirection: "column", height: '332px'}}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        >
            <Carousel className="Carousel"  dots={isHovered} autoplay={true} jumpNode={isHovered}>
                {bannerPicture
                    .map((picture, i) => {
                        return (
                            <div className="banner-picture" style={{
                                backgroundImage: `url(${picture})`,//这里的用法记一下
                                }} key={i}>
                                {/* key={i}的作用：性能优化：使用 key 可以帮助 React 优化更新过程。React 会使用 key 来跟踪每个元素的状态，从而只更新发生了变化的元素，而不是重新渲染整个列表。
                                元素识别：在没有 key 的情况下，当您改变了数组中的元素顺序、添加或删除元素时，React 会遇到困难，因为它无法准确地知道哪些元素发生了变化，从而可能导致不正确的更新。 */}
                            </div>
                        );
                    })}
            </Carousel>
        </div>
    );
}
