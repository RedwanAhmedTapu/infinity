import React from "react";
import { Link } from "react-router-dom";

const EmptyCartComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-lg text-center">
        <h2 className="text-gray-800 text-lg font-bold mb-4">
          Your cart is empty
        </h2>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">
            Continue Shopping...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartComponent;
