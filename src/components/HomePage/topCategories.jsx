export default function TopCategories() {

  let categoriesCardArray = [
    {
      imgUrl: "Icons/mensClothingIcon.svg",
      categoryCardTitle: "Men's Clothing",
      id: 1,
    },

    {
      imgUrl: "Icons/woman-clothes.png",
      categoryCardTitle: "Women's Clothing",
      id: 2,
    },

    {
      imgUrl: "Icons/necklace-jewellery-icon.svg",
      categoryCardTitle: "Jewellery",
      id: 3,
    },

    {
      imgUrl: "Icons/electronicsIcon.png",
      categoryCardTitle: "Electronics",
      id: 4,
    },

    {
      imgUrl: "Icons/Accessories.png",
      categoryCardTitle: "Accessories",
      id: 5,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-4xl text-center font-semibold mb-5">
        Top Categories
      </h2>
      <div className="px-4">
        <div className="grid grid-cols-5 gap-4">
          {categoriesCardArray.map((Card) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <CategoryCard
                imgUrl={Card.imgUrl}
                categoryCardTitle={Card.categoryCardTitle}
                key={Card.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CategoryCard({ imgUrl, categoryCardTitle }) {
  return (
    <div className="border border-gray-300 rounded-lg py-5 px-4 text-center cursor-pointer hover:border-transparent hover:-translate-y-1 hover:shadow-md transition-all">
      <img src={imgUrl} alt="" className="w-10 mx-auto mb-3" />
      <p>{categoryCardTitle}</p>
    </div>
  );
}
