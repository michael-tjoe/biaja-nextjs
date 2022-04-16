import { css, keyframes } from "@emotion/css";
import { primary } from "@styles/variables/colors";

const spinnerContainerAnimation = keyframes`
100%{
    transform: rotate(405deg)
}
`;

const spinnerDotAnimation = keyframes`
100%{
    opacity: 1
}
`;

export const stySpinnerContainer = css`
  position: relative;
  width: 100%;
  height: 100%;

  .spinner {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
  }

  .content {
    position: relative;
    transition: opacity 0.3s;
  }

  &[data-active] {
    .content {
      opacity: 0.5;
      user-select: none;
      pointer-events: none;
    }
  }
`;

export const stySpinnerDot = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px;
  transform: rotate(45deg);
  animation: ${spinnerContainerAnimation} 1.2s infinite linear;
  display: inline-block;
  font-size: 20px;
  width: 20px;
  height: 20px;

  .dot-item {
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: ${primary};
    border-radius: 100%;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    opacity: 0.3;
    animation: ${spinnerDotAnimation} 1s infinite linear alternate;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      right: 0;
      bottom: 0;
      animation-delay: 0.8s;
    }

    &:nth-child(4) {
      bottom: 0;
      left: 0;
      animation-delay: 1.2s;
    }
  }
`;
