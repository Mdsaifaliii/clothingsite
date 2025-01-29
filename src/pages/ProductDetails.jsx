import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import ProductVariants from "../components/ProductVariants";
import DynamicPricing from "../components/DynamicPricing";
import StockAvailability from "../components/StockAvailability";
import WishlistButton from "../components/WishlistButton";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    id: id,
    name: "Cool T-Shirt",
    images: [
      "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448748.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      "https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-13981.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      "https://img.freepik.com/free-photo/shirt-hanger-with-green-background_23-2150264158.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
    ],
    basePrice: 25,
    discount: 10,
    stock: 15,
    description: "A stylish and comfortable t-shirt for everyday wear.",
    variants: ["Small", "Medium", "Large"],
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Casual Hoodie",
      image: "https://img.freepik.com/free-photo/handsome-confident-hipster-modelsexy-unshaven-man-dressed-summer-stylish-green-hoodie-jeans-clothes-fashion-male-with-curly-hairstyle-posing-studio-isolated-blue_158538-26582.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      price: 499,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Stylish Jeans",
      image: "https://img.freepik.com/free-photo/blue-jeans-fabric-details_150588-31.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      price: 699,
      rating: 4,
    },
    {
      id: 3,
      name: "Sports Shoes",
      image: "https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      price: 849,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Women's Wear",
      image: "https://img.freepik.com/free-photo/beautiful-brunette-woman-boater-cotton-dress-posing-with-pineapple-fruits-string-bag_197531-17706.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      price: 799,
      rating: 4.7,
    },
    {
      id: 5,
      name: "Men's Shirt",
      image: "https://img.freepik.com/free-photo/still-life-with-classic-shirts_23-2150828606.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      price: 399,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Formal Shoes",
      image: "https://img.freepik.com/premium-photo/classic-men-shoes-made-smooth-brown-leather-dark-wooden-surface_172579-56.jpg?uid=R154646716&ga=GA1.1.248949094.1714507235&semt=ais_incoming",
      price: 1099,
      rating: 4.9,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageGallery images={product.images} />

        <div>
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <StockAvailability stock={product.stock} />
          <DynamicPricing basePrice={product.basePrice} discount={product.discount} />
          <ProductVariants
            variants={product.variants}
            onSelectVariant={(variant) => console.log("Selected Variant:", variant)}
          />
          <WishlistButton
            productId={product.id}
            onWishlistToggle={(id, status) => console.log("Wishlist Updated:", id, status)}
          />
          <p className="mt-6">{product.description}</p>
          <button className="mt-6 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-700">
            Buy Now
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductDetails;