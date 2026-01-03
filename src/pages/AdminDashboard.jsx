import { useState } from "react";
import productsData from "../data/products";
import AdminHeader from "../components/admin/AdminHeader";
import DataTable from "../components/admin/DataTable";

export default function AdminDashboard() {
  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    const confirmDelete = confirm("Yakin ingin menghapus produk ini?");
    if (!confirmDelete) return;

    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-pink-300 p-6">
      <AdminHeader />
      <div className="max-w-7xl mx-auto mt-6">
        <DataTable products={products} onDelete={handleDelete} />
      </div>
    </div>
  );
}
