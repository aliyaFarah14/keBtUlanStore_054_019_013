export default function AdminHeader() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button
        onClick={() => console.log("Logout diklik")}
        className="px-3 py-1 bg-red-500 rounded"
      >
        Logout
      </button>
    </header>
  );
}