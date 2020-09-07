import React from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>We Craft eCommerce brands,</span>
            </div>
            <div className="line">
              <span>driven by instinct. </span>
            </div>
          </h2>
          <div className="row-btn">
            <a href="/">
              More About us <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
