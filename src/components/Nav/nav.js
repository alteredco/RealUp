import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'




class Nav extends React.Component {
    constructor(props){
        super(props);
        this.goBack=this.goBack.bind(this);
        this.icon= {faArrowLeft};
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
            <Button label={this.backBtnText} onClick={this.goBack} id={this.id}/>
		<Link to="/">
            <img height="200px" width="200px" alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
        </Link>	
    
        </div>
        </div>
    )}
    
}

export default Nav;