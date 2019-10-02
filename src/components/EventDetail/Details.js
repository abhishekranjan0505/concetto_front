import React, { Component } from 'react';

class Details extends Component {
  render() {
    const {event} =this.props;
    return (
      <div>{event.description}</div>
    )
  }
}

export default Details;