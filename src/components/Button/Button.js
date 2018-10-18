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
        <i>
            <FontAwesomeIcon icon="arrow-left" />
            </i>
</button> 

> 19 | <a class="btn" href="#">
  20 | <i>
  21 |             <FontAwesomeIcon icon="arrow-left" />
  22 |             </i>
        </a>

);

export default Button;
