import React from "react";
import { PhoneOutlined, EmailOutlined, RoomOutlined } from "@material-ui/icons";

import "./index.css";
import setTitle from "../../tools.js";
import headerImage from "../../assets/images/contact-page-header.png";

import Brands from "components/Brands";
import FindStore from "components/FindStore";
import Search from "components/Search";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate() {
    setTitle("Contact");
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
                  <p>+1(888)-736-7581</p>
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
                    600-1285 W Broadway
                    <br />
                    Vancouver, BC V6H 3X8
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

        <FindStore />
        <Search />
        <Brands />
      </div>
    );
  }
}

export default ContactPage;
