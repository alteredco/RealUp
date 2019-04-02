import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../BackButton";
import "./nav.css";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



class Nav extends React.Component {
    constructor(props){
        super(props);
        this.goBack=this.goBack.bind(this);
        this.icon= {faArrowLeft};
        this.backBtnText="";
        this.id="backbutton";
    }

    goBack(){
            window.history.back();
    }
    
    render(){
        
        

        if ((window.location.pathname !== "/") && (window.location.pathname !== "/home2") && (window.location.pathname !== "/android_asset/www/index.html")) {

        return(

        <div className="container">
        <div className="row">
        <div>
            <BackButton label={this.backBtnText} onClick={this.goBack} id={this.id}/>
        </div> 


         <div className="col">
		<Link to="/home2">
            <img className="logo" id="logo" height="auto" width="300px" alt="logo placeholder" src="/android_asset/www/assets/images/RealUpLogo.10.16.png" />
        </Link>
        </div>	 

        </div>
        </div>

        );
        }
        else {
            
        
        return (

            
        <div className="col">
		<Link to="/home2">
            <img class="logo" height="auto" width="300px" alt="logo placeholder" src="/android_asset/www/assets/images/RealUpLogo.10.16.png" />
        </Link>
        </div>	 
        );  
        }     
    }
    
}

export default Nav;