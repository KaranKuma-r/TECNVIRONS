import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    API.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data);
      });

  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ padding: "30px" }}>

      <h1>Product Detail</h1>

      <div style={{
        display: "flex",
        gap: "30px",
        marginTop: "20px"
      }}>

        <img
          src={product.image_url}
          alt={product.name}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover"
          }}
        />

        <div>

          <h2>{product.name}</h2>

          <p><b>Price:</b> ₹{product.price}</p>

          <p><b>Category:</b> {product.category}</p>

          <p><b>Brand:</b> {product.brand}</p>

          <p><b>Description:</b></p>

          <p>{product.description}</p>

        </div>

      </div>

    </div>
  );

}

export default ProductDetail;