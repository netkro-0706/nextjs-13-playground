import CartItem from "../../components/cartItem/page";
import Welecome from "../../components/welecome/page";
import data from "../../db/data";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Welecome />
      <CartItem age={data.age} name={data.name} pieces={2} />
      <CartItem />
      <CartItem />
    </div>
  );
}
