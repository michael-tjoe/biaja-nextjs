import { css } from "@emotion/css";
import { blackPrimary, primary, smoke, white } from "@styles/variables/colors";

export const styPaginationWrapper = css`
  display: flex;
  column-gap: 8px;

  > li {
    transition: 0.3 ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    color: ${blackPrimary};
    transition: none;
    text-decoration: none;
    background-color: ${white};
    border: 1px solid ${smoke};
    outline: none;
    cursor: pointer;

    &:hover,
    &[data-active] {
      color: ${primary};
      border-color: ${primary};
    }
  }
`;
