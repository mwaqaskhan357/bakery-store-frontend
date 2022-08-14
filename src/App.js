import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart/CartPage";
import Home from "./pages/home/Home";
import Item from "./pages/item/Item";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Card from "./components/card/Card";
import Variant from "./pages/Variant";
import Categoryfilter from "./components/categoryfilter/Categoryfilter";
import Items from "./components/Items";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items/:id" element={<Item />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/variant" element={<Variant />} />
          <Route path="/categoryfilter" element={<Categoryfilter />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
