import styled from "styled-components";
import { color } from "../../constants";

export const Check = styled.div`
  opacity: 0;
`;

export const Checkbox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid ${color.content.regular};
  background-color: ${color.background.regular};
  color: ${color.content.main};
  cursor: pointer;

  &:hover ${Check} {
    opacity: 0.2;
  }
`;

export const HiddenCheckbox = styled.input`
  display: none;

  &:checked + ${Checkbox} {
    ${Check} {
      opacity: 1;
    }
  }
`;
