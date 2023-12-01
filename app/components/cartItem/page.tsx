import React from "react";

function CartItem({ age = 20, name = "item", pieces = 1 }: CartItemProps) {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>${age}</p>
      <p>{pieces}개</p>
    </div>
  );
}

export default CartItem;
