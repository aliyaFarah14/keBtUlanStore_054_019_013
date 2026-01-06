import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ProductForm({ onAdd, loading }) {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !harga || !stock) return;

    try {
      // POST ke MockAPI
      const res = await fetch("https://695c746e79f2f34749d43d5c.mockapi.io/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          harga: Number(harga),
          stock: Number(stock),
          image: image || null,
        }),
      });

      const newProduct = await res.json();

      // Update context melalui callback dari parent
      onAdd(newProduct);

      // reset form
      setNama("");
      setHarga("");
      setStock("");
      setImage("");
    } catch (err) {
      console.error("Gagal tambah produk:", err);
    }
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
        required
      />
      <Input
        type="number"
        placeholder="Harga"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <Input
        placeholder="Gambar"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Menambahkan..." : "Tambah Produk"}
      </Button>
    </form>
  );
}
