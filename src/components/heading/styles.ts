import styled from "styled-components";

const fontSize = {
  small: "20px",
  medium: "22px",
  large: "24px",
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

export const Main = styled.h2<Props>`
  font-size: ${({ size }) => fontSize[size]};
  font-weight: ${({ weight }) => fontWeight[weight]};
`;
