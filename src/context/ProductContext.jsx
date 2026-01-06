import { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari API saat pertama load
  useEffect(() => {
    fetch("https://695c746e79f2f34749d43d5c.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  }, []);

  // Fungsi CRUD
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== String(id)));
  };

  const editProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === String(id) ? { ...item, ...updatedData } : item))
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, loading, addProduct, deleteProduct, editProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
