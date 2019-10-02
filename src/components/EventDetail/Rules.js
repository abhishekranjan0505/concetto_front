import React, { Component } from "react";

class Rules extends Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <br />
        {event.rules.split(";").map(str => (
          <p>
            {"  " + str}
            <br />
          </p>
        ))}
      </div>
    );
  }
}

export default Rules;
