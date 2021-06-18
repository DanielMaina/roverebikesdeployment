import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/home";
import ProductPage from "./pages/product/product";
import Layout from "components/Layout";

function App() {
  document.title = "Rover E-Bike";

  const [cookies, setCookie] = useCookies(["policy"]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        console.log(cookies.policy);
      }, 1000);
    };
  }, []);

  function cookieAgree() {
    setCookie("policy", 1, { path: "/" });
    return false;
  }

  return (
    <BrowserRouter basename="/app">
      <div className="App">
        <div className="loader"></div>
        <div>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
            </Switch>
          </Layout>
        </div>
        <div
          className={
            "cookie-popup" + " " + (!cookies.policy ? "active" : "hidden")
          }
        >
          <p>
            By using this website, you agree to our use of cookies. We use
            cookies to provide you with a great experience and to help our
          </p>
          <p>
            <a href="/">Privacy/cookies policy</a>
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
