import React, {Component} from "react";
import {Link } from 'react-router-dom';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';

class Results1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results1Txt: "Do You Feel Better?",
      results2Btn: "Yes!",
      results3Btn: "Not Really"       
    }
  }



  render() {
    return (
      <div className="row center-align">
        <div className="row">
          <TextLines text={this.state.results1Txt} />
        </div>
        
       <div className="row">  
          <Link to="/results3">
              <Button label={this.state.results2Btn}/>
          </Link>	
        </div>
       
        <div>  
          <Link to="/results2">
              <Button label={this.state.results3Btn}/>
          </Link>	
        </div>
    
       </div>
  

      
    )
  }
}


export default Results1;