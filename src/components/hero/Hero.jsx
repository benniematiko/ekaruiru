// import "./Hero.css";

// import { Button } from "../button/Button";
// import { Link } from "react-router-dom";

// Link

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-container">
//         <video src="#" autoPlay loop muted></video>
//         <h1>Do you need a house fo renting?</h1>
//         <p>View all available options</p>
//         <div className="hero-btns">

//           <Link to="/plotsforlease"><Button
//             className="btns"
//             buttonStyle="btn--outline"
//             buttonSize="btn--large"
//           >
//             View more
//           </Button></Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import "./Hero.css";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-container">
//         <div className="hero-top">
//           <h1 className="hero-top-title">Modern Real Estates, assured comfort</h1>
//           <p className="hero-top-text">Using technology to serve you better</p>
//         </div>
//       </div>

//       <div className="hero-photo">
//         <img src="farmlandone.jpg" alt="" className="farmlandone" />

//       </div>
//     </div>
//   );
// };

// export default Hero;

// import  heroPhoto  from "../../assets/eliza-main.jpg"

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="commissioner">
          <h2>Commissioner for oaths</h2>
        </div>
        <div className="notary">
          <h4>& Notary Public</h4>
        </div>

        <div className="over"><h2>Over</h2></div>
        <div className="kshs"><h2>200 Cases Won!</h2></div>

        <div className="consultation">
          <button className="free-consul">Free Consultations</button>
          <button  className="free-result">Our Results</button>
        </div>
        <div className="legalstatus">
          <h1>Your legal status doesn't matter</h1>
        </div>
        <div className="reviewed">Highly reviewed by past clients</div>
      </div>
    </div>
  );
};

export default Hero;
