import ItemCard from "../../components/itemcard/page";

export default function List() {
  let items = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {items.map((item, i) => {
        const price = i == 1 ? 30 : 0;

        return (
          <ItemCard src={`/food${i}.png`} index={i} item={item} price={price} />
        );
      })}
    </div>
  );
}
