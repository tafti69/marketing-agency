import React from "react";
import Illustration from "./Illustration";

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="main-text">
        <h1>Innovative Solutions For You By Digital Marketing</h1>
        <p>
          Digital marketing is the component of marketing that utilizes internet
          and online based digital technologies such as desktop computers and
          mobile phones.
        </p>
        <a href="mailto:focus@info.ge" className="main-btn">
          Get quote for free
        </a>
      </div>
      <div className="main-image">
        <Illustration />
      </div>
    </div>
  );
};

export default Main;
