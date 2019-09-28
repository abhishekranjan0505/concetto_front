import React, { Component } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
import Parallax from "../parallax";

let max_offset, initial_offset;

const styles = theme => ({
  logo: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    transition: "all 3s ease",
    position: "fixed",
    transform: "translate(-50 %, -50 %)"
  },
  parallax: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  moon: {
    display: "flex",
    zIndex: 200,
    // height: "1800px",
    bottom: 0,
    position: "fixed"
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(window.innerWidth);
    if (window.innerWidth < 1400) {
      initial_offset = 52;
      max_offset = 62;
    } else if (window.innerWidth < 1700) {
      initial_offset = 42;
      max_offset = 52;
    } else {
      initial_offset = 35;
      max_offset = 44;
    }
    this.state = {
      offset: initial_offset,
      header: false,
      x: 0
    };
    this.homeRef = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ x: window.scrollY });
    window.addEventListener("scroll", this.handleScroll);
    if (window.innerWidth > 600) {
      window.addEventListener("scroll", this.handleScroll1);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll1);
  }

  handleScroll = event => {
    let scrollTop = window.pageYOffset;
    const { offset, header } = this.state;
    if (scrollTop > window.innerHeight / 10) {
      if (!header) {
        this.setState({
          header: true
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-home");
          this.homeRef.current.classList.toggle("logo-header");
        }
      }
      if (offset !== max_offset) {
        this.setState({
          offset: max_offset
        });
      }
    } else {
      if (header) {
        this.setState({
          header: false
        });
        if (this.homeRef.current) {
          this.homeRef.current.classList.toggle("logo-header");
          this.homeRef.current.classList.toggle("logo-home");
        }
      }
      this.setState({
        offset: initial_offset + (scrollTop / window.innerHeight) * 100
      });
    }
  };

  handleScroll1 = event => {
    this.setState({ x: window.scrollY });
  };

  render() {
    const { classes } = this.props;
    const { offset, x } = this.state;
    return (
      <div>
        <div className={classes.logo}>
          <img
            src="./assets/logo.png"
            className={`logo logo-home`}
            ref={this.homeRef}
            alt={Loading}
          />
        </div>
        {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw"
            }}
          >
            <img
              src="./assets/moon_surface.png"
              className={classes.moon}
              alt="moon"
              style={{ transform: "translateY(" + offset + "vh)" }}
            />
          </div>
        }
        <div className={classes.parallax}>
          <Parallax
            x={x}
            image1="assets/download1.jpg"
            image2="assets/download2.jpg"
            image3="assets/download3.jpg"
          />
          <Parallax
            x={x}
            image1="assets/logo.png"
            image2="assets/moon_surface.png"
            image3="assets/index.jpeg"
          />
          <Parallax
            x={x}
            image1="assets/download1.jpg"
            image2="assets/download2.jpg"
            image3="assets/download3.jpg"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
