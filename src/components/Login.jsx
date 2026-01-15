import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate ()
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
    
     const objError = {
      nameError: "",
      passwordError:""
    }

   if (data.name.trim() === "") {
      objError.nameError = "Name is Required !!!"
    } else if (data.name.trim().length < 2) {
      objError.nameError = "Minimum 2 charector required"
    }
   if (data.password.trim() === "") {
      objError.passwordError = "Surname is Required !!!";
    } else if (data.password.length < 4) {
      objError.passwordError = "Minimum 4 number required";;
    }

    setError(objError);
    console.log(data);

    axios
      .post("https://695b986a1d8041d5eeb77c41.mockapi.io/Users", data)
      .then((result) => {
        console.log("POST Success:", result.data);
        setData({ name: "", password: "" });
      });
       
       localStorage.setItem("isLoggedIn", "true");
      //  localStorage.setItem("user", JSON.stringify(result.data));

        setData({ name: "", password: "" });

         navigate("/admin");
      
  };
  useEffect(() => {

        let isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn) {
            navigate("/admin")
        };

    }, [])

  return (
    <>
      <div>
        <h1 className="text-center">Login</h1>
      </div>

      <div className="container d-flex justify-content-center align-items-center vh-50">
        <div className="card shadow p-4" style={{ width: "350px" }}>
          <h3 className="text-center mb-4 text-dark">Login</h3>

          <form >
            <div className="mb-3">
              <label className="form-label text-dark">Name</label>
              {error.nameError ? <span className='text-danger'>{error.nameError}</span> : <span></span>}
              <input
                value={data.name}
                id="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              {error.passwordError ? <span className='text-danger'>{error.passwordError}</span> : <span></span>}
              <input
                value={data.password}
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>

            <button onClick={handleSubmit}type="submit" className="btn btn-outline-dark w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
