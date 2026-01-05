import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";


export default function ProductCard({
  id,
  nama,
  harga,
  image,
  kategori = "Produk",
  onDetail,
  onTambah,
}) {

  const { addToCart } = useCart();
  const [clicked, setClicked] = useState(false);

  const formatHarga = (v) =>
    v?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleTambah = () => {
    setClicked(true);
    addToCart({
      id,
      nama,
      harga,
      image,
     });
     onTambah?.(nama); 
     setTimeout(() => setClicked(false), 2000);
    };

  return (
    <Card className="
      group flex flex-col
      transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-4">
        <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={nama}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Gambar+Tidak+Ditemukan";
            }}/>
        </div>

        <span className="mt-3 inline-block text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
          {kategori}
        </span>

        <h2 className="font-semibold mt-2 text-gray-900 leading-snug line-clamp-2">
          {nama}
        </h2>

        <p className="text-pink-600 font-bold text-lg mt-1">
          Rp {formatHarga(harga)}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button
            variant="outline"
            size="sm"
            onClick={onDetail}
            className="font-semibold">
            Detail
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={handleTambah}
            disabled={clicked}
            className={clicked ? "bg-pink-300 scale-95" : ""}>
            {clicked ? "✓ Ditambahkan" : "Tambah"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}