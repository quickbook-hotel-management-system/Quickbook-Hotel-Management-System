import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hotelImg from "../assets/hotel.jpg";

function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        idproof: "",
        password: "",
        confirmPassword: "",
        roleId: "3"
    });

    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");

        if (formData.password !== formData.confirmPassword) {

            setSuccess(false);

            setMessage("Passwords do not match");

            return;

        }

        try {

            const response = await fetch(
                "http://localhost:8081/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        fullName: formData.fullName,

                        email: formData.email,

                        phone: formData.phone,

                        idproof: formData.idproof,

                        password: formData.password,

                        roleId: Number(formData.roleId)

                    })

                });

            const data = await response.text();

            if (response.ok) {

                setSuccess(true);

                setMessage(data);

                setFormData({

                    fullName: "",
                    email: "",
                    phone: "",
                    idproof: "",
                    password: "",
                    confirmPassword: "",
                    roleId: "3"

                });

                setTimeout(() => {

                    navigate("/login");

                }, 2000);

            } else {

                setSuccess(false);

                setMessage(data);

            }

        } catch (error) {

            console.log(error);

            setSuccess(false);

            setMessage("Server Error");

        }

    };

    return (

        <div
            className="container-fluid d-flex justify-content-center align-items-center position-relative"
            style={{
                minHeight: "100vh",
                backgroundImage: `url(${hotelImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

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
                    onClick={() => navigate("/contact")}
                >
                    Contact
                </button>

            </div>

            <div
                className="card shadow-lg border-0 p-4"
                style={{
                    width: "450px",
                    borderRadius: "15px",
                }}
            >

                <h3 className="text-center fw-bold">
                    Create Account
                </h3>

                <p className="text-center text-muted">
                    Register your account
                </p>

                {
                    message &&
                    <div className={`alert ${success ? "alert-success" : "alert-danger"}`}>
                        {message}
                    </div>
                }

                <form onSubmit={handleSubmit}>

                    <div className="mb-2">

                        <label>Full Name</label>

                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-2">

                        <label>Email</label>

                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-2">

                        <label>Phone</label>

                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-2">

                        <label>ID Proof</label>

                        <input
                            type="text"
                            className="form-control"
                            name="idproof"
                            value={formData.idproof}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-2">

                        <label>Register As</label>

                        <select
                            className="form-select"
                            name="roleId"
                            value={formData.roleId}
                            onChange={handleChange}
                        >
                            <option value="3">Customer</option>
                            <option value="2">Hotel Owner</option>
                        </select>

                    </div>

                    <div className="mb-2">

                        <label>Password</label>

                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        className="btn btn-primary w-100"
                        type="submit"
                    >
                        Register
                    </button>

                    <div className="text-center mt-3">

                        Already have an account?

                        <button
                            type="button"
                            className="btn btn-link text-decoration-none"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default SignUp;





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import hotelImg from "../assets/hotel.jpg";

// function SignUp() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     role: "customer",
//   });

//   const [message, setMessage] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage("");

//     if (formData.password !== formData.confirmPassword) {
//       setSuccess(false);
//       setMessage("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://localhost:9000/api/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             username: formData.username,
//             password: formData.password,
//             role: formData.role,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess(true);
//         setMessage("Registration Successful");

//         setFormData({
//           name: "",
//           username: "",
//           password: "",
//           confirmPassword: "",
//           role: "customer",
//         });

//         setTimeout(() => {
//           navigate("/login");
//         }, 1500);
//       } else {
//         setSuccess(false);
//         setMessage(
//           data.message || "Registration Failed"
//         );
//       }
//     } catch (err) {
//       setSuccess(false);
//       setMessage("Server Error");
//     }
//   };

//   return (
//     <div
//       className="container-fluid d-flex justify-content-center align-items-center position-relative"
//       style={{
//         minHeight: "100vh",
//         backgroundImage: `url(${hotelImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Top Right Navigation */}
//       <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">
//         <button
//           className="btn btn-primary"
//           onClick={() => navigate("/")}
//         >
//           Home
//         </button>

//         <button
//           className="btn btn-primary"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>

//         <button
//           className="btn btn-primary"
//           onClick={() => navigate("/contact")}
//         >
//           Contact
//         </button>
//       </div>

//       {/* Signup Card */}
//       <div
//         className="card shadow-lg border-0 p-3"
//         style={{
//           width: "430px",
//           height:"610px",
//           borderRadius: "15px",
//         }}
//       >
//         <h3 className="text-center fw-bold mb-2">
//           Create Account
//         </h3>

//         <p className="text-center text-muted mb-3">
//           Register your account
//         </p>

//         {message && (
//           <div
//             className={`text-center mb-2 fw-semibold ${
//               success
//                 ? "text-success"
//                 : "text-danger"
//             }`}
//           >
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           {/* Full Name */}
//           <div className="mb-2">
//             <label className="fw-semibold text-start d-block">
//               Full Name
//             </label>

//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Enter Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-2">
//             <label className="fw-semibold text-start d-block">
//               Username / Email
//             </label>

//             <input
//               type="text"
//               name="username"
//               className="form-control"
//               placeholder="Enter Username or Email"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Role Dropdown */}
//           <div className="mb-2">
//             <label className="fw-semibold text-start d-block">
//               Register As
//             </label>

//             <select
//               name="role"
//               className="form-select"
//               value={formData.role}
//               onChange={handleChange}
//             >
//               <option value="customer">
//                 Customer
//               </option>
//               <option value="hotelowner">
//                 Hotel Owner
//               </option>
//             </select>
//           </div>

//           {/* Password */}
//           <div className="mb-2">
//             <label className="fw-semibold text-start d-block">
//               Password
//             </label>

//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Enter Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-3">
//             <label className="fw-semibold text-start d-block">
//               Confirm Password
//             </label>

//             <input
//               type="password"
//               name="confirmPassword"
//               className="form-control"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Register Button */}
//           <button
//             className="btn btn-primary w-100"
//             type="submit"
//           >
//             Register
//           </button>

//           {/* Login Link */}
//           <div className="text-center mt-3">
//             Already have an account?
//             <button
//               type="button"
//               className="btn btn-link text-decoration-none p-0 ms-1"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;