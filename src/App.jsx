import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/user/Navbar'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import DetailProduk from "./pages/DetailProduk";
import AdminLogin from './pages/AdminLogin';
import TambahProduk from "./pages/TambahProduk";
import EditProduk from "./pages/EditProduk";
import { ProductProvider } from "./context/ProductContext";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter basename="/aliyaFarah14/keBtUlanStore_054_019_013">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailProduk />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/tambah-produk" element={<TambahProduk />} />
          <Route path="/admin/edit-produk/:id" element={<EditProduk />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}