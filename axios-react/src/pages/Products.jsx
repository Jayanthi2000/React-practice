import { useEffect, useState } from "react";
import axios from "axios";

// local images
import img1 from "../assets/product1.jpg";
import img2 from "../assets/product2.jpg";
import img3 from "../assets/product3.jpg";
import img4 from "../assets/product4.jpg";
import img5 from "../assets/product5.jpg";
import img6 from "../assets/product6.jpg";

function Products() {
  const [products, setProducts] = useState([]);

  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/92a22090-7829-4a5b-86ad-9eb625ef20ca")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🛍️ Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {products.map((item, index) => (
          <div key={item.id} style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px"
          }}>
            
            <img
              src={images[index]}
              alt={item.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />

            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;