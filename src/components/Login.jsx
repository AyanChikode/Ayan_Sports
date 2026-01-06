import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login= () => {
    const navigate = useNavigate();
  const [id, setId] = useState(undefined);
  // Create 
  const [data, setData] = useState({
    name: "",
    password: ""
  });

  const [newData, setNewData] = useState([]);

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Form Data:", data);

    axios
      .post("https://695b986a1d8041d5eeb77c41.mockapi.io/Users", data)
      .then((result) => {
        // console.log("POST Success:", result.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        // console.log("Server Error:", err.response);
      });
  }

  return (
    <>
      <div>
        <h1 className="text-center">Login</h1>
      </div>
     <div className="container d-flex justify-content-center align-items-center vh-50">
           <div className="card shadow p-4" style={{ width: "350px" }}>
             <h3 className="text-center mb-4 text-dark">Login</h3>

         <form onSubmit={handleSubmit}>
                <div className="mb-3">
                 <label className="form-label text-dark">Name</label>
                 <input
                id="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
