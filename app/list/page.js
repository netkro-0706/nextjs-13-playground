export default function List() {
  let items = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {items.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" alt="food" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
