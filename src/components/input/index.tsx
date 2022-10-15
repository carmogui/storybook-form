import { InputHTMLAttributes, HTMLAttributes } from "react";
import * as S from "./styles";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

function InputWrapper({ children }: WrapperProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput({ ...rest }: InputProps) {
  return <S.Main {...rest} />;
}

InputWrapper.displayName = "Input.Wrapper";
InputInput.displayName = "Input.Input";

export const Input = {
  Wrapper: InputWrapper,
  Input: InputInput,
};
