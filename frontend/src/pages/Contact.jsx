import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hotelImg from "../assets/hotel.jpg";

function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="container-fluid position-relative py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${hotelImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Right Buttons */}
      <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>

      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {/* Left Card - Wider */}
          <div className="col-lg-6 col-md-6">
            <div
              className="card shadow-lg border-0 p-5 h-100"
              style={{ borderRadius: "15px" }}
            >
              <h2 className="fw-bold text-center mb-3">
                Get In Touch
              </h2>

              <p className="text-center text-muted fs-5">
                We are here to help you 24/7
              </p>

              <hr />

              <div className="mt-3">
                <p className="fs-5 mb-4">
                  📍 123 Park Street,
                  Pune, India
                </p>

                <p className="fs-5 mb-4">
                  📞 +91 98765 43210
                </p>

                <p className="fs-5 mb-4">
                  ✉ support@hotelquickbook.com
                </p>

                <p className="fs-5">
                  🕒 24/7 Customer Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-5 col-md-6">
            <div
              className="card shadow-lg border-0 p-4"
              style={{ borderRadius: "15px" }}
            >
              <h2 className="fw-bold text-center mb-4">
                Send Us A Message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="fw-semibold text-start d-block">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="fw-semibold text-start d-block">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="fw-semibold text-start d-block">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    className="form-control"
                    placeholder="Type your message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;