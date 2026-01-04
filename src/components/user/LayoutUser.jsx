import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutUser({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-pink-50">
        {children}
      </main>
      <Footer />
    </>
  );
}