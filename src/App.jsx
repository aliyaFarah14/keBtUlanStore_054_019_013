import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/user/Navbar'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import DetailProduk from "./pages/DetailProduk";
import AdminLogin from './pages/AdminLogin';

export default function App() {
  return (
    <BrowserRouter basename="/aliyaFarah14/keBtUlanStore_054_019_013">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailProduk />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
