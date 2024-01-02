import { SingleProduct } from "../SingleProduct";

export default function FavoriteProducts() {
  const favProducts = JSON.parse(localStorage.getItem("favProducts"));

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {favProducts.map((product) => {
          return (
            <SingleProduct
              name={product.title}
              img={product.image}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
