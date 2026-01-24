import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {

  let navigate = useNavigate();

  let { id } = useParams();
  // alert(id);

  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    brand: "",
    size: "",
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
    if (data.category.trim() === "") {
      objError.categoryError = "category is required!";
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
    if (data.image.trim() === "") {
      objError.imageError = "Image is required!";
      isValid = false;
    }
    // Brand Validation
    if (data.brand.trim() === "") {
      objError.brandError = "Brand is required!";
      isValid = false;
    }
    // Category Validation
    if (data.size.trim() === "") {
      objError.sizeError = "Category is required!";
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

        axios.post("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products", data)
          .then((res) => {
            console.log(res.data);
            setData({
              title: "",
              category: "",
              price: "",
              mrp: "",
              image: "",
              brand: "",
              size: "",
              description: ""
            })
          })
      }


    }

    else {

      if (isValid) {

        axios.put("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products/" + id, data)
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
      axios.get("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products/" + id)
        .then((res) => {
          console.log(res.data)
          setData({
            title: res.data.title,
            category: res.data.category,
            price: res.data.price,
            image: res.data.image,
            mrp: res.data.mrp,
            size: res.data.size,
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
            <label htmlFor="title" className="form-label">Title</label>
            {error.titleError && (
              <span className="text-danger d-block">{error.titleError}</span>
            )}
            <input value={data.title} onChange={handlechange} type="text" className="form-control" id="title" />
          </div>

          <div className="col-md-6">
            <label htmlFor="category" className="form-label">Age</label>
            {error.categoryError && (
              <span className="text-danger d-block">{error.categoryError}</span>
            )}
            <select value={data.category} onChange={handlechange} className="form-select" id="category">
              <option>Choose Category...</option>
              <option>U-17</option>
              <option>U-19</option>
              <option>Upto-19</option>
            </select>
          </div>
        </div>

        {/* Price, MRP, Image */}
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="price" className="form-label">Price</label>
            {error.priceError && (
              <span className="text-danger d-block">{error.priceError}</span>
            )}
            <input value={data.price} onChange={handlechange} type="number" className="form-control" id="price" />
          </div>

          <div className="col-md-3">
            <label htmlFor="mrp" className="form-label">MRP</label>
            {error.mrpError && (
              <span className="text-danger d-block">{error.mrpError}</span>
            )}
            <input value={data.mrp} onChange={handlechange} type="number" className="form-control" id="mrp" />
          </div>

          <div className="col-md-3">
            <label htmlFor="image" className="form-label">Image</label>
            {error.imageError && (
              <span className="text-danger d-block">{error.imageError}</span>
            )}
            <input value={data.image} onChange={handlechange} type="text" className="form-control" id="image" />
          </div>
        </div>

        {/* Brand, Size */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="brand" className="form-label">Brand</label>
            {error.brandError && (
              <span className="text-danger d-block">{error.brandError}</span>
            )}
            <select value={data.brand} className="form-select" onChange={handlechange} id="brand">
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
            <label htmlFor="size" className="form-label">Category</label>
            {error.sizeError && (
              <span className="text-danger d-block">{error.sizeError}</span>
            )}
            <select value={data.size} onChange={handlechange} className="form-select" id="size">
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
          <label htmlFor="description" className="form-label">Description</label>
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
        <button onClick={handleSubmit} className="btn btn-outline-dark px-4">
          Submit
        </button>

      </form>
    </div>
  );
}

export default AddProduct;
