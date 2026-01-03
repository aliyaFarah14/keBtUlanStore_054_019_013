import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import DetailProduk from "./pages/DetailProduk";

export default function App() {
  return (
    <BrowserRouter basename="/aliyaFarah14/keBtUlanStore_054_019_013">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailProduk />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
