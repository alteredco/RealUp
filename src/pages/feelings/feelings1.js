import React, {Component} from "react";
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';
import {Link } from 'react-router-dom';

class Feelings1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
          feelings1Txt: "Imposter Syndrome can cause feelings of anxiety, fear, depression.",
          feelings2Txt: "Real Up is here to help you manage through this physiological response.",
          feelings1Btn: "I'm Ready",  

        }
      }
    render() {
      return (
        <div className="row center-align">
            <div className="row"><TextLines text={this.state.feelings1Txt} /></div>
            <div className="row"><TextLines text={this.state.feelings2Txt}/></div>
            <div className="row"><Link to="/feelings2"><Button label={this.state.feelings1Btn}/></Link></div>
        </div>      
      )
    }
  }

export default Feelings1;
