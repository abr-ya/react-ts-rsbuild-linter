import styled from "@emotion/styled/macro";
import { css } from "@emotion/css/macro";
import { color, background, space, fontWeight, border, variant } from "styled-system";
import { IButton } from "./button.interface";

export const StyledButtonLabel = styled.span`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: 100%;
  font-family: SBSansUI, Arial, sans-serif;
`;

export const StyledButton = styled.button<IButton>`
  // old common part
  width: fit-content;
  min-width: 100px;
  white-space: nowrap;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  appearance: button;
  user-select: none;
  ${color}
  ${background}
  ${space}
  ${border}
  ${fontWeight}

  ${(props) =>
    props.disabled &&
    css`
      border: none;
      cursor: not-allowed;
      opacity: 50%;
      pointer-events: none;
    `}

  &:active {
    position: relative;
    top: 1px;
  }

  // new common part
  height: 40px;
  padding: 9px 20px;
  border-radius: 8px;

  ${variant({
    prop: "design",
    variants: {
      green: {
        color: "#fff",
        backgroundColor: "#10bf6a",
      },
      grey: {
        color: "#4c4c4c",
        backgroundColor: "#f2f3f6",
        border: "none",
      },
      ghost: {
        color: "black",
        backgroundColor: "transparent",
        border: "none",
      },
    },
  })}
`;
