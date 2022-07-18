import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({onChangeColor,color}) {
  return <div className="child" style={{ backgroundColor:color }} onClick={()=>onChangeColor(getRandomColor())} />;
}

export default Child;
