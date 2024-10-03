import React, { useEffect, useState } from 'react';
import './Home.css'; // Optional styling

// Simulate fetching data from an API (You can replace it with actual API calls)
const fetchFeaturedProducts = () => {
  return [
    { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Phone', price: 599.99, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Headphones', price: 199.99, image: 'https://via.placeholder.com/300' },
  ];
};

const fetchCategories = () => {
  return [
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Fashion', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Home & Living', image: 'https://via.placeholder.com/200' },
  ];
};

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch featured products and categories when the component mounts
  useEffect(() => {
    setFeaturedProducts(fetchFeaturedProducts());
    setCategories(fetchCategories());
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Find the best deals on electronics, fashion, and more!</p>
          <a href="/shop" className="shop-now-btn">Shop Now</a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <a href={`/product/${product.id}`} className="view-details-btn">View Details</a>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <a href={`/category/${category.id}`} className="shop-category-btn">Shop {category.name}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-section">
        <div className="promo-banner">
          <h2>Special Offers</h2>
          <p>Get up to 50% off selected items!</p>
          <a href="/offers" className="shop-now-btn">View Offers</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
