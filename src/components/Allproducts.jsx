import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';
import { useNavigate } from 'react-router-dom';

function Allproducts() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    const productPerPage = 4 ;

    

    useEffect(() => {
        axios.get("https://695ea7dc2556fd22f6790bb6.mockapi.io/Products")
          .then(res => setProducts(res.data));
    }, []);

    function addProductToCart(product) {
        dispatch(addToCart({ ...product, quantity: 1 }));
    }

    //  image click handler
    function openProductInfo(id) {
        navigate(`/productinfo/${id}`);
    }
     
    // Pagenation calculation

    const lastProducts = currentPage * productPerPage ;
    const firstProducts = lastProducts - productPerPage ;
    const currentProducts = products.slice(firstProducts, lastProducts);


    const  totalPages = Math.ceil(products.length /productPerPage);


    return (
        <>
            <h1 className="text-center">All Products</h1>

            <div className="container mt-4">
                <div className="row">
                    {currentProducts.map((item) => (
                        <div className="col-lg-3" key={item.id}>
                            <div className="card m-2">

                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => openProductInfo(item.id)}
                                />

                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <h6>{item.brand}</h6>
                                    <h4>₹ {item.price}</h4>
                                    <del>₹ {item.mrp}</del>
                                    

                                    <button
                                        onClick={() => addProductToCart(item)}
                                        className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* bootstrap pagenation */}
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
        className={
          "page-item " + (currentPage === index + 1 ? "active" : "")
        }
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      </li>
    ))}

    {currentPage < totalPages && (
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

export default Allproducts;
