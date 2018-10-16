import React from "react";
import "./InputListItem.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const InputListItem = props => (
    <div class="row">
        <div class="input-field col s6">
            <label class="active">{props.label}</label>  
            <input
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    </div>
    
);

export default InputListItem;
