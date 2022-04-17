import { css } from "@emotion/css";
import { body1, tag1 } from "@styles/base";

export const styHomeWrapper = css`
  > h1 {
    ${tag1}
    margin: 12px 0;
  }

  > p {
    ${body1}
    max-width: 480px;
    margin-bottom: 16px;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }
`;
