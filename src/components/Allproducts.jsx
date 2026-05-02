import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAsync } from "../state/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Allproducts.css";

function AllProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.cart);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // for search box 
  const [search, setSearch] = useState("");

  const productPerPage = 4;

  useEffect(() => {
    axios
      .get("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter 
  const filteredProducts = products.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase())
  );

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;

  const currentProducts = filteredProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  const totalPages = Math.ceil(filteredProducts.length / productPerPage);

  const openProductInfo = (id) => {
    navigate(`/productinfo/${id}`);
  };

  return (
    <>
      <h1 className="text-center mt-3">All Products</h1>

      {/* search box */}
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Search by brand or product..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {currentProducts.length > 0 ? (
            currentProducts.map((item) => (
              <div className="col-lg-3" key={item.id}>
                <div className="card m-2 shadow-sm">
                  <img
                    src={item.path}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => openProductInfo(item.id)}
                  />

                  <div className="card-body text-center">
                    <h6>{item.brand}</h6>
                    <h5>{item.title}</h5>
                    <h4>₹ {item.price}</h4>
                    <del className="text-muted">₹ {item.mrp}</del>

                    <button
                      disabled={loading}
                      onClick={() => dispatch(addToCartAsync(item))}
                      className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold shadow-sm mt-2"
                    >
                      {loading ? "Adding..." : "Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-center mt-4 text-danger">
              No Products Found
            </h4>
          )}
        </div>
      </div>

      {/* pagination */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {currentPage > 1 && (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
            </li>
          )}

          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {currentPage < totalPages && totalPages > 0 && (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default AllProducts;