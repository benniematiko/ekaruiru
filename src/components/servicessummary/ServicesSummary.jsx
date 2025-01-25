import "./ServicesSummary.css";

const ServicesSummary = () => {
  return (
    <div className="servicessummary">
      <div className="servicessummary-container">
        <div className="freeconsultation">
          <h1>Free Consultation</h1>
          <p>
            Find out how strong your case is with zero financial obligation.
            We're here to listen and advise
          </p>
        </div>
        <div className="availability">
          <h1>24/7 Availability</h1>
          <p>
            Legal emergencies wait for no one. That's why we stay ready to act,
            day and night
          </p>
        </div>
        <div className="status">
          <h1>Your Legal Status Doesn't matter</h1>
          <p>Your legal status does not matter -  we are ready to help. Our priority is getting you the support you need</p>
        </div>
        <div className="post-legal">
          <h1>Post Legal Support</h1>
          <p>We also give you support even after legal matter</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSummary;
