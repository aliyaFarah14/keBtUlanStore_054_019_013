import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import LayoutUser from "@/components/user/LayoutUser";

export default function HalNotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split("/").pop();

  return (
    <LayoutUser>
      <div className="flex flex-col items-center justify-center py-32 text-center space-y-4">
        <AlertTriangle className="w-16 h-16 text-pink-800" />

        <h1 className="text-3xl font-bold text-pink-600">
          Halaman "{pathName}" Tidak Ditemukan
        </h1>

        <p className="text-gray-500 max-w-md">
            Ups! Sepertinya halaman <b>{pathName}</b> tidak ada tuh. Coba kembali ke beranda dan lanjutkan belanja seru Anda.
        </p>

        <div className="flex gap-3 mt-4">
          <Button onClick={() => navigate("/")}> Ke Beranda </Button>

          <Button variant="outline" onClick={() => navigate("/products")}>
            Lihat Produk
          </Button>
        </div>
      </div>
    </LayoutUser>
  );
}