import { useState } from "react";
import "./App.css";

function App() {
  const productsData = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Mobile",
      price: 80000,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Mobile",
      price: 70000,
      rating: 4.5,
    },
    {
      id: 3,
      name: "MacBook Air",
      category: "Laptop",
      price: 120000,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Dell Inspiron",
      category: "Laptop",
      price: 65000,
      rating: 4.3,
    },
    {
      id: 5,
      name: "Boat Headphones",
      category: "Accessories",
      price: 2500,
      rating: 4.1,
    },
    {
      id: 6,
      name: "Apple Watch",
      category: "Accessories",
      price: 35000,
      rating: 4.7,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <h1>Product Search & Filter</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h2>{product.name}</h2>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {product.rating}
              </p>
            </div>
          ))
        ) : (
          <h2 className="no-products">
            No Products Found
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;