import { createContext, useState } from "react";
import productsData from "../data/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(productsData);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };
  
  const editProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === Number(id) ? { ...item, ...updatedData } : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, editProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
