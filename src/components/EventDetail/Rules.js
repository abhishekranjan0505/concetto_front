import React, { Component } from 'react';

class Rules extends Component {
  render() {
    const {event} = this.props;
    return (
      <div>{event.rules}</div>
    )
  }
}

export default Rules;