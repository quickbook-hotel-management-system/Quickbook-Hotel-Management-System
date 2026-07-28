import { useNavigate } from "react-router-dom";
import hotelImg from "../assets/hotel.jpg";

function AdminDashboard() {
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
              <small>Admin Panel</small>
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
                onClick={() => navigate("/admin/users")}
              >
                Manage Users
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/admin/hotelowner")}
              >
                Approve Hotel Owners
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/admin/payments")}
              >
                Manage Payments
              </button>

             

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/admin/reports")}
              >
                Generate Reports
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/admin/profile")}
              >
                Profile
              </button>

              <button
                className="btn text-white w-100 text-start mb-2"
                onClick={() => navigate("/admin/password")}
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
                Admin Dashboard
              </h3>

              <div className="bg-white text-dark px-3 py-2 rounded">
                Welcome Admin
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => navigate("/admin/users")}
                >
                  Manage Users
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-success w-100"
                  onClick={() => navigate("/admin/hotelowner")}
                >
                  Approve Hotel Owners
                </button>
              </div>


              <div className="col-md-4">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => navigate("/admin/payments")}
                >
                  Manage Payments
                </button>
              </div>

              <div className="col-md-4">
                <button
                  className="btn btn-dark w-100"
                  onClick={() => navigate("/admin/reports")}
                >
                  Generate Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;