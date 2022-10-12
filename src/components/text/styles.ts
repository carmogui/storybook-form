import styled from "styled-components";

const fontSize = {
  small: "14px",
  medium: "16px",
  large: "18px",
};

const fontWeight = {
  light: "400",
  regular: "600",
  bold: "700",
};

interface Props {
  size: "small" | "medium" | "large";
  weight: "light" | "regular" | "bold";
}

export const Main = styled.p<Props>`
  font-size: ${({ size }) => fontSize[size]};
  font-weight: ${({ weight }) => fontWeight[weight]};
`;
