import { css } from "@emotion/css";

import {
  blackPrimary,
  primaryHover,
  primaryOutline,
  smoke,
  white,
} from "@styles/variables/colors";

export const stySelectWrapper = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;

  > .selector {
    position: relative;
    background-color: ${white};
    border: 1px solid ${smoke};
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    height: 32px;
    padding: 0 11px;

    > .selected-item {
      flex: 1;
      overflow: hidden;
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0;
      line-height: 30px;
      transition: all 0.3s;
      user-select: none;
      padding-right: 18px;
    }

    &:hover {
      border-color: ${primaryHover};
      border-right-width: 1px;
    }

    &[data-expand] {
      border-color: ${primaryHover};
      border-right-width: 1px;
      outline: 0;
      box-shadow: 0 0 0 2px ${primaryOutline};
    }
  }

  > .select-arrow {
    text-transform: none;
    vertical-align: -0.125em;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 50%;
    right: 11px;
    display: flex;
    align-items: center;
    height: 12px;
    margin-top: -6px;
    color: #00000040;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    pointer-events: none;
  }
`;

export const styDropdown = css`
  min-width: 120px;
  width: 100%;
  margin: 0;
  color: ${blackPrimary};
  line-height: 1.5715;
  list-style: none;
  position: absolute;
  z-index: 1050;
  padding: 4px 0;
  overflow: hidden;
  font-size: 14px;
  font-variant: initial;
  background-color: ${white};
  border-radius: 2px;
  outline: none;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
    0 9px 28px 8px #0000000d;
  transition: transform 280ms ease-out 0s, opacity 0.16s ease 0s,
    visibility 0.16s ease 0s;
  transform: translateY(-8px);
  opacity: 0;
  visibility: hidden;

  &[data-expand] {
    transform-origin: center top;
    transform: translateY(0px);
    visibility: visible;
    overflow: visible;
    opacity: 1;
  }

  > ul {
    display: flex;
    flex-direction: column;

    > li {
      display: flex;
      flex-direction: column;
      height: 32px;
      color: #000000d9;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      cursor: pointer;
      transition: background 0.3s ease;

      > button {
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        cursor: pointer;
        text-align: left;
        width: 100%;
        height: 100%;
        padding: 5px 12px;
      }

      &[data-selected] {
        color: ${blackPrimary};
        font-weight: 600;
        background-color: #e6f7ff;
      }

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;
