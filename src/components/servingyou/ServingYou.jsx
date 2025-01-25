import "./ServingYou.css";

const ServingYou = () => {
  return (
    <div className="servingyou">
      <div className="servingyou-container">
        <div className="servingyou-left">
          <div className="servingyou-title">
            <h1>Serving You From</h1>
            <h1>The Moment You</h1>          
            <h1>Call</h1>
          </div>
          <p>Take the first step in seeking legal counsel
          We are more than ready to serve you.
          Contact us now 24/7 for a no-obligation consultation</p>

          <div className="free-consul-btn">
            <div className="free-btn">
              <button>Free Consultation</button>
            </div>
            <div className="free-phone">(+254) 721 860031</div>
          </div>
        </div>
        <div className="servingyou-right">
          <img src="./eliza-service.png" alt="" className="eliza-serve-on"/>
        </div>
      </div>
    </div>
  );
};

export default ServingYou;
