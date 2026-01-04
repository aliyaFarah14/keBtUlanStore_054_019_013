import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ProductForm({ onAdd }) {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !harga || !stock) return;

    console.log("handleSubmit terpanggil"); // debug
    onAdd({
      id: Date.now(),
      nama,
      harga: Number(harga),
      stock: Number(stock),
      image: image || null,
    });

    setNama("");
    setHarga("");
    setStock("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-md shadow mb-4 space-y-3"
    >
      <Input
        placeholder="Nama Produk"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Harga"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <Input
        placeholder="Gambar"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit" className="w-full">Tambah Produk</Button>
    </form>
  );
}
