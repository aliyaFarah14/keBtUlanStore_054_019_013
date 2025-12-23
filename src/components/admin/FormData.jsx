export default function FormData() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit data produk");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mt-4">
      <div className="mb-3">
        <label className="block">Nama Produk</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Masukkan nama produk"
        />
      </div>

      <div className="mb-3">
        <label className="block">Harga</label>
        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Masukkan harga"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}