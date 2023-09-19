import SystemItem from "./item";
import './index.less';
import React from 'react';
import axios from "axios";
import '../../../../../mock/system';
  
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

export default function ItemContainer() {

  const [itemProps, setItemProps] = React.useState<Array<ItemProp>>([]);

  React.useEffect(() => {
    axios.get('mock/itemProps').then(res => {
      setItemProps(res.data.itemProps);
    }).catch(error => {
      console.error(error);
  });
  }, [])
  return (
    <div className="contain">
      {itemProps.map((itemProp, index) => (
        // @ts-ignore
        //TODO: 这里咋回事？为啥会报错，key不是特殊属性不会进行传递吗？
        <SystemItem  {...itemProp}>
        </SystemItem>
      ))}
    </div>
  );
};