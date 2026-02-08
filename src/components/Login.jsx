import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()  {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    password: ""
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let objError = {};
    let isValid = true;

    // Name validation
    if (data.name.trim() === "") {
      objError.nameError = "Name is required!";
      isValid = false;
    } else if (data.name.length < 2) {
      objError.nameError = "Minimum 2 characters required";
      isValid = false;
    }

    // Password validation
    if (data.password.trim() === "") {
      objError.passwordError = "Password is required!";
      isValid = false;
    } else if (data.password.length < 4) {
      objError.passwordError = "Minimum 4 characters required";
      isValid = false;
    }

    setError(objError);


    if (!isValid) return;

    axios
      .post("https://695b986a1d8041d5eeb77c41.mockapi.io/Users", data)
      .then((result) => {
        console.log("POST Success:", result.data);

        localStorage.setItem("isLoggedIn", "true");
        setData({ name: "", password: "" });

        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <>
      <h1 className="text-center mb-5   px-4 py-2 fw-semibold "></h1>

      <div className="container d-flex justify-content-center align-items-center vh-50 ">
        <div className="card shadow p-4" style={{ width: "350px" }}>
          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Name</label>
              {error.nameError && (
                <span className="text-danger d-block">{error.nameError}</span>
              )}
              <input
                id="name"
                value={data.name}
                className="form-control"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              {error.passwordError && (
                <span className="text-danger d-block">{error.passwordError}</span>
              )}
              <input
                id="password"
                type="password"
                value={data.password}
                className="form-control"
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold shadow-sm w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;