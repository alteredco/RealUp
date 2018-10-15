import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {

    render(){
        return(

        <div > 
			<Link to="/">
                    <img height="200px" width="200px" alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
            </Link>	
    
        </div>
    )}
}

export default Nav;