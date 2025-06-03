import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsSection = ({
  isDropdown = false,
  imageWidth = 150,
  imageHeight = 80,
}) => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://bullwork-mobility-clone.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setActiveIndex(data.length > 1 ? 1 : 0);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const scrollLeft = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setActiveIndex((prev) => Math.min(prev + 1, products.length - 1));
  };

  const handleOrderClick = (product) => {
    navigate("/order", { state: { product } });
  };

  if (isDropdown) {
    return (
      <>
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-2 cursor-pointer hover:shadow-xl flex-shrink-0"
            style={{ width: imageWidth }}
            onClick={() => handleOrderClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: imageWidth,
                height: imageHeight,
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
            <h3 className="text-sm font-semibold mt-1 text-center">
              {product.name}
            </h3>
          </div>
        ))}
      </>
    );
  }

  const getVisibleProducts = () => {
    if (!products.length) return [];

    const items = [];
    const left = products[activeIndex - 1];
    const center = products[activeIndex];
    const right = products[activeIndex + 1];

    if (left) items.push({ ...left, position: "left" });
    if (center) items.push({ ...center, position: "center" });
    if (right) items.push({ ...right, position: "right" });

    return items;
  };

  return (
    <section className="text-center p-8 bg-purple-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">PRODUCTS</h1>
      <div className="relative flex items-center justify-center overflow-hidden max-w-6xl mx-auto">
        {products.length > 1 && (
          <button
            className="absolute left-2 text-4xl bg-black/60 text-white px-4 py-2 rounded-full hover:bg-black"
            onClick={scrollLeft}
            disabled={activeIndex === 0}
          >
            ‹
          </button>
        )}

        <div className="flex justify-center items-center gap-6 w-full transition-transform duration-500">
          {getVisibleProducts().map((product, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-2xl p-4 max-w-xs text-center transform transition duration-500 ${
                product.position === "center"
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-50"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-sm text-gray-600 my-2">{product.description}</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => handleOrderClick(product)}
              >
                ORDER
              </button>
            </div>
          ))}
        </div>

        {products.length > 1 && (
          <button
            className="absolute right-2 text-4xl bg-black/60 text-white px-4 py-2 rounded-full hover:bg-black"
            onClick={scrollRight}
            disabled={activeIndex >= products.length - 1}
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;


