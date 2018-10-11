import React, {Component} from "react";
import QuotesBtn from "../components/QuotesBtn";

    const Title = (props) => {
        return (
          <div>
            <h1> {props.name} </h1>
          </div>
        )
      }
      
//       const QuotesButton = (props) => {
//           return(
// /* <a className="btn-float" {...props}>
// <i className="material-icons">delete</i>
// </a> */

//           <button className="btn-float" onClick={props.onClick} >
//            {props.label}

//           </button>

//           )
//       }
      
      const Result = (props) => {
        return (
          <div>
            <p> {props.quote} </p>
          </div>
        )
      }
      
      
    class Home extends Component {
        constructor(props) {
          super(props)
          this.state = {
            titlePage: 'Quotes',
            curQuote: 0,
            nextBtn : 'Next Quote',
            quotes : [
              'If it hurts, do it more often',
              'Adding manpower to a late software project makes it later!',
              'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
              'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
              'Premature optimization is the root of all evil.',
              'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
            ]
          
          }
        }
      
        selectNextQuote = (value) => {
          return () => {
            this.setState({curQuote: value})
          }
        }
        
      
      
        render() {
              return (
              
                <div>
                  <Title name = {this.state.titlePage} /> 
                  <Result  quote = {this.state.quotes[this.state.curQuote]} 
                  /> 
                  <QuotesBtn
                      onClick={this.selectNextQuote(this.state.curQuote+1)}
                      label= {this.state.nextBtn}
                  />
                </div>
              
      
          )
        }
      }
      

export default Home;