import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";




class Nav extends React.Component {
    constructor(props){
        super(props);
        this.goBack=this.goBack.bind(this);
        this.backBtnText="Back";
    }

    goBack(){
        window.history.back();
    }
    
    render(){
        return(
    <div className="container">

        <div className="center-align"> 
            <Button className="left-align" label={this.backBtnText} onClick={this.goBack}/>
		<Link to="/">
            <img height="200px" width="200px" alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
        </Link>	
    
        </div>
        </div>
    )}
    
}

export default Nav;