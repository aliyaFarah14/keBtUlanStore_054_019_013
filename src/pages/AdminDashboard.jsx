import { useState } from "react";
import productsData from "../data/products";
import AdminHeader from "../components/admin/AdminHeader";
import FormData from "../components/admin/FormData";
import DataTable from "../components/admin/DataTable";

export default function AdminDashboard() {
  const [products] = useState(productsData);

  return (
    <>
      <AdminHeader />
      <DataTable products={products} />
    </>
  );
}