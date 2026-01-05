import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm mt-10 rounded-xl p-4 mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-pink-500 p-2 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m0 0v8h14v-8zM9 5v2h6V5M9 5h6M9 5H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-4z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:gap-3">

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 border border-gray-300 rounded-lg text-pink-800 hover:bg-pink-300 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Ke Halaman Publik
          </button>

          <button
            onClick={() => navigate('/admin/tambah-produk')}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-pink-800 rounded-lg font-medium hover:bg-pink-300 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Tambah Produk
          </button>
        </div>
      </div>
    </header>
  );
}