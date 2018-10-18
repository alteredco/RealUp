import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../BackButton";
import "./nav.css";



class Nav extends React.Component {
    constructor(props){
        super(props);
        this.goBack=this.goBack.bind(this);
        this.backBtnText="Back";
        this.id="backbutton";
    }

    goBack(){
        window.history.back();
    }
    
    render(){
        return(
    <div className="container">
        <div className="center-align"> 
            <BackButton label={this.backBtnText} onClick={this.goBack} id={this.id}/>
		<Link to="/">
            <img height="300px" width="300px" alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
        </Link>	
    
        </div>
        </div>
    )}
    
}

export default Nav;