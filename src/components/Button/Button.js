import React from "react";
import "./Button.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Button = props => (
<button className="btn" onClick={props.onClick} id={props.id}>
            {props.label}
</button> 
);

export default Button;
