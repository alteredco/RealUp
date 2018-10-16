import React, {Component} from "react";
import {Link } from 'react-router-dom';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';

class Home2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home2Txt: "Real Up is the simple solution for Impostor Syndrome, the persistent belief that we don't deserve our success.",
      home2Btn: "Let's Get Started",
       
    }
  }



  render() {
    return (
      <div className="row center-align">
        <div className="row">
          <TextLines text={this.state.home2Txt} />
        </div>
       <div>
       <div className="row">  
          <Link to="/home3">
              <Button label={this.state.home2Btn}/>
          </Link>	
        </div>
       </div>
      </div>

      
    )
  }
}


export default Home2;