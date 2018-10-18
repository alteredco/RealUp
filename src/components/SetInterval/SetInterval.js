import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SetInterval extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home2" />
      : <div></div>
  }
}


export default SetInterval;