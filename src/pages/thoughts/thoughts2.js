import React, {Component} from "react";
import InputListItem from '../../components/InputListItem/InputListItem';
import Button from '../../components/Button/Button';
import {Link } from 'react-router-dom';

class Thoughts2 extends Component {
    constructor(props) {
      super(props)
      this.state = {
          thoughts2Quest1: "I started to thinking about this when",
          thoughts2Quest2: "What are my thoughts",
          thoughts2Quest3: "What supports this",
          thoughts2Quest4: "What does not support it",
          thoughts2Placeholder1: "I was getting ready for work",
          thoughts2Placeholder2: "I'm not prepared, I shouldn't be given this role",
          thoughts2Placeholder3: "I've never done this before",
          thoughts2Placeholder4: "",
          thoughts3Btn: "Next",        
        }
      }
    render() {
      return (
        <div>
          <div className="row center-align">
            <form class="col s8">
              <InputListItem
                  label={this.state.thoughts2Quest1} 
                  placeholder={this.state.thoughts2Placeholder1} />

              <InputListItem
                  label={this.state.thoughts2Quest2} 
                  placeholder={this.state.thoughts2Placeholder2} />
         
              <InputListItem
                  label={this.state.thoughts2Quest3} 
                  placeholder={this.state.thoughts2Placeholder3} />
    
              <InputListItem
                  label={this.state.thoughts2Quest4}
                  placeholder={this.state.thoughts2Placeholder4}/>

              </form>
          </div> 

          <div className="row center-align">
              <Link to="/thoughts3"><Button label={this.state.thoughts3Btn}/></Link>
          </div>  
        </div>  
      )
    }
  }

export default Thoughts2;