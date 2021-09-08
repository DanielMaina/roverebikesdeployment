import React, { useState, useEffect, useContext } from "react";

import { CartContext } from "../contexts/CartContext";

import logo from "../assets/images/logo.png";
import {
  ShoppingCartOutlined,
  Instagram,
  Facebook,
  YouTube,
  Twitter,
} from "@material-ui/icons";

const Layout = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [headerClass, setHeaderClass] = useState("normal");
  const { itemCount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let headerClass = "normal";
      let windowHeight = window.height;
      let targetOffset = 50;
      if (window.scrollY > targetOffset) {
        headerClass = "fixed";
      }

      setHeaderClass(headerClass);
    });
  }, []);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div>
      <header className={"App-header" + " " + headerClass}>
        <a
          href="/"
          className="rover-ebike-logo"
          alt="Rover E-Bike"
          style={{
            backgroundImage: "url(" + logo + ")",
          }}
        ></a>

        <div className="header-sub">
          <a href="/ckeckout" className="cart-logo">
            <ShoppingCartOutlined />
            <div
              id="cart-badge"
              className={"cart-badge " + (itemCount <= 0 ? "hidden" : "")}
            >
              <span>{itemCount}</span>
            </div>
          </a>

          <div
            className={"hamburger-menu" + (menuStatus ? " active" : "")}
            onClick={() => toggleMenu()}
          >
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>

          <nav className={menuStatus ? "navbar active" : "navbar"}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about-us" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/product" className="nav-link">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a href="/warranty" className="nav-link">
                  Warranty
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="main">{props.children}</section>
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
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/product">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy & Legal</a>
            </li>
            <li>
              <a href="/warranty">Warranty</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/roverebike/" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/Rover-Electronic-Bike-104849678508598/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.youtube.com/watch?v=6WCnAzdTosk" target="_blank">
            <YouTube />
          </a>
          <a href="https://twitter.com/bike_rover" target="_blank">
            <Twitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
