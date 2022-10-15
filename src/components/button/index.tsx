import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  full?: boolean;
}

export function Button({
  variant = "primary",
  full = false,
  children,
  ...rest
}: Props) {
  return (
    <S.Main variant={variant} full={full} {...rest}>
      {children}
    </S.Main>
  );
}
