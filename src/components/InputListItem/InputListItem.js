import React from "react";
import "./InputListItem.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const InputListItem = props => (
    <div className="container">
            <div className="input-field col s12 m12 l12 offset-m2 offset-l2 flow-text">
                <label className="active">{props.label}</label>  
                <input
                    className="materialize-textarea"
                    type="text"
                    placeholder={props.placeholder}
                />
        </div>
    </div>
    
);

export default InputListItem;
