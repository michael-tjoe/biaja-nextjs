import { css } from "@emotion/css";
import { body1, tag1, tag2 } from "@styles/base";
import { smoke } from "@styles/variables/colors";

export const styHomeWrapper = css`
  > h1 {
    ${tag1}
    margin: 12px 0;
  }

  p {
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

  > h2 {
    ${tag2}
    margin: 32px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid ${smoke};
  }
`;

export const styStatsWrapper = css`
  display: flex;
  column-gap: 16px;

  img {
    border-radius: 8px;
  }
`;
