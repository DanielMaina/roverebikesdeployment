import { map } from "jquery";
import React from "react";

import "../assets/styles/Reviews.css";

import reviewsBackgroundImage from "../assets/images/home-page-reviews-bg.png";

const Reviews = (props) => {
  return (
    <div
      className="reviews"
      style={{
        backgroundImage: "url(" + reviewsBackgroundImage + ")",
        height: "960px",
      }}
    >
      <h5>Reviews</h5>
      <div className="review-items">
        {props.items.map((item) => (
          <div className="review-item">
            <h5 className="name">{item.name}</h5>
            <div className="image">
              {item.image ? <img src={item.image} /> : ""}
            </div>
            <img src="/img/icons/stars.png" width={100} />
            <p className="content">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
