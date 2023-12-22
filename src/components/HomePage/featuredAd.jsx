export default function FeaturedAd() {
  return (
    <div className="bg-[#712689] text-white p-5 grid grid-cols-2 gap-4 items-center">
      <div>
        <h2 className="text-4xl mb-3 leading-tight">
          Experience your music like never before
        </h2>

        <p className="leading-tight">
          If we&lsquo;re no longer the right solution for you, we&lsquo;ll allow
          you to export your data at anytime for any reason.
        </p>
        <button className="mt-5 bg-white shadow-md px-4 py-2 text-black rounded-sm hover:shadow-none font-semibold">
          Buy Now
        </button>
      </div>

      <div>
        <img src="Images/headPHoneImage.png" alt="headphone" className="w-80 max-w-full ms-auto" />
      </div>
    </div>
  );
}
