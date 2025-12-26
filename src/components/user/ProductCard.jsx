export default function ProductCard({ nama, harga, image }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col">
      
      <div className="w-full aspect-[4/3] bg-gray-100 rounded flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={nama}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <h2 className="font-bold mt-3">{nama}</h2>
      <p>Rp {harga}</p>

      <button
        onClick={() => console.log("Beli:", nama)}
        className="mt-auto bg-pink-500 hover:bg-pink-200 text-white px-3 py-1 rounded"
      >
        Beli
      </button>
    </div>
  );
}