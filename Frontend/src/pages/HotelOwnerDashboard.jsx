import { useNavigate } from "react-router-dom";
import hotelImg from "../assets/hotel.jpg";

function HotelOwnerDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${hotelImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="row g-0">
          {/* Sidebar */}
          <div
            className="col-md-2 text-white p-0"
            style={{
              background: "#4B13C9",
              minHeight: "100vh",
            }}
          >
            <div
              className="p-4"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <h4 className="fw-bold mb-0">QuickBook</h4>
              <small>Hotel Owner Panel</small>
            </div>

            <div className="p-3">
              <button
                className="btn w-100 text-start text-white mb-2"
                style={{
                  background: "#6f42c1",
                  borderRadius: "10px",
                }}
              >
                Dashboard
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/add-hotel")}
              >
                Add Hotels
              </button>

                <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/add-staff")}
              >
                Add Staff
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/manage-rooms")}
              >
                Manage Rooms
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/availability")}
              >
                Update Room Availability
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/pricing")}
              >
                Set Room Pricing
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/bookings")}
              >
                View Customer Bookings
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/payments")}
              >
                Track Payments
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/reports")}
              >
                Generate Booking Reports
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/profile")}
              >
                Profile
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/hotelowner/password")}
              >
                Change Password
              </button>

              <button
                className="btn btn-danger w-100 mt-4"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div
            className="col-md-10 p-4"
            style={{
              backgroundColor: "#f8f9fa",
              minHeight: "100vh",
            }}
          >
            <div
              className="d-flex justify-content-between align-items-center mb-4 p-3"
              style={{
                background: "#4B13C9",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <h3 className="fw-bold mb-0">
                Hotel Owner Dashboard
              </h3>

              <div className="bg-white text-dark px-3 py-2 rounded">
                Welcome Hotel Owner
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => navigate("/hotelowner/add-hotel")}
                >
                  Add Hotel
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-dark w-100"
                  onClick={() => navigate("/hotelowner/add-staff")}
                >
                  Add Staff
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-success w-100"
                  onClick={() => navigate("/hotelowner/manage-rooms")}
                >
                  Manage Rooms
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-warning w-100"
                  onClick={() => navigate("/hotelowner/bookings")}
                >
                  Customer Bookings
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-info w-100"
                  onClick={() => navigate("/hotelowner/payments")}
                >
                  Track Payments
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => navigate("/hotelowner/reports")}
                >
                  Booking Reports
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-dark w-100"
                  onClick={() => navigate("/hotelowner/profile")}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelOwnerDashboard;