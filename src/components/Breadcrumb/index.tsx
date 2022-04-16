import { memo } from "react";
import { styBreadcrumbWrapper } from "./styles";

function Breadcrumb() {
  return (
    <div className={styBreadcrumbWrapper}>
      <span>
        <span className="link">Home</span>
        <span className="separator">/</span>
      </span>

      <span>
        <span className="link">Project Page</span>
      </span>
    </div>
  );
}

export default memo(Breadcrumb);
