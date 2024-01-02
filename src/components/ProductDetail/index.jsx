/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom";

import Similarproducts from "./similarproducts";
import ProductDetails from "./productDetails";
import ProductDetailPlaceholder from "./productDetailPlaceholder";
import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function ProductDetail({ loading, products, addToCart }) {
  const [favProducts, setFavProducts] = useState(
    localStorage.getItem("favProducts")
      ? JSON.parse(localStorage.getItem("favProducts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("favProducts", JSON.stringify(favProducts));
  }, [favProducts]);

  let { id } = useParams();

  let product = products.find((product) => {
    return +product.id === +id;
  });

  function onClickFav(Itemid) {
    const clickedProduct = products.find((product) => product.id == Itemid);
    const duplicateFavProducts = [...favProducts];
    if (duplicateFavProducts.length == 0) {
      duplicateFavProducts.push(clickedProduct);
      setFavProducts(duplicateFavProducts);
      return;
    }

    const isItemPresent = duplicateFavProducts.find((product) => {
      return product.id == Itemid;
    });

    if (isItemPresent) {
      const selectedItemIndex = duplicateFavProducts.indexOf(isItemPresent);
      duplicateFavProducts.splice(selectedItemIndex, 1);
      setFavProducts(duplicateFavProducts);
    } else {
      duplicateFavProducts.push(clickedProduct);
      setFavProducts(duplicateFavProducts);
    }
  }

  return (
    <div>
      {loading ? (
        <div>
          <ProductDetailPlaceholder />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto p-4">
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
            category={product.category}
            productId={id}
            addToCart={addToCart}
            onClickFav={onClickFav}
          />
          <Similarproducts
            category={product.category}
            currentProductId={product.id}
            onClickFav={onClickFav}
          />
        </>
      )}
    </div>
  );
}
