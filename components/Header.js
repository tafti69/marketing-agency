import React from "react";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="header">
      <nav>
        <img src="/logo.svg" alt="" />
        <ul>
          <div>
            <li>Home</li>
            <li>Services</li>
            <li>Work</li>
          </div>
          <button className="talk">Let's Talk</button>
        </ul>
        <div onClick={() => setOpen(true)} className="burger">
          Menu
        </div>
        {open && (
          <div className="menu">
            <div onClick={() => setOpen(false)} className="cancel">
              <span></span>
              <span></span>
            </div>
            <div>
              <li>Home</li>
              <li>Services</li>
              <li>Work</li>
            </div>
            <button className="talk">Let's Talk</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
