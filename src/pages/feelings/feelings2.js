import React, {Component} from "react";
import InputListItem from '../../components/InputListItem/InputListItem';
import Button from '../../components/Button/Button';
import TextLines from '../../components/TextLines/TextLines';
import {Link } from 'react-router-dom';

class Feelings2 extends Component {
    constructor(props) {
      super(props)
      this.state = {
          feelings2Quest1: "How do you feel in this moment",
          feelings2Quest2: "Where in your body do you feel this",
          feelings2Quest3: "How would you help a fried feeling this way",
          feelings2Placeholder1: "I'm feeling stressed, anxious, nervous",
          feelings2Placeholder2: "My neck, my back",
          feelings2Placeholder3: "",

          feelings3Btn: "Next",        
        }
      }
    render() {
      return (
        <div>
          <div className="row center-align">
            <form class="col s8">
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
              <TextLines label={this.state.feelings3Btn}/>
          </div> 
          <div className="row center-align">
              <Link to="/feelings3"><Button label={this.state.feelings3Btn}/></Link>
          </div>  
        </div>  
      )
    }
  }

export default Feelings2;