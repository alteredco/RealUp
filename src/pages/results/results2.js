import React, {Component} from "react";
import {Link } from 'react-router-dom';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';

class Results2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results2TitleTxt: "Just Breathe",
      results2Txt: "As you do this breathing exercise, imagine you're releasing whatever it is your holding on to.",
      results2Txt1: "Breathe in for 1,2,3,4,5",
      results2Txt2: "Breathe out for 1,2,3,4,5",
      results2Txt3: "Repeat this as long as you need to get to a place of calm.",
      results3Btn: "Next"
       
    }
  }



  render() {
    return (
      <div className="row center-align">
        <div className="row">
          <TextLines text={this.state.results2TitleTxt} />
        </div>
        <div className="row">
          <TextLines text={this.state.results2Txt} />
        </div>
        <div className="row" id="breathe-exercise">
          <TextLines text={this.state.results2Txt1} />
          <TextLines text={this.state.results2Txt2} />
          <TextLines text={this.state.results2Txt3} />
        </div>
        <div className="row">  
          <Link to="/results1">
              <Button label={this.state.results3Btn}/>
          </Link>	
        </div>
      </div>

      
    )
  }
}


export default Results2;