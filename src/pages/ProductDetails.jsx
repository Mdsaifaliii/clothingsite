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
      "https://via.placeholder.com/600x400?text=Image+1",
      "https://via.placeholder.com/600x400?text=Image+2",
      "https://via.placeholder.com/600x400?text=Image+3",
    ],
    basePrice: 25,
    discount: 10,
    stock: 15,
    description: "A stylish and comfortable t-shirt for everyday wear.",
    variants: ["Small", "Medium", "Large"],
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Casual Hoodie",
      image: "https://via.placeholder.com/300?text=Casual+Hoodie",
      price: 40,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Stylish Jeans",
      image: "https://via.placeholder.com/300?text=Stylish+Jeans",
      price: 55,
      rating: 4,
    },
    {
      id: 4,
      name: "Sports Shoes",
      image: "https://via.placeholder.com/300?text=Sports+Shoes",
      price: 60,
      rating: 4.8,
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
