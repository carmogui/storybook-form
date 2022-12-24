import { GlobalStyle } from "./global";
import { Button, Checkbox, Heading, Input, Text } from "components";

export function App() {
  console.log("foo 2");
  return (
    <>
      <GlobalStyle />

      <div>
        <Button>Button</Button>

        <Checkbox />

        <Heading>Heading</Heading>

        <Input.Wrapper>
          <Input.Input placeholder="input" />
        </Input.Wrapper>

        <Text>Text</Text>
      </div>
    </>
  );
}
