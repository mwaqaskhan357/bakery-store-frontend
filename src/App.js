import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart/CartPage";
import Home from "./pages/home/Home";
import Item from "./pages/item/Item";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items/:id" element={<Item />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
