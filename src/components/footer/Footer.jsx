import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">


        <div className="footer-left">

          <div className="footer-logo">
            <img src="logo__white__bg.png" alt="" className="logo" />
          </div>
          <div className="footer-phone">
            <h1>(+254) 715 860 031</h1>
          </div>
          <div className="footer-socials">
            <p>facebook</p>
            <p>twitter</p>
            <p>instagram</p>
          </div>

          <div className="footer-text">
            <p>The information obtained from this site is not for legal</p>
            <p></p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-nairobi-office">
            <h1>Nairobi Office</h1>
            <p>P.O. Box 656565656</p>
          </div>
          <div className="footer-Migori-office">
            <h1>Migori Office</h1>
            <p>P.O. Box 656565656</p>
          </div>
          <div className="footer-Nakuru-office">
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
