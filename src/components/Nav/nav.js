import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

class Nav extends React.Component {

    render(){
        return(

        <div className="center-align"> 
        <Link to="/">
                    <Button label="Back"/>
        </Link>	
			<Link to="/">
                    <img height="200px" width="200px" alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
            </Link>	
    
        </div>
    )}
}

export default Nav;