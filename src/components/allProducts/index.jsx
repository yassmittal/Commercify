import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";
import { SingleProduct } from "../SingleProduct";

export default function AllProducts({
  products,
  onClickFav,
  isItemFav,
  loading,
}) {
  console.log(products);
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
        {loading ? (
          <TrendingProductsPlaceholder />
        ) : (
          <>
            {products.map((product) => {
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
          </>
        )}
      </div>
    </div>
  );
}
