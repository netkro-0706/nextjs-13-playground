import { Meta, StoryFn } from "@storybook/react";
import CartItem from "./page";

export default {
  component: CartItem,
  title: "CartItem",
} as Meta;

const Template: StoryFn<CartItemProps> = (args) => <CartItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  age: 20,
  name: "item",
  pieces: 1,
};

export const DataSet = Template.bind({});
DataSet.args = {
  ...Default.args,
  pieces: 3,
};
