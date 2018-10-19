import React, {Component} from "react";
import RandQuote from '../../components/RandQuotes/RandQuote';


class Results3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
         
    }
  }


  render() {
    return (
      <div className="container">
        <div className="row center-align">
          <RandQuote />
        </div>
      </div>

    )
  }
}


export default Results3;