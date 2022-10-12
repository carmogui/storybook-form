import { HTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  size?: "small" | "medium" | "large";
  weight?: "light" | "regular" | "bold";
  customTag?: "span" | "p" | "a";
}

export function Text({
  size = "small",
  weight = "light",
  customTag = "span",
  children,
}: Props) {
  return (
    <S.Main as={customTag} size={size} weight={weight}>
      {children}
    </S.Main>
  );
}
