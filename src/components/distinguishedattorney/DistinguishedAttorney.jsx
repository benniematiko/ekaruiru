
import "./DistinguishedAttorney.css"
import { DistinguishedAttorneys } from "../../constants/distinguishedattorney";
import "./DistinguishedAttorney.css";

const DistinguishedAttorney = () => {
  return (
    <div className="distinguishedattorney">
      <div className="distinguishedattorney-container">
        <div className="distinguished-heading">
          <h1>Our Distinguished </h1>
          <h1>Attorneys </h1>
        </div>

        <div className="distinguished-photo">
          {
            DistinguishedAttorneys.map((attorney, index)=>{
              return(
                <div key={index}>
                  
                  <div>
                  <img src={attorney.image} alt="" />
                  </div>

                  <div className="attorney-name">
                    <h1>{attorney.name}</h1>
                  </div>

                  <div className="title">
                  <p>{attorney.title}</p>
                  </div>
                  </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default DistinguishedAttorney;
