import React from "react";
import Image from "next/image";
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
        <button className="main-btn">Get quote for free</button>
      </div>
      <div className="main-image">
        <Illustration />
        {/* <Image src="/marketing.svg" width={800} height={720} /> */}
      </div>
    </div>
  );
};

export default Main;
