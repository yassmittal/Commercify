import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";
import { SingleProduct } from "../SingleProduct";

export default function SearchResults({
  resultArr,
  onClickFav,
  isItemFav,
  loading,
}) {
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {loading ? (
          <TrendingProductsPlaceholder />
        ) : (
          <>
            {resultArr.map((product) => {
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
