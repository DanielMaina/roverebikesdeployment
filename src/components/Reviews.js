import { map } from "jquery";
import React from "react";

import "../assets/styles/Reviews.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import reviewsBackgroundImage from "../assets/images/home-page-reviews-bg.png";

const Reviews = (props) => {
  const zoomOutProperties = {
    indicators: true,
    arrows: false,
    duration: 3000,
    pauseOnHover: false,
    transitionDuration: 500,
    indicators: (i) => <span href="#" className="reviews-pager"></span>,
  };

  return (
    <div
      className="reviews"
      style={{
        backgroundImage: "url(" + reviewsBackgroundImage + ")",
        height: "960px",
      }}
    >
      <div className="reviews-desktop">
        <h5>Reviews</h5>
        <div className="review-items">
          {props.items.map((item, index) => (
            <div key={"review-item-" + index} className="review-item">
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
      <div className="reviews-mobile">
        <div className="review-items">
          <Slide {...zoomOutProperties}>
            {props.items.map((item, index) => (
              <div key={"review-item-mobile-" + index} className="review-item">
                <h5 className="name">{item.name}</h5>
                <div className="image">
                  {item.image ? <img src={item.image} /> : ""}
                </div>
                <img src="/img/icons/stars.png" width={100} />
                <p className="content">{item.content}</p>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
