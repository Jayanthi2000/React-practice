import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;