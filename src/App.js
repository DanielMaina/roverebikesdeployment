import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "components/Layout";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about-us/index";
import ProductPage from "./pages/product/index";
import ContactPage from "./pages/contact/index";
import CheckoutPage from "./pages/checkout/index";

function App() {
  document.title = "Rover E-Bike";

  const [cookies, setCookie] = useCookies(["policy"]);
  const [hasCookieApprove, setHasCookieApprove] = useState(-1);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(cookies);

    setTimeout(() => {
      if (cookies.policy === "1") {
        setHasCookieApprove(1);
      } else {
        setHasCookieApprove(0);
      }
    }, 1000);
  }, []);

  /* useEffect(() => {
    return () => {
      
    };
  }, []); */

  function cookieAgree() {
    setCookie("policy", 1, { path: "/" });
    setHasCookieApprove(1);
  }

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <div className="loader"></div>
        <div>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about-us">
                <AboutUsPage />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="/checkout">
                <CheckoutPage />
              </Route>
            </Switch>
          </Layout>
        </div>
        <div
          className={
            "cookie-popup" +
            (hasCookieApprove > -1
              ? " " + (!hasCookieApprove ? "active" : "hidden")
              : "")
          }
        >
          <p>
            By using this website, you agree to our use of cookies. We use
            cookies to provide you with a great experience and to help our
          </p>
          <p>
            <a href="/cookie-policy">Privacy/cookies policy</a>
          </p>
          <button className="button" onClick={cookieAgree}>
            I Agree
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
