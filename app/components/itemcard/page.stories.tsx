import { Meta, StoryFn } from "@storybook/react";
import ItemCard from "./page";

export default {
  component: ItemCard,
  title: "ItemCard",
} as Meta;

const Template: StoryFn<ItemCardProps> = (args) => <ItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "/food0.png",
  index: 1,
  item: "item",
  price: 0,
};

export const Tomatos = Template.bind({});
Tomatos.args = {
  ...Default.args,
  src: "/food1.png",
  item: "Pasta",
  price: 30,
};
