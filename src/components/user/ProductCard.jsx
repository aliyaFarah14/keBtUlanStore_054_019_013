import { useState } from "react";

export default function ProductCard({
  nama,
  harga,
  image,
  kategori = "Produk",
  onDetail,
  onTambah,
}) {

  const [clicked, setClicked] = useState(false);

  const formatHarga = (v) =>
    v?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleTambah = () => {
    setClicked(true);
    onTambah?.(nama);
    setTimeout(() => setClicked(false), 250);
  };

  return (
    <div className="
      group border rounded-2xl p-4 bg-white flex flex-col
      transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
    ">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={nama}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div
          className="
            absolute inset-0 bg-black/35 opacity-0
            group-hover:opacity-100 transition flex items-center justify-center">
        </div>
      </div>

      {/* Info */}
      <span className="mt-3 inline-block text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
        {kategori}
      </span>

      <h2 className="font-semibold mt-2 text-gray-900 leading-snug line-clamp-2">
        {nama}
      </h2>

      <p className="text-pink-600 font-bold text-lg mt-1">
        Rp {formatHarga(harga)}
      </p>

      {/* Actions */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={onDetail}
          className="
            border rounded-lg py-2 font-semibold
            hover:bg-gray-50 transition
          "
        >
          Detail
        </button>

        <button
          onClick={handleTambah}
          className={`
            rounded-lg py-2 font-semibold text-white transition
            ${clicked
              ? "bg-pink-300 scale-95"
              : "bg-pink-500 hover:bg-pink-600"}
          `}
        >
          Tambah
        </button>
      </div>
    </div>
  );
}
