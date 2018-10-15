import React from "react";
import "./QuotesBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const QuotesBtn = props => (
<button className="btn-float" onClick={props.onClick} >
            {props.label}
</button> 
);

export default QuotesBtn;
