import { MdMailOutline } from "react-icons/md";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./";

export default {
  title: "Input",
  component: Input.Wrapper,
  args: {
    placeholder: "Input placeholder",
  },
} as ComponentMeta<typeof Input.Wrapper>;

export const Default: ComponentStory<typeof Input.Input> = (args: any) => {
  return (
    <Input.Wrapper>
      <Input.Input {...args} />
    </Input.Wrapper>
  );
};

export const WithIcon: ComponentStory<typeof Input.Input> = (args: any) => {
  return (
    <Input.Wrapper>
      <MdMailOutline size={24} />

      <Input.Input {...args} />
    </Input.Wrapper>
  );
};
