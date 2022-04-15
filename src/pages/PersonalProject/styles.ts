import { css } from "@emotion/css";
import { tag1 } from "@styles/base";
import { blackPrimary, smoke } from "@styles/variables/colors";

export const styProjectWrapper = css`
  > h1 {
    ${tag1}
    margin-top: 8px;
  }

  .control-bar {
    margin-top: 24px;
    display: grid;
    grid-column-gap: 8px;
    grid: auto / 200px 240px 120px;
    padding-bottom: 56px;
    border-bottom: 1px solid ${smoke};
    margin-bottom: 32px;
  }
`;

export const styTableWrapper = css`
  width: 100%;
  text-align: left;
  border-radius: 2px 2px 0 0;
  border-collapse: separate;
  border-spacing: 0;

  tbody {
    vertical-align: middle;
    border-color: inherit;

    tr {
      td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        transition: background 0.3s;
        position: relative;
        padding: 16px;
        overflow-wrap: break-word;
      }
    }
  }

  thead {
    vertical-align: middle;
    border-color: inherit;

    > tr {
      th {
        position: relative;
        color: ${blackPrimary};
        font-weight: 500;
        text-align: left;
        background: #fafafa;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        padding: 16px;
        overflow-wrap: break-word;
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
    }
  }
`;
