import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OwnerRegister() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",

    username: "",

    password: "",
  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch(
      "http://localhost:9000/api/signup",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          ...formData,

          role: "hotelowner",
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {

      alert("Hotel Owner Registration Successful");

      navigate("/login");
    }

    else {

      alert(data.message);
    }
  };

  return (

    <div className="container mt-5">

      <div className="card p-4">

        <h2>Hotel Owner Registration</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            placeholder="Enter Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-success">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default OwnerRegister;