type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type CartItemProps = {
  age?: number;
  name?: string;
  pieces?: number;
};

type ItemCardProps = {
  src: string;
  index: number;
  item: string;
  price?: number;
};
