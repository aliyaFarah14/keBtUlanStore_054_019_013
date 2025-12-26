export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-pink-800 text-red-100">
      <h1 className="text-xl font-bold">keBtUlan Store</h1>
      <div className="space-x-4">
        <button>Home</button>
        <button>Cart</button>
      </div>
    </nav>
  );
}
