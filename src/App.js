import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/card/Card";
import CartPage from "./pages/cart/CartPage";
import Home from "./pages/home/Home";
import Item from "./pages/item/Item";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
