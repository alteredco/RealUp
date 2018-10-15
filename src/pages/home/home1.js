import React, {Component} from "react";
// import logo from '../../../public/assets/images/momscancodepghlogo.jpg';
import SetInterval from '../../components/SetInterval/SetInterval';
// import Button from "../../components/Button";
// import {Link } from 'react-router-dom';
import RandQuote from '../../components/RandQuotes/RandQuote';


class Home1 extends Component {

  render() {
    return (
      <div className="row">
       <div className="logo-img center-align">
        <img alt="logo placeholder" src="./assets/images/REALUPLOGO1-1.png" />
        </div>
        <div><SetInterval /></div>
        <div className="center-align"><RandQuote /></div>
    
      </div>
       
    )
  }
}


export default Home1;