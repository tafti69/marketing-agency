import React from "react";

const services = [
  {
    id: 1,
    bg: "rgba(250, 190, 104, 0.3)",
    icon: "/s.svg",
    name: "SMM",
    desc:
      "Social media marketing (SMM) is a form of Internet marketing that utilizes social networking websites as a marketing tool. The goal of SMM is to produce content that users will share with their social network to help a company increase brand exposure and broaden customer reach.",
  },
  {
    id: 2,
    bg: "rgba(231, 104, 255, 0.3)",
    icon: "/bx-palette.svg",
    name: "UI/UX Design",
    desc:
      "UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together.",
  },
  {
    id: 3,
    bg: "rgba(181, 255, 189, 0.4)",
    icon: "/d.svg",
    name: "Branding",
    desc:
      "Branding, by definition, is a marketing practice in which a company creates a name, symbol or design that is easily identifiable as belonging to the company. This helps to identify a product and distinguish it from other products and services.",
  },
  {
    id: 4,
    bg: "rgba(174, 112, 255, 0.3)",
    icon: "/bx-camera-movie.svg",
    name: "Video Production",
    desc:
      "Recording videos today is easier than ever thanks to the high-quality video cameras built into most cell phones. But producing a great video still takes forethought, planning, and an understanding of the video production process from concept to completion.",
  },
  {
    id: 5,
    bg: "rgba(231, 104, 255, 0.3)",
    icon: "/bxs-camera.svg",
    name: "Photo Production",
    desc:
      "Photo production is the process of making a photo from an initial idea through casting, shooting and editing the photo. Photo production is the process of making a photo from an initial idea through casting, shooting and editing the photo.",
  },
  {
    id: 6,
    bg: "rgba(250, 190, 104, 0.3)",
    icon: "/bxl-html5.svg",
    name: "HTML Banners",
    desc:
      "HTML banners are often used for menus and search boxes, allowing interaction before the visitor even reaches the destination site.",
  },
  {
    id: 7,
    bg: "rgba(0, 185, 255, 0.2)",
    icon: "/bx-code.svg",
    name: "Landing Page",
    desc:
      "In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, YouTube, Facebook, Instagram or similar places on the web.",
  },
  {
    id: 8,
    bg: "rgba(255, 239, 158, 0.5)",
    icon: "/bx-movie-play.svg",
    name: "Animations",
    desc:
      "Animation is a method in which figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film.",
  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="services-business">
        <h1>Want to boost your business growth? Solution is here.</h1>
        <h5>
          Digital marketing is the component of marketing that utilizes internet
          and online based digital technologies such as desktop computers and
          mobile phones.
        </h5>
      </div>
      {services.map((service) => (
        <div key={service.id} className="services-box">
          <div style={{ background: service.bg }} className="icon-back">
            <img src={service.icon} />
          </div>

          <div className="align">
            <h2>{service.name}</h2>
            <p>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
