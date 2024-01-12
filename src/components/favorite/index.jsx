/* eslint-disable react/prop-types */
import { SingleProduct } from "../SingleProduct";

export default function FavoriteProducts({ onClickFav, isItemFav, user }) {
  const favProducts = JSON.parse(localStorage.getItem("favProducts"));

  return (
    <div className="p-5">
      {user ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
          {favProducts.map((product) => {
            return (
              <SingleProduct
                name={product.title}
                img={product.image}
                price={product.price}
                key={product.id}
                id={product.id}
                onClickFav={onClickFav}
                isItemFav={isItemFav}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <h3 className="text-center text-3xl font-semibold">
            Please SignIn or SignUp to see favorite products
          </h3>
        </div>
      )}
    </div>
  );
}
