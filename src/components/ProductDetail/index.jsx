import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import Similarproducts from "./similarproducts";
import ProductDetails from "./productDetails";
import ProductDetailPlaceholder from "./productDetailPlaceholder";
import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";
import { useParams } from "react-router/dist";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <ProductDetailPlaceholder />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto">
            <TrendingProductsPlaceholder />
          </div>
        </div>
      ) : (
        <>
          <ProductDetails
            productImg={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            loading={loading}
          />
          <Similarproducts
            category={product.category}
            currentProductId={product.id}
          />
        </>
      )}
    </div>
  );
}
