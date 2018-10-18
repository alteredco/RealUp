import React, {Component} from "react";
// import logo from '../../../public/assets/images/momscancodepghlogo.jpg';
import SetInterval from '../../components/SetInterval/SetInterval';
import Button from "../../components/Button";
import {Link } from 'react-router-dom';
class Home1 extends Component {

  render() {
    return (
      <div className="container">
        <div className="row valign-wrapper">
          <div className="logo-img center-align">
            <img alt="logo placeholder" src="./assets/images/RealUpLogo.10.16.png" className="col s12 m12 l8"/>
          </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l8 center-align">
          <Link to="/home2">
                      <Button label="Let's Get Started"/>
          </Link>	
          <SetInterval />
          </div>
        </div>
      </div>
       
    )
  }
}


export default Home1;