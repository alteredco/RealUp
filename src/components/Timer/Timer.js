import React, { Component } from 'react';
import Button from '../Button/Button';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: '00',  
      minutes: '02' 
    }
    this.tick = this.tick.bind(this);
  }
  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
    this.setState({
      value: "0" + min,
     })
    }
    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
      }
      this.secondsRemaining--
  }
  componentDidMount() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  
  render() {
    return(
      <div>
      <div className="row">{this.state.minutes}:{this.state.seconds}</div>
      </div>
    );
  }
}


export default Timer;
