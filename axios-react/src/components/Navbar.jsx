import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Navbar;