import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextTruncate from "react-text-truncate";
import ProductApi from "../Api/ProductApi";

function ProductCard({ products }) {
  const [cartItems, setCartItems] = useState(0);

  const handleCart = (e) => {
    let productId = e.target.value;
    setCartItems(productId);

  };

  useEffect(() => {
    if(cartItems.length > 0){
      ProductApi.addToCart(cartItems).then(res => {
        console.log(res);
      })
    }
  }, [cartItems]);

  return products.map((product) => {
    return (
      <div className="py-3" key={product.id}>
        <div className="flex w-full bg-white shadow-sm rounded-lg overflow-hidden">
          <div
            className="w-1/3 bg-cover"
            style={{
              backgroundImage: "url(" + product.image + ")",
            }}
          ></div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-xl">
              <TextTruncate
                line={1}
                element="span"
                text={product.title}
              />
            </h1>
            <p className="mt-2 text-gray-600 text-sm">
              <TextTruncate
                line={4}
                element="span"
                text={product.description}
              />
            </p>
            <div className="flex item-center mt-2">
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">
                ${product.price}
              </h1>
              <button
                value={product.id}
                onClick={(e) => handleCart(e)}
                className="px-3 py-2 bg-gray-800 hover:bg-gray-700 transition duration-200 text-white text-xs font-bold uppercase rounded"
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default ProductCard;

// chacking required propTypes

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  )
}
