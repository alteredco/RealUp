import React from "react";
import "./TextLines.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const TextLines = props => (
  <div className="col s12 m12 l8  offset-l2 flow-text">
    <p className="home2-text-lines" >
                {props.text}
    </p> 
  </div>
);

export default TextLines;
