import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import { ProductContext } from "../context/ProductContext";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EditProduk() {
  const { id } = useParams();
  const { products, editProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const productToEdit = products.find((p) => p.id === Number(id));

  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (productToEdit) {
      setNama(productToEdit.nama);
      setHarga(productToEdit.harga);
      setStock(productToEdit.stock);
      setImage(productToEdit.image || "");
    }
  }, [productToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();
    editProduct(id, {
      nama,
      harga: Number(harga),
      stock: Number(stock),
      image,
    });

    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-pink-300 p-6">
      <AdminHeader />
      <div className="max-w-2xl mx-auto mt-6">
        <h2 className="text-xl font-bold mb-4">Edit Produk</h2>

        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-red-200 hover:bg-pink-400 rounded shadow"
        >
          Kembali
        </button>

        <form
          onSubmit={handleUpdate}
          className="bg-white p-4 rounded-md shadow space-y-3 relative"
        >
          <input
            placeholder="Nama Produk"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            placeholder="Gambar"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Simpan Perubahan
          </button>
        </form>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Berhasil!</DialogTitle>
              <DialogDescription>
                Produk berhasil diperbarui.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={handleDialogClose}>OK</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
