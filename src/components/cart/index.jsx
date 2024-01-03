import SingleCartItem from "./singleCartItem";

export default function Cart({
  cartItems,
  increaseProductQuantity,
  decreaseProductQuantity,
  changeProductQuantity,
  removeProduct,
  onClickFav,
  isItemFav,
}) {
  return (
    <div className="p-5 max-w-[700px] mx-auto">
      <h2 className="font-semibold text-4xl text-center mb-4">Cart Summary</h2>
      <div>
        <ul className="flex flex-col gap-2">
          {cartItems.map((cartItem) => {
            return (
              <>
                <SingleCartItem
                  increaseProductQuantity={increaseProductQuantity}
                  decreaseProductQuantity={decreaseProductQuantity}
                  changeProductQuantity={changeProductQuantity}
                  removeProduct={removeProduct}
                  onClickFav={onClickFav}
                  cartItemImg={cartItem.image}
                  cartItemId={cartItem.id}
                  cartItemTitle={cartItem.title}
                  cartItemQuantity={cartItem.quantity}
                  isItemFav={isItemFav}
                  key={cartItem.id}
                />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
