import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hotelImg from "../assets/hotel.jpg";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {

        setError("");

        try {

            const response = await fetch(
                "http://localhost:8081/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }
            );

            // If login fails
            if (!response.ok) {

                const message = await response.text();

                setError(message);

                return;
            }

            // Login successful
            const data = await response.json();

            console.log(data);

            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("userName", data.fullName);
            localStorage.setItem("email", data.email);
            localStorage.setItem("role", data.role);

            if (data.role === "Admin") {

                navigate("/admin");

            }
            else if (data.role === "Hotel Owner") {

                navigate("/hotelowner");

            }
            else if (data.role === "Customer") {

                navigate("/customer");

            }
            else {

                setError("Invalid User Role");

            }

        } catch (err) {

            console.log(err);

            setError("Unable to connect to server.");

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

            {/* Top Navigation */}

            <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                >
                    Home
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/contact")}
                >
                    Contact
                </button>

            </div>

            {/* Login Card */}

            <div
                className="card shadow-lg border-0 p-4"
                style={{
                    width: "450px",
                    borderRadius: "15px",
                }}
            >

                <h2 className="text-center fw-bold">
                    Welcome Back!
                </h2>

                <p className="text-center text-muted mb-4">
                    Sign in to your account
                </p>

                {error && (
                    <div className="alert alert-danger text-center">
                        {error}
                    </div>
                )}

                <div className="mb-3">

                    <label className="form-label fw-semibold">
                        Email Address
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-4">

                    <label className="form-label fw-semibold">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                </div>

                <button
                    className="btn btn-primary w-100"
                    onClick={handleLogin}
                >
                    Login
                </button>

                <div className="text-center mt-4">

                    Don't have an account?

                    <button
                        className="btn btn-link text-decoration-none p-0 ms-1"
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Login;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import hotelImg from "../assets/hotel.jpg";

// function Login() {

//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = async () => {

//         setError("");

//         try {

//             const response = await fetch(
//                 "http://localhost:8081/api/auth/login",
//                 {
//                     method: "POST",

//                     headers: {
//                         "Content-Type": "application/json"
//                     },

//                     body: JSON.stringify({
//                         email: email,
//                         password: password
//                     })

//                 }
//             );

//             if (!response.ok) {

//                 const message = await response.text();

//                 setError(message);

//                 return;

//             }

//             const data = await response.json();

//             // Save JWT Token
//             localStorage.setItem("token", data.token);

//             // Save User Information
//             localStorage.setItem("userId", data.userId);
//             localStorage.setItem("userName", data.fullName);
//             localStorage.setItem("email", data.email);
//             localStorage.setItem("role", data.role);

//             // Redirect According to Role
//             if (data.role === "ADMIN") {

//                 navigate("/admin");

//             } else if (data.role === "OWNER") {

//                 navigate("/owner");

//             } else {

//                 navigate("/customer");

//             }

//         }
//         catch (err) {

//             console.log(err);

//             setError("Unable to connect to server.");

//         }

//     };

//     return (

//         <div
//             className="container-fluid d-flex justify-content-center align-items-center position-relative"
//             style={{
//                 minHeight: "100vh",
//                 backgroundImage: `url(${hotelImg})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}
//         >

//             {/* Top Navigation */}

//             <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">

//                 <button
//                     className="btn btn-primary"
//                     onClick={() => navigate("/")}
//                 >
//                     Home
//                 </button>

//                 <button
//                     className="btn btn-primary"
//                     onClick={() => navigate("/signup")}
//                 >
//                     Sign Up
//                 </button>

//                 <button
//                     className="btn btn-primary"
//                     onClick={() => navigate("/contact")}
//                 >
//                     Contact
//                 </button>

//             </div>

//             {/* Login Card */}

//             <div
//                 className="card shadow-lg border-0 p-4"
//                 style={{
//                     width: "450px",
//                     borderRadius: "15px",
//                 }}
//             >

//                 <h2 className="text-center fw-bold">
//                     Welcome Back!
//                 </h2>

//                 <p className="text-center text-muted mb-4">
//                     Sign in to your account
//                 </p>

//                 {
//                     error &&
//                     <div className="alert alert-danger">
//                         {error}
//                     </div>
//                 }

//                 <div className="mb-3">

//                     <label className="form-label fw-semibold">

//                         Email Address

//                     </label>

//                     <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />

//                 </div>

//                 <div className="mb-4">

//                     <label className="form-label fw-semibold">

//                         Password

//                     </label>

//                     <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Enter Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />

//                 </div>

//                 <button
//                     className="btn btn-primary w-100"
//                     onClick={handleLogin}
//                 >
//                     Login
//                 </button>

//                 <div className="text-center mt-4">

//                     Don't have an account?

//                     <button
//                         className="btn btn-link text-decoration-none p-0 ms-1"
//                         onClick={() => navigate("/signup")}
//                     >
//                         Sign Up
//                     </button>

//                 </div>

//             </div>

//         </div>

//     );

// }

// export default Login;







