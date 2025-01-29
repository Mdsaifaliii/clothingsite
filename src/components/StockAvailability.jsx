import React from "react";

const StockAvailability = ({ stock }) => (
  <div className={`font-bold ${stock > 0 ? "text-green-500" : "text-red-500"} mb-4`}>
    {stock > 0 ? `${stock} items in stock` : "Out of Stock"}
  </div>
);

export default StockAvailability;