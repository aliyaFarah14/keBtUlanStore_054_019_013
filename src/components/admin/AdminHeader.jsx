export default function AdminHeader() {
  return (
    <header className="flex justify-between items-center p-4 bg-pink-800 text-white rounded">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button
        onClick={() => console.log("Logout diklik")}
        className="px-3 py-1 bg-pink-500 hover:bg-red-200 rounded">
        Logout tombol (button)
      </button>
    </header>
  );
}