import "./Footer.css";

import {
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="logo__white__bg.png" alt="" className="logo" />
          </div>
          <div className="footer-phone">
            <h1>
              <span>
                <FaPhoneAlt /> (+254) 715 860 031
              </span>
            </h1>
          </div>
          <div className="footer-socials">
            <p>
              <Link to="https://facebook.com">
                <FaFacebook />
              </Link>
            </p>
            <p>
              <Link to="https://twitter.com">
                <FaTwitter />
              </Link>
            </p>
            <p>
              <Link to="https://instagram.com">
                <FaInstagram />
              </Link>
            </p>
            <p>
              <Link to="https://linkedin.com">
                <FaLinkedin />
              </Link>
            </p>
          </div>

          <div className="footer-text">
            <p>
              The information you obtain at this site is not, nor is it intended
              to be, legal advice. You should consult an attorney for advice
              regarding your individual situation.
              <br />
              <br />
              We invite you to contact us and welcome your calls, letters and
              electronic mail.
              <br /> <br />
              Contacting us does not create an attorney-client relationship.
              Please do not send any confidential information to us until such
              time as an attorney-client relationship has been established
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-nairobi-office">
            <h1>Nairobi Office</h1>
            <p>P.O. Box 656565656</p>
          </div>
          <div className="footer-migori-office">
            <h1>Migori Office</h1>
            <p>P.O. Box 656565656</p>
          </div>
          <div className="footer-nakuru-office">
            <h1>Nakuru Office</h1>
            <p>P.O. Box 656565656</p>
          </div>
        </div>
      </div>

      <div className="footer-container-bottom">
        <div className="footer-copyright">
          <p>
            &copy; 2025 Karuiru Advocates & Associates. All Rights Reserved.
            ·Terms . Sitemap . Privacy . Your Privacy Choices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
