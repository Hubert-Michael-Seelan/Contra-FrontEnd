import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop"
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"
import CheckOut from "./Components/CheckOut/CheckOut";

function App() {
  return <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
      <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path="/product" element={<Product />}> 
      <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/login" element={<LoginSignUp />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
}

export default App;
