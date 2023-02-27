import React, { ChangeEvent, useEffect, useState } from "react";
import "./listItem.css"
import beer from "../assets/øl.jpg"
import { CartItem } from "../App";


interface Image {
  imageSrc: string;
}

interface IListItem {
  handleChange: (index: number, id: string, value: number ) => void,
  index: number,
  item: CartItem,
}

const ListItem = ({handleChange, index, item}: IListItem) => {
  // const imagesrc = `../assets/${imageSrc}`
    
   return (
     <div className="cardContainer"> 
      <div className="cardImage">
        <img src={beer} className="imageItem"/>
      </div>
      <div className="cardItemContainer" >
        <div className="cardItemGrid"> 
          <div className="cardItem"> 
            {item.specificItem.name}
            <div>
              id : {item.specificItem.id}
            </div>
           </div>
          <div className="cardItem"> 
          Each
          <div>
            {item.specificItem.price + " " + item.specificItem.currency}
          </div>
         </div>
          <div className="cardItem">
          Quantity
            <div>
              <input type="number" pattern="[0-9]*" value={item.quantity.toString()} onChange={e => handleChange(index, item.id, parseInt(e.currentTarget.value))} onWheel={(e) => e.currentTarget.blur()} />
            </div>
          </div>
          <div className="cardItem">
            Total
            <div>
              {item.quantity*item.specificItem.price + " " + item.specificItem.currency}
            </div>
          </div>
        </div>
        <div className="cardItemButtons">
          <button className="button" onClick={() => alert("not implemented")}>Remove</button>
        </div>
      </div>
     </div> 
   );
}

export default ListItem;