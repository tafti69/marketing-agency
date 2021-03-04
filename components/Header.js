import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  return (
    <div className="header">
      <nav>
        <Link href="/">
          <a>
            <img style={{ cursor: "pointer" }} src="/logo.svg" alt="" />
          </a>
        </Link>
        <ul>
          <div>
            <li className={router.pathname == "/" ? "activeLink" : ""}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={router.pathname == "/Services" ? "activeLink" : ""}>
              <Link href="/Services">
                <a>Services</a>
              </Link>
            </li>
            <li className={router.pathname == "/Work" ? "activeLink" : ""}>
              <Link href="/Work">
                <a>Work</a>
              </Link>
            </li>
          </div>
          <a href="mailto:focus@info.ge" className="talk">
            Contact Us
          </a>
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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="/Work">Work</Link>
              </li>
            </div>
            <a href="mailto:focus@info.ge" className="talk">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
