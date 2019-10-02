import React, { Component } from 'react';

class About extends Component {
  render(){
    const {event} = this.props;
    return (
      <div>           {`About:- ${event.about}  ${event.is_club ? ('CLUB:' + event.club) : ('DEPARTMENT: ' + event.dept)}`}</div>
    )
  }
}

export default About;