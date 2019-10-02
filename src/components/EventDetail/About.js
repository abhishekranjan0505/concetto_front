import React, { Component } from 'react';

class About extends Component {
  render(){
    const {event} = this.props;
    return (
      <div>{event.about}</div>
    )
  }
}

export default About;