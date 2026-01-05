import { Pencil } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";

export default function DataTable({ products, onDelete, onEdit }) {
  return (
    <div className="w-full">

      <div className="hidden md:block">
        <Table className="mt-4 bg-white rounded-xl overflow-hidden">
          <TableHeader>
            <TableRow className="bg-pink-50 text-red-950">
              <TableHead className="font-bold px-6">Gambar</TableHead>
              <TableHead className="font-bold px-6">Nama</TableHead>
              <TableHead className="font-bold px-6">Harga</TableHead>
              <TableHead className="font-bold px-6 text-center">Stock</TableHead>
              <TableHead className="font-bold px-6 text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((item) => (
              <TableRow key={item.id} className="border-b">
                <TableCell className="px-6 py-4">
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

                <TableCell className="px-6 py-4">
                  {item.nama}
                </TableCell>

                <TableCell className="px-6 py-4">
                  Rp {item.harga}
                </TableCell>

                <TableCell
                  className={`px-6 py-4 text-center font-semibold ${
                    item.stock === 0
                      ? "text-red-600"
                      : item.stock <= 10
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {item.stock}
                </TableCell>

                <TableCell className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(item.id)}
                      className="bg-pink-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => onDelete(item.id)}
                      className="bg-pink-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Hapus
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/*untuk tampilan mobile nya*/}
      <div className="md:hidden space-y-4 mt-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.nama}
                  className="h-14 w-14 rounded object-cover"
                />
              ) : (
                <div className="h-14 w-14 bg-gray-200 rounded flex items-center justify-center">
                  —
                </div>
              )}

              <div>
                <p className="font-bold text-gray-800">{item.nama}</p>
              </div>
            </div>
            {/*ini isi harga dan stock di card*/}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-500">Harga</span>
                <span className="font-medium">Rp {item.harga}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Stock</span>
                <span
                  className={`font-semibold ${
                    item.stock === 0
                      ? "text-red-600"
                      : item.stock <= 10
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {item.stock}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => onEdit(item.id)}
                className="flex-1 bg-pink-500 text-white py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="flex-1 bg-red-500 text-white py-2 rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}