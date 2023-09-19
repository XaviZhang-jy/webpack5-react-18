import DetailWithDownloadArrow from './detailWithDownloadArrow';
import './index.less';
import React from 'react';

interface ItemDetail {
  itemDetailImg: string;
  itemDetailText: string;
}

interface ItemProp {
  backgroundImage: string;
  firstTitle: string;
  secondTitle: string;
  itemTitles: string[];
  itemDetails: ItemDetail[][];
}

export default function SystemItem(props: ItemProp) {
  return (
    <div className="item">
      <div className="title" style={{ backgroundImage: props.backgroundImage }}>
        <span className="firstTitle">{props.firstTitle}</span>
        <span className="secondTitle">{props.secondTitle}</span>
      </div>
      <div className="content">
        {props.itemTitles.map((itemTitle, index) => (
          <div key={index}>
            <div className="item-title">{itemTitle}</div>
            <div className="item-content">
              {props.itemDetails[index].map((itemDetail, detailIndex) => (
                <DetailWithDownloadArrow
                  key={detailIndex}
                  img={itemDetail.itemDetailImg}
                  text={itemDetail.itemDetailText}
                  title={props.firstTitle}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
