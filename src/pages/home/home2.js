import React, {Component} from "react";
import TextLines from '../../components/TextLines/TextLines';
class Home2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home2Txt: "Real Up is the simple solution for Impostor Syndrome, the persistent belief that we don't deserve our success."
    }
    
  }
  render() {
    return (
      <div className="row">
        <div><TextLines text={this.state.home2Txt} /></div>
      </div>
      
    )
  }
}


export default Home2;