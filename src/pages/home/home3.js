import React, {Component} from "react";
import {Link } from 'react-router-dom';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';

class Home3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home3Txt: "Placeholder text home page 3",
      home3Btn: "Let's Get Started",
       
    }
  }



  render() {
    return (
      <div className="row">
        <div>
          <TextLines text={this.state.home3Txt} />
        </div>
       <div>
       <div>  
          <Link to="/home3">
              <Button label={this.state.home3Btn}/>
          </Link>	
        </div>
       </div>
      </div>

      
    )
  }
}


export default Home3;