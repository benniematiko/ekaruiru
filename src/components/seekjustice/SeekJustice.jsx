import "./SeekJustice.css";

const SeekJustice = () => {
  return (
    <div className="seekjustice">
      <div className="seekjustice-container">
        <div className="seekjustice-left">
          <div className="seekjustice-title">
            <h1>Don't Put Off Seeking Justice for You</h1>
          </div>
          <div className="seekjustice-text">
            <p>
              Life doesn’t wait, and neither should you. We understand the
              urgency of your situation, which is why you can call our team 24/7
              to assist you with your claim. Contact Oresky & Associates today
              and get swift, effective legal support when you need it most.
            </p>
          </div>

          <div className="seekjustice-phone">
            <h1>(+254) 721 5860031</h1>
          </div>
        </div>
        <div className="seekjustice-right">
          <form action="">
            <div className="firstname">
              <input className="first-name" type="text" placeholder="First Name" />
              <input className="last-name" type="text" placeholder="Last Name" />
            </div>
            <div className="email">
              <input className="email-name" type="text" placeholder="Email" />
              <input className="phone-name" type="text" placeholder="Phone" />
            </div>
            <div className="casetype">
              <input className="case-name" type="text" placeholder="Case Type" />
             
            </div>
            <div className="describe">
              <textarea className="describe-name" id="" placeholder="Describe Your Case"></textarea>
             
            </div>

            <div>
              <input type="checkbox" />
              By checking this box you agree to receive text messages from
               Karuiru Advocates & Associates. You can reply 'unsubscribe' out at any time.
            </div>
            <div>
              *
              Communication through our website does not establish an attorney-client relationship
              between you and Karuiru Advocates & Associates.
            </div>

            <div>Average Response Time(ART) is 24 hours</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeekJustice;
