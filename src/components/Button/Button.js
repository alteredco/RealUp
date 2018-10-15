import React from "react";
import "./Button.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Button = props => (
<button className="btn-float" onClick={props.onClick} >
            {props.label}
</button> 
);

export default Button;
