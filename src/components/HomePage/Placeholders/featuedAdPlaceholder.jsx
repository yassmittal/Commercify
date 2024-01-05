export default function FeatuedAdPlaceholder() {
  return (
    <div className="bg-[#712689] text-white p-5 grid grid-cols-2 gap-4 items-center">
      <div>
        <div className="h-6 w-full loads rounded-sm"></div>
        <div className="h-6 w-1/2 loads rounded-sm mt-4"></div>

        <div className="h-4 mt-4 w-full loads rounded-sm"></div>
        <div className="h-4 w-1/2 loads rounded-sm mt-2"></div>
        <button className="mt-5 bg-white shadow-md px-4 py-2 text-black rounded-sm hover:shadow-none font-semibold">
          Buy Now
        </button>
      </div>

      <div className="h-60 w-80 loads rounded-sm ms-auto"></div>
    </div>
  );
}
