import { map } from "jquery";
import React from "react";
import ReactHtmlParser from "react-html-parser";

import "../assets/styles/FeaturedArticles.css";

import backgroundImage from "../assets/images/featured-articles-bg.png";

const FeaturedArticles = (props) => {
  return (
    <div
      className="featured-articles"
      style={{
        backgroundImage: "url(" + backgroundImage + ")",
        height: "714px",
      }}
    >
      <h5>Featured Aritcles</h5>
      <div className="items">
        {props.items.map((item) => (
          <div className="item">
            <h5 className="title">{item.title}</h5>

            <p className="content">{ReactHtmlParser(item.content)}</p>
            <a href="/blog" className="button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
