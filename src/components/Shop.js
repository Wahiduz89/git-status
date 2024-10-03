import React, { useState, useEffect } from 'react';
import './Shop.css'; // Optional styling

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchProducts = () => {
      const productData = [
        { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/200' },
        { id: 2, name: 'Phone', price: 499.99, image: 'https://via.placeholder.com/200' },
        { id: 3, name: 'Tablet', price: 299.99, image: 'https://via.placeholder.com/200' },
        { id: 4, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/200' },
      ];
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  // Handle search input
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="shop-container">
      <h1>Shop Our Products</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
