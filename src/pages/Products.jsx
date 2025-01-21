import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Casual Hoodie",
      price: "499",
      image: "https://img.freepik.com/free-photo/handsome-confident-hipster-modelsexy-unshaven-man-dressed-summer-stylish-green-hoodie-jeans-clothes-fashion-male-with-curly-hairstyle-posing-studio-isolated-blue_158538-26582.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Stylish Jeans",
      price: "699",
      image: "https://img.freepik.com/free-photo/blue-jeans-fabric-details_150588-31.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      rating: 4,
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: "849",
      image: "https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Women's Wear",
      price: "999",
      image: "https://img.freepik.com/free-photo/beautiful-brunette-woman-boater-cotton-dress-posing-with-pineapple-fruits-string-bag_197531-17706.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Men's Shirt",
      price: "399",
      image: "https://img.freepik.com/free-photo/still-life-with-classic-shirts_23-2150828606.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Formal Shoes",
      price: "1099",
      image: "https://img.freepik.com/premium-photo/classic-men-shoes-made-smooth-brown-leather-dark-wooden-surface_172579-56.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
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
