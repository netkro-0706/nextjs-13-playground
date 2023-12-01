import React from "react";

function CartItem({ age = 20, name = "item" }: CartItemProps) {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>${age}</p>
      <p>1개</p>
    </div>
  );
}

export default CartItem;
