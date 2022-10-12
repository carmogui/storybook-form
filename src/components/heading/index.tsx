import { HTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: "small" | "medium" | "large";
  weight?: "light" | "regular" | "bold";
}

export function Heading({
  size = "small",
  weight = "light",
  children,
  ...rest
}: Props) {
  return (
    <S.Main size={size} weight={weight} {...rest}>
      {children}
    </S.Main>
  );
}
