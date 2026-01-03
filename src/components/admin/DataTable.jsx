export default function DataTable({ products, onDelete  }) {
  return (
    <table className="border w-full mt-4">
      <thead>
        <tr className="bg-pink-50 font-serif text-red-950">
          <th className="border p-2">Nama</th>
          <th className="border p-2">Harga</th>
          <th className="border p-2">Stok</th>
          <th className="border p-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td className="border p-2">{item.nama}</td>
            <td className="border p-2">Rp {item.harga}</td>
            <td className={`border p-2 text-center font-semibold ${
              item.stock === 0
                ? "text-red-600" 
                : item.stock <= 10
                ? "text-yellow-600"
                : "text-green-600"}`}> {item.stock} </td>
            <td className="border p-2">
              <button onClick={() => onDelete(item.id)}
                className="bg-pink-500 hover:bg-red-600 text-white px-2 rounded">
                Hapus
              </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}