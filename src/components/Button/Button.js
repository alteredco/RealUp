import React from "react";
import "./Button.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Button = props => (
    <div className="col s12 m8 l8 offset-m2 offset-l2">
        <button className="btn" onClick={props.onClick} id={props.id}>
            {props.label}
        </button> 
    </div>

);

export default Button;
