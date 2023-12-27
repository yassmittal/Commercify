export default function ProductDetailPlaceholder() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-6 gap-4">
          <div className="border rounded-sm border-gray-400 shadow-md p-4 col-span-6 sm:col-span-2 h-[400px]">
            {/* placeholder for image  */}
            <div className="loads w-full h-full rounded-sm"></div>
          </div>
          <div className="border rounded-sm border-gray-400 shadow-md p-4 col-span-6 sm:col-span-4 flex flex-col justify-between">
            <div className="loads w-full h-4 rounded-sm"></div>
            <div className="loads w-1/2 h-4 rounded-sm mt-2"></div>
            <div className="loads w-11 h-4 rounded-sm mt-2"></div>
            <div className="loads w-full h-2 rounded-sm mt-3"></div>
            <div className="loads w-full h-2 rounded-sm mt-1"></div>
            <div className="loads w-full h-2 rounded-sm mt-1"></div>
            <div className="loads w-full h-2 rounded-sm mt-1"></div>
            <div className="loads w-full h-2 rounded-sm mt-1"></div>
            <div className="loads w-1/2 h-2 rounded-sm mt-1"></div>

            <div className="flex gap-2">
              <div className="loads w-4 h-4 rounded-sm mt-4"></div>
              <div className="loads w-10 h-4 rounded-sm mt-4"></div>
              <div className="loads w-20 h-4 rounded-sm mt-4"></div>
            </div>

            <div className="flex items-center gap-2">
              <div className="loads w-10 h-4 rounded-sm mt-4"></div>
              <div className="loads w-8 h-8 rounded-full mt-4"></div>
              <div className="loads w-8 h-8 rounded-full mt-4"></div>
              <div className="loads w-8 h-8 rounded-full mt-4"></div>
            </div>

            <div className="flex gap-3 mt-4">
              <div className="w-20 h-10 loads rounded-sm"></div>
              <div className="w-20 h-10 loads rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
