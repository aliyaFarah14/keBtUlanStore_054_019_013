export default function DataTable({ products }) {
  return (
    <table className="border w-full mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Nama</th>
          <th className="border p-2">Harga</th>
          <th className="border p-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td className="border p-2">{item.nama}</td>
            <td className="border p-2">Rp {item.harga}</td>
            <td className="border p-2">
              <button className="bg-red-500 text-white px-2 rounded">
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}