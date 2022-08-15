import React from "react";
import "./Signup.css";
import Crypto from "../assets/trade.png";
import { Link } from "react-scroll";
import { HiChevronDoubleUp } from "react-icons/hi";

const Signup = () => {
  return (
    <div name="earn" className="signup">
      <div className="container">
        <div className="left">
          <img src={Crypto} alt="/" />
        </div>
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the appand automatically earn rewards at the end of
            each month with no lockups or limits.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email..." />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="top">
        <Link to="home" smooth={true} duration={500} alt="top">
          <div className="arrow">
            <HiChevronDoubleUp className="chevron" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
