import "./Statistics.css"

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-container">
        
          <div className="statistics-cases-handled">
            <div className="title">Cases handled</div>
            <div className="statistics-amount"><h1>+ Kshs 210 Million</h1></div>
          </div>
          <div className="statistics-loan-recovery">
            <div className="title">Loan Recoveries</div>
            <div className="statistics-amount"><h1>+ Kshs 120 Million</h1></div>
          </div>
          <div className="statistics-litigation">
            <div className="title">Litigation</div>
            <div className="statistics-amount"><h1>+ Kshs 90 Million</h1></div>
          </div>
        
      </div>
    </div>
  );
};

export default Statistics;
