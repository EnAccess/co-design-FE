import { dataItem } from "../../utils/dataItem";
import React from "react"; 


const DataItem = ({ item }: any) => (
  <div>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
  </div>
);

const DataComponent = () => (
  <div>
    {dataItem.map((item, index) => (
      <DataItem key={index} item={item} />
    ))}
  </div>
);

export default DataComponent;