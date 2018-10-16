import React, { Component } from 'react';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';
import {Link } from 'react-router-dom';

class Thoughts3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
        thoughts3Title: "Positive Affirmations",
        thoughts3Txt1: "My strength is greater than my struggle",
        startBtn: "Start",
        results1Btn: "Next",        
      }
    }
    render() {
      return (
        <div className="row center-align">
            <div className="row"><TextLines text={this.state.thoughts3Title} /></div>
            <div className="row"><TextLines text={this.state.thoughts3Txt1} /></div>
            {/* <div className="row"><Timer minutes ={this.state.minutes} seconds={this.state.seconds} miliseconds={this.state.miliseconds} /></div> */}
            <div className="row"><Button label={this.state.startBtn}/></div>
            <div className="row"><Link to="/results1"><Button label={this.state.results1Btn}/></Link></div>
        </div>      
      )
    }
  }

export default Thoughts3;