// import "./Navbar.css";
import { Link } from "react-router-dom";

// import { FaBars, FaTimes } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { Button } from "../button/Button";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);
//   const [navbar, setNavbar] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   window.addEventListener("scroll", changeBackground);

//   return (
//     <>
//       <nav className={navbar ? "navbar active" : "navbar"}>
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//             RockyCity Real Estates
//           </Link>
//           <div className="menu-icon" onClick={handleClick}>
//             {/* <Link to="/">Home</Link>
//           <Link to="/login" className="login">
//             Login
//           </Link>
//           <Link to="/signin" className="signin">
//             Sign In
//           </Link> */}

//            c{click ? <FaTimes /> : <FaBars />}</span>
//           </div>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             {/* <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li> */}

//             <li className="nav-item">
//               <Link
//                 to="/rentalhouses"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Rental Houses
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/plotsforsale"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Plots For Sale
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link
//                 to="/signin"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Sign In
//               </Link>
//             </li>
//           </ul>
//           <Link to="/signin">{button && <Button buttonStyle="btn--outline">Sign In </Button>}</Link>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
// import { assets } from "../../assets/assets"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <div className="logo">
              <h1>RockyCity</h1>
              <h3>Real Estates</h3>
            </div>
          </Link>
          <ul className="navbar-menu">
            <Link to="rentalhouses">Rental Houses</Link>
            <Link to="plotsforsale">Plots / Land on Sale</Link>
            <Link to="plotsforlease">Plots / Land for lease</Link>
            <Link to="otherproperty">Other property</Link>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="navbar-right">
            <Link to="/seekadvice">Seek advice</Link>
            <Link to="/signin" className="signin">
              Sign In
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
