import React, { Component } from 'react';
import Typograhy from '@material-ui/core/Typography';

class DepatmentEvent extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        {events.map((event,id)=>{
        return (
        <div className="cards">
          <div className="card-item">
            <div className="card-image">
              <img
                src={`${event.img}`}
                alt='helo'
              />
            </div>
            <div className="card-info">
              <h2 className="card-title">{event.name}</h2>
              <p className="card-intro">{event.prizes}</p>
              <p className="card-intro club-text">{event.dept}</p>
            </div>
          </div>
        </div>
        );})}
      </div>
    );
  }
}
export default DepatmentEvent;