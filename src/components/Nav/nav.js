import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button";




class Nav extends React.Component {
    constructor(props){
        super(props);
        this.goBack=this.goBack.bind(this);
    }

    goBack(){
        window.history.back();
    }
    
    render(){
        return(
<div className="container">

        <div className="center-align"> 
            <button className="center-align left" onClick={this.goBack}>Back</button>

		<Link to="/">
                    <img height="200px" width="200px" alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
        </Link>	
    
        </div>
        </div>
    )}
    
}

export default Nav;