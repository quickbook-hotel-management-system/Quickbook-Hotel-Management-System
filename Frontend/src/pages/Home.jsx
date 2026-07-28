 import hotelImg from "../assets/hotel.jpg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="vh-100"
      style={{
        backgroundImage:`url(${hotelImg})`,
          
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg px-5 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="container-fluid">
          <h2 className="text-white fw-bold">QuickBook</h2>

          <div>
            <Link to="/login">
              <button className="btn btn-primary me-2">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="btn btn-primary me-2">
                Sign Up
              </button>
            </Link>
            
            <Link to="/contact">
              <button className="btn btn-primary me-2">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center text-white position-relative"
        style={{ height: "85vh", zIndex: 2 }}
      >
        <h1 className="display-2 fw-bold">
          Welcome to QuickBook
        </h1>

        <p className="fs-4 w-75">
          Book rooms, manage reservations, and enjoy a seamless
          hotel experience.
        </p>
      </div>
    </div>
  );
}

export default Home;
