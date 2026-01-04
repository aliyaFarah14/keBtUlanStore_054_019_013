import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  const [success, setSuccess] = useState(false); // ✅ state notifikasi
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginPassword === 'admin123') {
      setSuccess(true); // tampilkan toast
      setTimeout(() => setSuccess(false), 3000); // hilang 3 detik

      // arahkan ke dashboard setelah 1 detik
      setTimeout(() => navigate('/admin-dashboard'), 1000);
    } else {
      alert('Password salah! Coba: admin123');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    alert('Registrasi berhasil!');
    setActiveTab('login');
    setLoginPassword('');
  };

  const tabClass = (tab) =>
    `flex-1 py-2 text-sm font-bold transition ${
      activeTab === tab
        ? 'bg-pink-400 text-white'
        : 'text-gray-800 hover:bg-pink-300'
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 mt-10 p-5">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-center max-h-[90vh] overflow-y-auto">
        <h2 className="bg-pink-400 text-white py-2 rounded-t-lg mb-5 text-xl font-bold">
          {activeTab === 'login' ? 'Form Login' : 'Form Registrasi'}
        </h2>

        {/* Tabs */}
        <div className="flex border border-gray-400 rounded-lg overflow-hidden mb-5">
          <button onClick={() => setActiveTab('login')} className={tabClass('login')}>
            Login
          </button>
          <button onClick={() => setActiveTab('register')} className={tabClass('register')}>
            Daftar
          </button>
        </div>

        {/* LOGIN */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <input
              type="email"
              placeholder="Masukkan Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-400 rounded-lg"
            />

            <div className="flex items-center border border-gray-400 rounded-lg bg-gray-50 px-3">
              <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6a5 5 0 10-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2z" />
              </svg>
              <input
                type="password"
                placeholder="Masukkan Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none py-2"
              />
            </div>

            <a href="#" className="text-sm text-blue-600 block">
              Lupa password?
            </a>

            <button className="w-full py-3 bg-pink-400 text-white rounded-lg font-bold hover:bg-pink-500 transition">
              Login
            </button>

            <p className="text-sm text-gray-600 text-center">
              Belum punya akun?{' '}
              <span
                onClick={() => setActiveTab('register')}
                className="text-pink-400 cursor-pointer"
              >
                Daftar sekarang
              </span>
            </p>
          </form>
        )}

        {/* REGISTER */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4 text-left">
            <input
              type="text"
              placeholder="Nama lengkap"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              required
              className="w-full p-2 border border-gray-400 rounded-lg"
            />

            <input
              type="email"
              placeholder="Masukkan Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-400 rounded-lg"
            />

            {[registerPassword, registerConfirmPassword].map((_, i) => (
              <div
                key={i}
                className="flex items-center border border-gray-400 rounded-lg bg-gray-50 px-3"
              >
                <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6a5 5 0 10-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2z" />
                </svg>
                <input
                  type="password"
                  placeholder={i === 0 ? 'Masukkan Password' : 'Ulangi Password'}
                  value={i === 0 ? registerPassword : registerConfirmPassword}
                  onChange={(e) =>
                    i === 0
                      ? setRegisterPassword(e.target.value)
                      : setRegisterConfirmPassword(e.target.value)
                  }
                  required
                  className="flex-1 bg-transparent outline-none py-2"
                />
              </div>
            ))}

            <button className="w-full py-3 bg-pink-400 text-white rounded-lg font-bold hover:bg-pink-500 transition">
              Daftar
            </button>

            <p className="text-sm text-gray-600 text-center">
              Sudah punya akun?{' '}
              <span
                onClick={() => setActiveTab('login')}
                className="text-pink-400 cursor-pointer"
              >
                Login sekarang
              </span>
            </p>
          </form>
        )}

        {/*Notifikasi popup login berhasil */}
        {success && (
          <div className="fixed top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded shadow-lg z-50">
            Login berhasil!
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
