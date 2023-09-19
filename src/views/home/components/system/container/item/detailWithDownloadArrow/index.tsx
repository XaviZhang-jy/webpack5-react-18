
import React, { useState } from 'react';
import './index.less';
import DownloadArrow from '../download';

interface detailWithDownloadArrowProps{
    title: string;
    img : string;
    text : string;
}

export default function DetailWithDownloadArrow(props:detailWithDownloadArrowProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`detail ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => {
                setHovered(props.title==='设计资源');
            }}
            onMouseLeave={() => setHovered(false)}>
            <img src={props.img} alt="icon" />
            {props.text}
            {hovered && <DownloadArrow/>}
        </div>
    );
}