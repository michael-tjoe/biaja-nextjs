import { css } from "@emotion/css";
import { blackPrimary, grayScale } from "@styles/variables/colors";

export const styBreadcrumbWrapper = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${blackPrimary};
  font-variant: tabular-nums;
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;

  > span {
    .link {
      &.disabled {
        color: ${grayScale};
      }
      a {
        text-decoration: none;
      }
    }

    .separator {
      margin: 0 8px;
      color: ${grayScale};
    }
  }
`;
