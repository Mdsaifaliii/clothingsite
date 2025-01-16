import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$50",
      image: "https://img.freepik.com/free-photo/little-woman-leaning-head-arm-t-shirt-denim-jacket-beanie-looking-offended_176474-97288.jpg?t=st=1733334892~exp=1733338492~hmac=ed11df645fd6a14e81b462e804ac695a303fc9973b357180510560005f6cda06&w=826",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$75",
      image: "https://img.freepik.com/premium-photo/flat-lay-top-view-turquoise-sweater-boots-sunglasses-watch-hat_113876-1092.jpg?w=740",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$85",
      image: "https://img.freepik.com/premium-photo/clothing-men-placed-wooden-floor_11304-47.jpg?w=826",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Product 4",
      price: "$90",
      image: "https://img.freepik.com/free-photo/flat-lay-woman-style-accessories-red-knitted-sweater-checkered-shirt-jeans-black-leather-boots-autumn-fashion-trend-vintage-photo-camera-swiss-knife-passport-traveler-outfit_285396-5094.jpg?t=st=1733335533~exp=1733339133~hmac=485ce3898d3069dc6ea8f0947c3ffa1458b27bda760045bf08c2bb3a4cc2dcff&w=826",
      rating: 4.8,
    },
  
    {
      id: 5,
      name: "Product 5",
      price: "$85",
      image: "https://img.freepik.com/free-vector/watercolor-men-s-clothes-modern-style_23-2147522933.jpg?t=st=1733335594~exp=1733339194~hmac=7415fd97f94b99dbbd63dd08d8f833943e4d414c15325eccd9452a9ab8ebbcb3&w=740",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Product 6",
      price: "$75",
      image: "https://img.freepik.com/premium-photo/clothes-accessories-collection-summer-clothes-colorful-folded-clothes-blue-background_142957-562.jpg?w=740",
      rating: 4.9,
    },
    // Add more products as needed
  ];

  return (
    <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Products;
