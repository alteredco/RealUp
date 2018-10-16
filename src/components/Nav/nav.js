import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button";
// import { browserHistory } from 'react-router';




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

        <div className="center-align"> 
            <button onClick={this.goBack}>Go Back</button>

                    {/* <Button className="center-align" label="Back"/> */}


		<Link to="/">
                    <img height="200px" width="200px" alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
        </Link>	
    
        </div>
    )}
    
}

export default Nav;