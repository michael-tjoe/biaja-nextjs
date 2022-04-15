import React, { ReactNode, memo } from "react";
import noop from "@utils/noop";
import { styButton } from "./styles";

export interface ButtonProps {
  block?: boolean;
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

function Button({
  block = false,
  children,
  primary,
  onClick = noop,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={styButton}
      onClick={onClick}
      {...(primary && { "data-primary": true })}
      {...(block && { "data-block": true })}
    >
      {children}
    </button>
  );
}

export default memo(Button);
