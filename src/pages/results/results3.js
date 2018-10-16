import React, {Component} from "react";
import RandQuote from '../../components/RandQuotes/RandQuote';
import Button from '../../components/Button/Button';

class Results3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
         
    }
  }


  render() {
    return (
      <div className="row center-align">
        <RandQuote />
      </div>

    )
  }
}


export default Results3;