import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../BackButton";
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
        <div className="row col s12 m8 l8 offset-m2 offset-l2">
        <div>
            <BackButton label={this.backBtnText} onClick={this.goBack} id={this.id}/>
        </div> 
        <div className="col s12 m8 l8 offset-m1 offset-12">
		<Link to="/">
            <img class="logo" height="auto" width="300px" alt="logo placeholder" src="./assets/images/RealUpLogo.10.16.png" />
        </Link>
        </div>	
    
        </div>
        </div>
    )}
    
}

export default Nav;