import React from "react";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="services-solutions">
      <Image
        className="solutions-image"
        src="/stats.jpg"
        width={500}
        height={350}
      />
      <div className="solutions-text">
        <h3>Solution is here.</h3>
        <h6>
          Digital marketing is the component of marketing that utilizes internet
          and online based digital technologies such as desktop computers and
          mobile phones. Digital marketing is the component of marketing that
          utilizes internet and online based digital technologies such as
          desktop computers and mobile phones.
        </h6>
      </div>
    </div>
  );
};

export default Solutions;
