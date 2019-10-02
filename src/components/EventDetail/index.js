import React, { Component } from "react";
import "./Styles.css";
import Loading from "../Loading";
import About from "./About";
import Rules from "./Rules";
import Details from "./Details";
import Register from "./Register";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.aboutShow = this.aboutShow.bind(this);
    this.rulesShow = this.rulesShow.bind(this);
    this.detailsShow = this.detailsShow.bind(this);
    this.registerShow = this.registerShow.bind(this);
  }
  state = {
    active: "about"
  };

  aboutShow = active => {
    this.setState({
      active: "about"
    });
  };
  rulesShow = active => {
    this.setState({
      active: "rules"
    });
  };
  detailsShow = active => {
    this.setState({
      active: "details"
    });
  };
  registerShow = active => {
    this.setState({
      active: "register"
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { event } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40vh",
            backgroundColor: "rgba(97, 97, 97, 0.1)",
            height: "100vh",
            position: "fixed"
          }}
        >
          <div>
            <a href="home">
              <img
                src="https://concetto-front.s3.ap-south-1.amazonaws.com/logo.png"
                className="img-fluid"
                alt={Loading}
              />
            </a>
          </div>
          <div className="btnFlex">
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "about" ? "active-bottom" : "")
              }
              onClick={this.aboutShow}
            >
              ABOUT
            </button>
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "rules" ? "active-bottom" : "")
              }
              onClick={this.rulesShow}
            >
              RULES
            </button>
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "details" ? "active-bottom" : "")
              }
              onClick={this.detailsShow}
            >
              DETAILS
            </button>
            <button
              className={
                "btn btn-event btn-2 " +
                (this.state.active === "register" ? "active-bottom" : "")
              }
              onClick={this.registerShow}
            >
              REGISTER
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "40vh"
          }}
        >
          <img
          src={event.img}
          alt={event.name}
          />
        <div>
            {event.name}
          </div>
          {this.state.active === 'about' && <About event={this.props.event}/>}
          {this.state.active === 'rules' && <Rules event={this.props.event}/>}
          {this.state.active === 'details' && <Details event={this.props.event}/>}
          {this.state.active === 'register' && <Register event={this.props.event}/>}
        </div>
      </div>
    );
  }
}

export default EventDetail;
