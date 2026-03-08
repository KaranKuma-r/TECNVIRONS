import { useNavigate } from "react-router-dom";
import React from "react";

function ProductCard({ product }) {

  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >

      <img
        className="product-image"
        src={product.image_url}
        alt={product.name}
      />

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
      </div>

    </div>
  );

}

export default React.memo(ProductCard);