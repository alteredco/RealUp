import React, {Component} from "react";
import InputListItem from '../../components/InputListItem/InputListItem';
import Button from '../../components/Button/Button';
import TextLines from '../../components/TextLines/TextLines';
import {Link } from 'react-router-dom';
import './feelings.css';

class Feelings2 extends Component {
    constructor(props) {
      super(props)
      this.state = {
          feelings2Quest1: "How do you feel in this moment",
          feelings2Quest2: "Where in your body do you feel this",
          feelings2Quest3: "How would you help a friend feeling this way",
          feelings2Placeholder1: "I'm feeling stressed, anxious, nervous",
          feelings2Placeholder2: "My neck, my back",
          feelings2Placeholder3: "",
          feelings2Txt: "Focus on the feeling with kindness and curiosity and then let it go.",
          feelings3Btn: "Next",        
        }
      }
    render() {
      return (
        <div className="container">
          <div className="row center-align">
            <form >
              <InputListItem
                  label={this.state.feelings2Quest1} 
                  placeholder={this.state.feelings2Placeholder1} />

              <InputListItem
                  label={this.state.feelings2Quest2} 
                  placeholder={this.state.feelings2Placeholder2} />
         
              <InputListItem
                  label={this.state.feelings2Quest3} 
                  placeholder={this.state.feelings2Placeholder3} />
    

              </form>
          </div> 
          <div className="row center-align">
              <TextLines text={this.state.feelings2Txt}/>
          </div> 
          <div className="row center-align">
              <Link to="/feelings3"><Button label={this.state.feelings3Btn}/></Link>
          </div>  
        </div>  
      )
    }
  }

export default Feelings2;
