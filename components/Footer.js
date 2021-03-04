import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <a style={{ color: "#fff" }} className="logo">
          FOCUS.
        </a>
        <span>© All Rights Reserved</span>
      </div>
      <div className="footer-help">
        <h3>Help</h3>
        <span>What We Do</span>
        <span>Privacy Policy</span>
        <span>About</span>
      </div>
      <div className="footer-contacts">
        <h3>Contacts</h3>
        <span>(+995) 555 43 43 17</span>
        <span>focus@info.ge</span>
        <span>@focusmarketing</span>
      </div>
      <div className="footer-social">
        <h3>Social Media</h3>
        <div className="footer-icons">
          <img src="/bxl-facebook-circle.svg" alt="" />
          <img src="/bxl-instagram-alt.svg" alt="" />
          <img src="/bxl-whatsapp.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
