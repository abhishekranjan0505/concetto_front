import React, { Component } from "react";
import Home from "./Home";
import EventPage from "./EventPage";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./Login";
import EventDetail from "./EventDetail";
import OurTeam from "./OurTeam";
import ComingSoon from "./ComingSoon";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: false,
      preloader: true,
      delayed: false
    };
    this.makeShowLogo = this.makeShowLogo.bind(this);
    this.hideLogo = this.hideLogo.bind(this);
  }

  makeShowLogo() {
    const { header } = this.state;
    if (!header) this.setState({ header: true });
  }

  hideLogo() {
    const { header } = this.state;
    if (header) this.setState({ header: false });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ preloader: false });
    // setTimeout(() => {
    //   this.setState({ delayed: true });
    // }, 4000);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { preloader } = this.props;
    const { delayed } = this.state;
    // if (preloader && !delayed) {
    //   return <div>Loading .........</div>;
    // }
    // const PrivateRouteCommon = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.props.auth.isAuthenticated ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    // const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.props.auth.isAuthenticated && this.props.auth.userinfo.admin ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    // const PrivateRouteStudent = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       this.props.auth.isAuthenticated && !this.props.auth.userinfo.admin ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    // const PublicRoute = ({ component: Component, ...rest }) => (
    //   <Route
    //     {...rest}
    //     render={props =>
    //       !this.props.auth.isAuthenticated ? (
    //         <Component {...props} />
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/home",
    //             state: { from: props.location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );

    return (
      <div className="App">
        {/* <HomeHeader
          showLogo={this.state.header}
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          registerUser={this.props.registerUser}
        /> */}
        <Switch location={this.props.location}>
          <Route
            exact
            path="/home"
            component={() => (
              <Home makeShowLogo={this.makeShowLogo} hideLogo={this.hideLogo} />
            )}
          />
          <Route
            exact
            path="/events/eventDetail"
            component={() => (
              <EventDetail events={this.props.events} auth={this.props.auth} />
            )}
          />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/our_team" component={() => <OurTeam />} />
          <Route exact path="/coming_soon" component={() => <ComingSoon />} />
          <Route exact path="/events" component={() => <EventPage />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
