import React, { useEffect, useState } from "react";
import "./listItem.css"
import beer from "../assets/øl.jpg"

interface Image {
  imageSrc: string;
}

const ListItem = ({imageSrc}:Image) => {
  const imagesrc = `../assets/${imageSrc}`
  
  console.log(imagesrc)
   return (
     <div className="cardContainer"> 
      <div className="cardImage">
        <img src={beer} className="imageItem"/>
      </div>
      <div className="cardItemContainer" >
        <div className="cardItem"> 
          <div> test </div>
          <div> test </div>
          <div> test </div>
          <div> test </div>
        </div>
        <div className="cardItemButtons">
          <button className="button" >Remove</button>
        </div>
      </div>
     </div> 
   );
}

export default ListItem;