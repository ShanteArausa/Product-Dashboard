import { useState } from "react";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([
    { name: "Laptop", price: 1000, status: "Available" },
    { name: "Phone", price: 700, status: "Available" },
    { name: "Tablet", price: 400, status: "Sold Out" }
  ]);

  function toggleStatus(index) {
    const updatedProducts = products.map((product, i) => {
      if (i === index) {
        return {
          ...product,
          status:
            product.status === "Available"
              ? "Sold Out"
              : "Available"
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  }

  return (
    <div>
      <h1>Product Dashboard</h1>

      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          status={product.status}
          onToggle={() => toggleStatus(index)}
        />
      ))}
    </div>
  );
}

export default App;