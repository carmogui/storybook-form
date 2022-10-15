import styled, { css } from "styled-components";
import { color } from "../../constants";

const primary = css`
  background-color: ${color.background.primary};
  color: ${color.content.main};

  &:focus {
    outline: 1px solid ${color.background.contrast};
  }
`;

const secondary = css`
  background-color: ${color.background.secondary};
  color: ${color.content.contrast};

  &:focus {
    outline: 1px solid ${color.background.contrast};
  }
`;

const buttonVariant = { primary, secondary };

interface Props {
  variant: "primary" | "secondary";
  full: boolean;
}

export const Main = styled.button<Props>`
  ${({ variant }) => buttonVariant[variant]}
  width: ${({ full }) => (full ? "100%" : "unset")};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 8px 88px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
