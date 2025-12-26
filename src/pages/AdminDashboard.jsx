import { useState } from "react";
import productsData from "../data/products";
import AdminHeader from "../components/admin/AdminHeader";
import FormData from "../components/admin/FormData";
import DataTable from "../components/admin/DataTable";

export default function AdminDashboard() {
  const [products] = useState(productsData);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-red-200 font-bold text-red-900 p-6">
      <AdminHeader />
      <DataTable products={products} />
    </div>
  );
}
