import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";
import { Pencil } from "lucide-react";

export default function DataTable({ products, onDelete, onEdit }) {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="bg-pink-50 font-serif text-red-950">
          <TableHead>Gambar</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Harga</TableHead>
          <TableHead className="text-center">Stock</TableHead>
          <TableHead>Aksi</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.nama}
                  className="h-12 w-12 object-cover rounded"
                />
              ) : (
                "Tidak ada"
              )}
            </TableCell>

            <TableCell>{item.nama}</TableCell>
            <TableCell>Rp {item.harga}</TableCell>

            <TableCell
              className={`text-center font-semibold h-12 ${
                item.stock === 0
                  ? "text-red-600"
                  : item.stock <= 10
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {item.stock}
            </TableCell>

            <TableCell className="flex gap-2">
              {/*Untuk Tombol edit dengan ikon pensil di kotak */}
              <button
                type="button"
                onClick={() => onEdit(item.id)}
                className="bg-pink-500 hover:bg-red-600 text-white px-2 py-1 rounded flex items-center justify-center"
              >
                <Pencil size={16} />
              </button>
              <button
                type="button"
                onClick={() => onDelete(item.id)}
                className="bg-pink-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Hapus
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
