import { useState } from "react";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [page, setPage] = useState("user");

  return (
    <>
      <div className="p-4 space-x-2">
        <button onClick={() => setPage("user")}>User</button>
        <button onClick={() => setPage("admin")}>Admin</button>
      </div>

      {page === "user" ? <Home /> : <AdminDashboard />}
    </>
  );
}