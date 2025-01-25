// import "./App.css"

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";

// import PlotsForSale from "./pages/plotsforsale/PlotsForSale";
// import PlotsForLease from "./pages/plotsforlease/PlotsForLease";
// import RentalHouses from "./pages/rentalhouses/RentalHouses";
// import SignIn from "./pages/signin/SignIn";

// const App = () => {
//   return (
//     <div className="app">
//       <Router>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={< Home />} />
//           <Route path="/rentalhouses" element={< RentalHouses />} />
//           <Route path="/plotsforsale" element={< PlotsForSale /> } />
//           <Route path="/plotsforlease" element={< PlotsForLease />} />
//           <Route path="/signin" element={< SignIn />} />

//           {/*

//           // <Route path="/signin" element={< SignIn />} />
//           //  <Route path="/login" element={< Login />} />       */}

//           <Route path="*" element={ <h1> PAGE NOT FOUND</h1>} />
//         </Routes>

//         <Footer />

//       </Router>
//     </div>
//   );
// };

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import AreasWeServe from "./pages/areasweserve/AreasWeServe";
import CaseResults from "./pages/caseresults/CaseResults";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";
import PracticeAreas from "./pages/practiceareas/PracticeAreas";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />    

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practiceareas" element={< PracticeAreas />} />
          <Route path="/areasweserve" element={< AreasWeServe />} />
          <Route path="/caseresults" element={< CaseResults />} />
          <Route path="/aboutus" element={< AboutUs />} />
          <Route path="/contactus" element={< ContactUs />} />
         
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
