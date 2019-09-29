import React, { Component } from "react";
// import Image from "reactstrap";
import "./Styles.css";
import Loading from "../Loading";
import About from "./About";
import Rules from "./Rules";
import Details from "./Details";
import Register from "./Register";

class EventDetail extends Component {
  constructor(props){
    super(props);
      this.aboutShow=this.aboutShow.bind(this);
      this.rulesShow = this.rulesShow.bind(this);
      this.detailsShow = this.detailsShow.bind(this);
      this.registerShow = this.registerShow.bind(this);
  }
state={
  active:'about',
};

  aboutShow = (active) => {
  this.setState({
    active: 'about',
  })
}
  rulesShow = (active) => {
      this.setState({
        active: 'rules',
      })
}
  detailsShow = (active) => {
      this.setState({
        active: 'details',
      })
}
  registerShow = (active) => {
      this.setState({
        active: 'register',
      })
}
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    // const items = [
    //   {
    //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //     altText: 'Slide 1',
    //     caption: 'Slide 1',
    //     header: 'Slide 1 Header'
    //   },
    //   {
    //     src: 'http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg',
    //     altText: 'Slide 2',
    //     caption: 'Slide 2',
    //     header: 'Slide 2 Header'
    //   },
    //   {
    //     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    //     altText: 'Slide 3',
    //     caption: 'Slide 3',
    //     header: 'Slide 3 Header'
    //   }
    // ];
    const event = {
      id: 1,
      name: "Event 1",
      is_team: 0,
      max_participants: 3,
      dept: "Computer Science and Engineering",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      club: "",
      rules:
        "1. Only 3 participants are allowed \n 2. No participation fee \n 3. No cheating",
      prizes: "4000,2000,1000",
      scores: false,
      img: "",
      fee: 0,
      start: "2019-10-20T09:30:00.890Z",
      end: "2019-10-20T12:30:00.890Z"
    };
    return (
      <div style={{ display: "flex"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50vh",
            backgroundColor: "rgba(97, 97, 97, 0.1)",
            height: "100vh"
          }}
        >
          <div>
            <img src="assets/logo.png" className="img-fluid" alt={Loading} />
          </div>
          <div className="btnFlex">
            <button className={"btn btn-event btn-2 "+((this.state.active==='about')?'active-bottom':'')} onClick={this.aboutShow}>ABOUT</button>
            <button className={"btn btn-event btn-2 "+((this.state.active==='rules')?'active-bottom':'')} onClick={this.rulesShow}>RULES</button>
            <button className={"btn btn-event btn-2 "+((this.state.active==='details')?'active-bottom':'')} onClick={this.detailsShow}>DETAILS</button>
            <button className={"btn btn-event btn-2 "+((this.state.active==='register')?'active-bottom':'')} onClick={this.registerShow}>REGISTER</button>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {/* <ul className="slides">
            <input type="radio" name="radio-btn" id="img-1" checked />
            <li className="slide-container">
              <div className="slide">
                <img
                  src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg"
                  alt={event.name}
                />
              </div>
              <div className="nav">
                <label for="img-6" className="prev">
                  &#x2039;
                </label>
                <label for="img-2" className="next">
                  &#x203a;
                </label>
              </div>
            </li>
            <input type="radio" name="radio-btn" id="img-2" />
            <li className="slide-container">
              <div className="slide">
                <img
                  src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
                  alt={event.name}
                />
              </div>
              <div className="nav">
                <label for="img-1" className="prev">
                  &#x2039;
                </label>
                <label for="img-3" className="next">
                  &#x203a;
                </label>
              </div>
            </li>
            <li className="nav-dots">
              <label for="img-1" className="nav-dot" id="img-dot-1"></label>
              <label for="img-2" className="nav-dot" id="img-dot-2"></label>
            </li>
          </ul> */}
                {/* <UncontrolledCarousel items={items} /> */}
          <img
          src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg"
          alt={event.name}
          fluid
          />
        {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="..." alt="First slide" />
    </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Second slide" />
    </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div> */}
            <div>
            {event.name}
          </div>
          {this.state.active === 'about' && <About />}
          {this.state.active === 'rules' && <Rules />}
          {this.state.active === 'details' && <Details />}
          {this.state.active==='register' && <Register />}
        </div>
      </div>
    );
  }
}

export default EventDetail;
