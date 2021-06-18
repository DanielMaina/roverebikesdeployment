import React from "react";
import ReactDOM from "react-dom";

import logo from "../assets/images/logo.png";
import socialLogoInstagram from "../assets/icons/social/instagram.svg";
import socialLogoFacebook from "../assets/icons/social/facebook.svg";
import socialLogoLinkedin from "../assets/icons/social/linkedin.svg";
import socialLogoTwitter from "../assets/icons/social/twitter.svg";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: false,
      headerClass: "normal",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let headerClass = "normal";
      let targetOffset = $("#main div div").height() + 400;
      if (window.scrollY > targetOffset) {
        headerClass = "fixed";
      }

      this.setState((prevState, props) => {
        return { headerClass: headerClass };
      });
    });
  }

  toggleMenu() {
    this.setState((prevState, props) => {
      return { menuStatus: !prevState.menuStatus };
    });
  }

  render() {
    return (
      <div>
        <header className={"App-header" + " " + this.state.headerClass}>
          <a
            href="/"
            className="rover-ebike-logo"
            alt="Rover E-Bike"
            style={{
              backgroundImage: "url(" + logo + ")",
            }}
          ></a>
          <div className="rover-xy-menu"></div>

          <div className="header-sub">
            <div className="cart-logo">
              <a href="#"></a>
            </div>

            <div
              className={
                "hamburger-menu" + (this.state.menuStatus ? " active" : "")
              }
              onClick={() => this.toggleMenu()}
            >
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>

            <nav className={this.state.menuStatus ? "navbar active" : "navbar"}>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/product" className="nav-link">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Warranty
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="main">{this.props.children}</section>
        <footer className="App-footer">
          <div className="footer-logo">
            <img
              className="rover-ebike-logo"
              alt="Rover E-Bike"
              src={logo}
              href="/"
            />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Privacy & Legal</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Warranty</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <img src={socialLogoInstagram} alt="Instagram" />
            <img src={socialLogoFacebook} alt="Facebook" />
            <img src={socialLogoLinkedin} alt="LinkedIn" />
            <img src={socialLogoTwitter} alt="Twitter" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
