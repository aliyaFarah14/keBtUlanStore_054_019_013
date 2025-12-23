export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-red-200 text-black">
      <h1 className="text-xl font-bold">keBtUlan Store</h1>
      <div className="space-x-4">
        <button>Home</button>
        <button>Cart</button>
      </div>
    </nav>
  );
}
