import React, { useContext, useRef } from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "../lib/providers/state"
import { Badge } from '@material-ui/core/';
import { DeleteOutline, Search } from "@material-ui/icons";
import useOnClickOutside from '../lib/hooks/useOnClickOutside.jsx'
import logo from "../assets/images/logo.png";
import {
  ShoppingCartOutlined,
  Instagram,
  Facebook,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import { DispatchContext } from "../lib/providers/state"

const Cart = React.memo((props) => {
  const [isOpen, toggleCart] = React.useState(false)
  const store = useContext(StoreContext)
  const ref = useRef();
  const { cart, itemCount } = store.state.checkout
  useOnClickOutside(ref, () => toggleCart(false));
  const dispatch = useContext(DispatchContext)

  const removeItemHandler = (key, quantity) => {
    dispatch.sync.checkout.removeItem({ key: key, quantityToRemove: quantity })
  }
  return (<>
    <div className="cart-logo" onClick={() => toggleCart(true)}>
      <Badge
        badgeContent={itemCount}
        color="secondary"

      >
        <ShoppingCartOutlined />
      </Badge>

    </div>
    <div ref={ref} className={isOpen ? "cart active" : "cart"}>
      <div className="checkout-details">
        <h4>Your Cart</h4>
        <div className="checkout-items">

          {cart.map((item) => {
            const { key, title, model, color, price, quantity } = item
            return (<div className="checkout-item">
              <div className="product">
                <span>{`${quantity}x ${title}`}</span>
                <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat(price))}`}</span>
              </div>
              <div className="action" onClick={() => removeItemHandler(key, quantity)}>
                <DeleteOutline />
              </div>
            </div>
            )
          })}
          {itemCount === 0 && (<div className="checkout-item">
            <div className="product">
              <span> Add an item to your cart</span>
            </div>
          </div>)}

          <div className="checkout-payment-info">
            <div className="item">
              <span>Subtotal</span>
              <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat('2000'))}`}</span>
            </div>
            <div className="item">
              <span>Shipping</span>
              <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat('100'))}`}</span>
            </div>
            <div className="item">
              <span>Tax</span>
              <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat('100'))}`}</span>
            </div>
          </div>
          <div className="checkout-amount">
            <span>Total</span>
            <span>{`${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(parseFloat('10000'))}`}</span>
          </div>
        </div>
      </div>
    </div>
  </>
  )
})

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
      let windowHeight = window.height;
      let targetOffset =
        $("#main div div").height() + (windowHeight >= 400 ? 400 : 0);
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
            <Cart />

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
                  <a href="/support" className="nav-link">
                    Support
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
                <a href="/product">Products</a>
              </li>
              <li>
                <a href="/privacy">Privacy & Legal</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/warranty">Warranty</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/" target="_blank">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Facebook />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <LinkedIn />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <Twitter />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
