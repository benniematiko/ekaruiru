import "./Header.css";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <div className="container flexSB">
        <nav className="flexSB">
          <div className="logo">
            <Link to="/">
              <img src="logo__white__bg.png" alt="" className="logo" />
            </Link>
          </div>
          <ul
            className={ mobile ? "navMenu-list" : "flexSB"}
            onClick={() => setMobile(false)}
          >
            <Link to="/practiceareas">Practice Areas</Link>
            <Link to="/caseresults">Case Results</Link>
            <Link to="/areasweserve">Areas We Serve</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
          </ul>
          <span className="toggle" onClick={() => setMobile(!mobile)}>
            <span className="fa-bars">{mobile ? <FaTimes /> : <FaBars />}</span>
          </span>
        </nav>
        <div className="account flexSB">
          <p className="call">Call Us: </p>
          
          <p className="phone">(+254) 71586001</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
