import styled from "styled-components";
import { color } from "../../constants";

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  border-radius: 8px;
  gap: 8px;
  width: 100%;
  background-color: ${color.background.regular};

  &:focus-within {
    outline: 1px solid ${color.content.regular};
  }
`;

export const Main = styled.input`
  flex: 1;
  border: none;
  outline: none;
  color: ${color.content.main};
  background-color: transparent;

  &::placeholder {
    color: ${color.content.regular};
  }
`;
