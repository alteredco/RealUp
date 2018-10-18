import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: '00',  
      minutes: '2' 
    }
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  startTimer() {
    if (this.state.minutes === "2" && this.state.seconds === "00") {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.minutes;
      this.secondsRemaining = time * 60;
    }
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
  componentWillUnmount(){
    clearInterval(this.intervalHandle);
  }
  
  render() {
    return(
      <div>
        <div className="row">
          <div className="col s12 m8 l8 offset-m2 offset-l2">
            <button className="btn-floating btn-large green" onClick={this.startTimer}>START</button>
          </div>
        </div>
        
        <div className="row">
          <div className="col s12 m8 l8 offset-m2 offset-l2">
            <h2>{this.state.minutes}:{this.state.seconds}</h2>
          </div>
        </div>
      </div>
    );
  }
}


export default Timer;
