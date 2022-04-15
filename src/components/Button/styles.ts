import { css } from "@emotion/css";
import {
  blackPrimary,
  smoke,
  white,
  primary,
  primaryHover,
  primaryActive,
} from "@styles/variables/colors";

export const styButton = css`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  padding: 4px 15px;
  height: 32px;
  font-size: 14px;
  border-radius: 2px;
  color: ${blackPrimary};
  border-color: ${smoke};
  background-color: ${white};

  &[data-primary] {
    color: ${white};
    border-color: ${primary};
    background-color: ${primary};
    textshadow: 0 -1px 0 rgb(0 0 0 / 12%);
    boxshadow: 0 2px #0000000b;

    &:hover {
      background-color: ${primaryHover};
      border-color: ${primaryHover};
    }

    &:active {
      background-color: ${primaryActive};
      border-color: ${primaryActive};
    }
  }
`;
