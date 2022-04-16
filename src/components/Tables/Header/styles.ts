import { css } from "@emotion/css";
import { blackPrimary, primary } from "@styles/variables/colors";

export const styTableHeader = css`
  position: relative;
  color: ${blackPrimary};
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px;
  overflow-wrap: break-word;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:first-child {
    th {
      &:first-child {
        border-top-left-radius: 2px;
      }

      &:last-child {
        border-top-right-radius: 2px;
      }
    }
  }

  .sorter-wrapper {
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: space-between;
  }
`;

export const stySorter = css`
  color: #a6a6a6;
  margin-left: 4px;
  font-size: 0;
  transition: color 0.3s;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 11px;
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;

    &[data-active] {
      color: ${primary};
    }
  }
`;
