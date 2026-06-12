import React, { useEffect, useState } from "react";
import loading from "../assets/loadingAnimation.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="" className="w-50" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 p-6">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className="border rounded-lg shadow-sm p-3">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-60 object-contain"
                />

                <div className="flex flex-col justify-between h-33">
                  <div>
                    <p className="text-xl" title={product.title}>
                      {product.title.length > 50
                        ? product.title.slice(0, 47) + "..."
                        : product.title}
                    </p>
                    <p className="text-sm capitalize text-gray-500">
                      {product.category}
                    </p>
                    <p>₹ {product.price}</p>
                    <p>{product.rating.rate}<span className=" text-amber-400">★★★★★</span></p>
                  </div>
                </div>

                <button className="w-full bg-yellow-400 rounded-full py-2 mt-4 hover:bg-yellow-500">
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
