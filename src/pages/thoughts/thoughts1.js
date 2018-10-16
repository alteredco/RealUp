import React, {Component} from "react";
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';
import {Link } from 'react-router-dom';

class Thoughts1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
          thoughts1Txt: "Intelligence, Talent, Education don’t determine success or failure. Mindset does.",
          question1Txt: "Are you ready to change your negative thinking?",
          thoughts2Btn: "I'm Ready",        
        }
      }
    render() {
      return (
        <div className="row center-align">
            <div className="row"><TextLines text={this.state.thoughts1Txt} /></div>
            <div className="row"><TextLines text={this.state.question1Txt}/></div>
            <div className="row"><Link to="/thoughts2"><Button label={this.state.thoughts2Btn}/></Link></div>
        </div>      
      )
    }
  }

export default Thoughts1;