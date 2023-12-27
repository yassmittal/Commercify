export default function TrendingProductsPlaceholder() {
  return (
    <>
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
      <ProductPlaceholder />
    </>
  );
}

function ProductPlaceholder() {
  return (
    <div className="shadow-md rounded-b-md cursor-pointer hover:shadow-lg hover:-translate-y-3 transition-all">
      <div className="bg-violet-200 rounded-t-md relative p-3 h-52">
        <div className="w-full h-full rounded-md loads"></div>
      </div>
      <div className="bg-white px-3 py-2 flex justify-between items-center rounded-b-md gap-3">
        <div className="w-1/2 rounded-md loads h-5"></div>
        <div className="w-1/2 rounded-md loads h-5"></div>
      </div>
    </div>
  );
}
