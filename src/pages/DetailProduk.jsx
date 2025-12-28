import { useParams } from "react-router-dom";

export default function DetailProduk() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Detail Produk</h1>
      <p>ID Produk: {id}</p>
    </div>
  );
}
