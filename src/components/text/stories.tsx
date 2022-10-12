import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./";

export default {
  title: "Text",
  component: Text,
  args: {
    children: "Lorem Ipsum",
  },
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args: any) => (
  <Text {...args}></Text>
);
