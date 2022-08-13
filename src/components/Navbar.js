import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          De<span className="primary">Fi</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              <a href="/">Home</a>
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="featured" smooth={true} duration={500}>
              <a href="/">Featured</a>
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="earn" smooth={true} duration={500}>
              <a href="/">Earn</a>
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              <a href="/">Contact</a>
            </Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <FaTimes size={20} style={{ color: "var(--primary)" }} />
          ) : (
            <FaBars size={20} style={{ color: "var(--primary)" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
