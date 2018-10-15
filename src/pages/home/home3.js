import React, {Component} from "react";
import {Link } from 'react-router-dom';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';

class Home3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home3Txt: "What do you need help with?",
      thoughts1Btn: "Impostor Thoughts",
      feelings1Btn: "Impostor Feelings"       
    }
  }



  render() {
    return (
      <div className="row center-align">
        <div className="row">
          <TextLines text={this.state.home3Txt} />
        </div>
       <div>
       <div className="row">  
          <Link to="/thoughts1">
              <Button label={this.state.thoughts1Btn}/>
          </Link>	
        </div>
       
        <div>  
          <Link to="/feelings1">
              <Button label={this.state.feelings1Btn}/>
          </Link>	
        </div>
        </div>
       </div>
  

      
    )
  }
}


export default Home3;