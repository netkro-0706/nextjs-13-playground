function ItemCard({ src, index, item, price = 0 }: ItemCardProps) {
  return (
    <div className="food" key={index}>
      <img src={src} className="food-img" alt="food" />
      <h4>
        {item} ${price}
      </h4>
    </div>
  );
}

export default ItemCard;
