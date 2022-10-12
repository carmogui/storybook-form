import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Lorem Ipsum",
  },
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (args: any) => (
  <Heading {...args}></Heading>
);
