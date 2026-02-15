import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cartSlice";

function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
  "http://localhost:8080/products/" + id
);

        setProduct(response.data);
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-danger mt-5">{error}</h2>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Info</h1>

      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 mb-4">
          <img
            src={product?.path}
            alt={product?.title}
            className="img-fluid rounded"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2 className="mb-3">{product?.title}</h2>

          <div className="mb-3">
            <span className="h4 me-2">₹{product?.price}</span>
            {product?.mrp && (
              <span className="text-muted">
                <s>₹{product.mrp}</s>
              </span>
            )}
          </div>

          <p className="mb-4 text-muted">
            {product?.description ||
              "High quality product with premium features."}
          </p>

          <button
            onClick={handleAddToCart}
            className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
