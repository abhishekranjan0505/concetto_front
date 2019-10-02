import React, { Component } from "react";

class Details extends Component {
  render() {
    const { event } = this.props;
    return <div className="container">{event.description}</div>;
  }
}

export default Details;
