import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [parentColor, setParentColor] = useState(randomColor);
  const [childColor,setChildColor] = useState('#FFF');

 function onChildClick(newChildColor){
  const randomColor = getRandomColor();
  setParentColor(randomColor)
  setChildColor(newChildColor)
 }


  return (
    <div className="parent" style={{backgroundColor: parentColor}}>
      <Child color= {childColor} onChangeColor={onChildClick} /> {/*since set color receives a callback function*/}
      <Child color={childColor} onChangeColor={onChildClick} />  {/* Instead of defining another function, we just flow with the setState function that we already know.*/}
    </div>
  );
}

export default Parent;
