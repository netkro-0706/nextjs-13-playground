export default function CartItem({ age = 20, name = "item" }) {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>${age}</p>
      <p>1개</p>
    </div>
  );
}
