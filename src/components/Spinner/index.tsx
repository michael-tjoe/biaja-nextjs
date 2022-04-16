import { ReactNode } from "react";
import { stySpinnerContainer, stySpinnerDot } from "./styles";

interface SpinnerProps {
  children: ReactNode;
  spinning: boolean;
}

function Spinner({ children, spinning }: SpinnerProps) {
  return (
    <div
      {...(spinning && { "data-active": true })}
      className={stySpinnerContainer}
    >
      {spinning && (
        <div>
          <div className="spinner">
            <div className={stySpinnerDot}>
              <i className="dot-item" />
              <i className="dot-item" />
              <i className="dot-item" />
              <i className="dot-item" />
            </div>
          </div>
        </div>
      )}
      <div className="content">{children}</div>
    </div>
  );
}

export default Spinner;
