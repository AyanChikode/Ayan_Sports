import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {

  let navigate = useNavigate();

  let { id } = useParams();
  // alert(id);

  const [data, setData] = useState({
    title: "",
    age: "",
    price: "",
    mrp: "",
    path: "",
    brand: "",
    category: "",
    description: ""
  })


  const [error, setError] = useState({});

  function handlechange(edata) {
    setData({ ...data, [edata.target.id]: edata.target.value });



  };

  function handleSubmit(e) {

    e.preventDefault();
    let objError = {};
    let isValid = true;

    // Title Validation
    if (data.title.trim() === "") {
      objError.titleError = "title is required!";
      isValid = false;

    }
    // Age Validation
    if (data.age.trim() === "") {
      objError.ageError = "age is required!";
      isValid = false;
    }
    // price Validation
    if (data.price.trim() === "") {
      objError.priceError = "price is required!";
      isValid = false;
    }
    // MRP Validation
    if (data.mrp.trim() === "") {
      objError.mrpError = "MRP is required!";
      isValid = false;
    }
    // Image Validation
    if (data.path.trim() === "") {
      objError.pathError = "path is required!";
      isValid = false;
    }
    // Brand Validation
    if (data.brand.trim() === "") {
      objError.brandError = "Brand is required!";
      isValid = false;
    }
    // Category Validation
    if (data.category.trim() === "") {
      objError.categoryError = "Category is required!";
      isValid = false;
    }
    // Description Validation
    if (data.description.trim() === "") {
      objError.descriptionError = "Description is required!";
      isValid = false;
    }

    setError(objError);



    if (id === undefined) {

      if (isValid) {

        axios.post("http://localhost:8080/products/register", data)
          .then((res) => {
            console.log(res.data);
            setData({
              title: "",
              age: "",
              price: "",
              mrp: "",
              path: "",
              brand: "",
              category: "",
              description: ""
            })
          })
      }


    }

    else {

      if (isValid) {

       axios.put(`http://localhost:8080/products/update/${id}`, data)


          .then((res) => {
            console.log(res.data);
            // setData(res.data)
            navigate("/admin/products/");
          });
      }
    }
  }


  useEffect(() => {
    if (id) {
      axios.get("http://localhost:8080/products/" + id)

        .then((res) => {
          console.log(res.data)
          setData({
            title: res.data.title,
            age: res.data.age,
            price: res.data.price,
            path: res.data.path,
            mrp: res.data.mrp,
            category: res.data.category,
            brand: res.data.brand,
            description: res.data.description
          });
        })
      // alert(id)
    }
  }, [])



  return (
    <div className="container my-4">

      {/* Breadcrumb */}
      <div className="mb-4 text-dark fw-semibold">
        ADMIN / ADD PRODUCT
      </div>

      <form>

        {/* Title & Category */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="title" className="form-label px-4 py-2 fw-semibold">Title</label>
            {error.titleError && (
              <span className="text-danger d-block ">{error.titleError}</span>
            )}
            <input value={data.title} onChange={handlechange} type="text" className="form-control" id="title" />
          </div>

          <div className="col-md-6">
            <label htmlFor="age" className="form-label px-4 py-2 fw-semibold">Age</label>
            {error.ageError && (
              <span className="text-danger d-block">{error.ageError}</span>
            )}
            <select value={data.age} onChange={handlechange} className="form-select px-4 py-2 fw-semibold" id="age">
              <option>Choose Age...</option>
              <option>U-17</option>
              <option>U-19</option>
              <option>above 19</option>
            </select>
          </div>
        </div>

        {/* Price, MRP, Image */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="price" className="form-label px-4 py-2 fw-semibold">Price</label>
            {error.priceError && (
              <span className="text-danger d-block">{error.priceError}</span>
            )}
            <input value={data.price} onChange={handlechange} type="number" className="form-control" id="price" />
          </div>

          <div className="col-md-3">
            <label htmlFor="mrp" className="form-label px-4 py-2 fw-semibold">MRP</label>
            {error.mrpError && (
              <span className="text-danger d-block">{error.mrpError}</span>
            )}
            <input value={data.mrp} onChange={handlechange} type="number" className="form-control" id="mrp" />
          </div>

          <div className="col-md-3">
            <label htmlFor="path" className="form-label px-4 py-2 fw-semibold">Image</label>
            {error.pathError && (
              <span className="text-danger d-block">{error.pathError}</span>
            )}
            <input value={data.path} onChange={handlechange} type="text" className="form-control" id="path" />
          </div>
        </div>

        {/* Brand, Size */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="brand" className="form-label px-4 py-2 fw-semibold">Brand</label>
            {error.brandError && (
              <span className="text-danger d-block">{error.brandError}</span>
            )}
            <select value={data.brand} className="form-select px-4 py-2 fw-semibold" onChange={handlechange} id="brand">
              <option>Choose Brand...</option>
              <option>SG</option>
              <option>SS</option>
              <option>Kookaburra</option>
              <option>New Balance</option>
              <option>DSC</option>
              <option>Gary Nicolls</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="size" className="form-label  px-4 py-2 fw-semibold">Category</label>
            {error.categoryError && (
              <span className="text-danger d-block">{error.categoryError}</span>
            )}
            <select value={data.category} onChange={handlechange} className="form-select" id="category">
              <option>Choose Product</option>
              <option>Bat</option>
              <option>Ball</option>
              <option>Gloves</option>
              <option>Helmet</option>
              <option>Kit</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="form-label px-4 py-2 fw-semibold">Description</label>
          {error.descriptionError && (
            <span className="text-danger d-block">{error.descriptionError}</span>
          )}
          <textarea
            value={data.description}
            onChange={handlechange}
            className="form-control"
            rows="4"
            id="description"
          ></textarea>
        </div>

        {/* Submit */}
        <button onClick={handleSubmit} className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold shadow-sm">
          Submit
        </button>

      </form>
    </div>
  );
}

export default AddProduct;
