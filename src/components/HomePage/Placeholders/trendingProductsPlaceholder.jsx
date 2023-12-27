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
        <div className="w-1/2 mx-auto h-full rounded-md loads"></div>
      </div>
      <div className="bg-white px-3 py-2 flex justify-between rounded-b-md gap-3">
        <div className="w-3/4">
          <div className="w-full rounded-md loads h-5"></div>
          <div className="w-full rounded-md loads h-5 mt-4"></div>
        </div>
        <div className="w-1/2 rounded-md loads h-5"></div>
      </div>
    </div>
  );
}
