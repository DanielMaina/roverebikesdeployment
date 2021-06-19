import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import headerImage from "../../assets/images/contact-page-header.png";
import footerImage from "../../assets/images/contact-page-footer.png";
import {
  PhoneOutlined,
  EmailOutlined,
  RoomOutlined,
  Search,
} from "@material-ui/icons";

import FeaturedProducts from "../../components/FeaturedProducts";

class ContactPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | Contact", true);

    this.state = {};
  }

  render() {
    return (
      <div className="contact-page">
        <div className="main-content">
          <div
            className="main-content-bg"
            style={{
              backgroundImage: "url(" + headerImage + ")",
            }}
            alt="Main Content Asset"
          />

          <div className="contact-area">
            <div className="contact-information">
              <h4>Get in touch with us!</h4>
              <div className="d-flex">
                <div>
                  <PhoneOutlined />
                </div>
                <div>
                  <p>+1(000)-000-000</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <EmailOutlined />
                </div>
                <div>
                  <p>info@roverebike.com</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <RoomOutlined />
                </div>
                <div>
                  <p>
                    000 XXX St
                    <br />
                    Vancouver, BC V0X 1X1
                    <br />
                    Canada
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form action="/" method={"POST"}>
                <div className="form-group">
                  <label>*Name</label>
                  <input type={"text"}></input>
                </div>
                <div className="form-group">
                  <label>*Email Address</label>
                  <input type={"text"}></input>
                </div>
                <div className="form-group">
                  <label>*Message</label>
                  <textarea></textarea>
                </div>

                <div className="form-group">
                  <button type={"submit"}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="center-content">
          <div>
            <h4>
              Official info, events, and company updates. Just a search away.
            </h4>
          </div>
          <div className="search-form">
            <form action="">
              <div className="form-group">
                <input type={"text"}></input>
                <div className="icon">
                  <Search style={{ color: "#000" }} />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          className="contact-footer-content"
          style={{ backgroundImage: "url(" + footerImage + ")" }}
        ></div>

        <FeaturedProducts />
      </div>
    );
  }
}

export default ContactPage;
