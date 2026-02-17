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
        const { data } = await axios.get(
          `http://localhost:8080/products/${id}`
        );
        setProduct(data);
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-danger mt-5">{error}</h2>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 text-center">
          <img
            src={product?.path}
            alt={product?.title}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Details Section */}
        <div className="col-12 col-md-6">
          <h2 className="mb-3">{product?.title}</h2>

          <div className="mb-3">
            <span className="h4 me-2">₹{product?.price}</span>
            {product?.mrp && (
              <span className="text-muted text-decoration-line-through">
                ₹{product.mrp}
              </span>
            )}
          </div>

          <p className="text-muted mb-4">
            {product?.description ||
              "High quality product with premium features."}
          </p>

          <button
            onClick={handleAddToCart}
            className="btn btn-primary w-25 w-md-auto"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductInfo;
