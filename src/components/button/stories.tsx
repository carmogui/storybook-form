import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Lorem Ipsum",
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args}></Button>
);
