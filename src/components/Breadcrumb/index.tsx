import { memo } from "react";
import Link from "next/link";
import { styBreadcrumbWrapper } from "./styles";

interface BreadcrumbProps {
  routes: Array<{
    label: string;
    path: string;
  }>;
}

function Breadcrumb({ routes }: BreadcrumbProps) {
  return (
    <div className={styBreadcrumbWrapper}>
      {routes.map((route, index) => {
        const isLastRoute = index === routes.length - 1;
        return (
          <span key={route.path}>
            {isLastRoute ? (
              <span className="link disabled">{route.label}</span>
            ) : (
              <>
                <span className="link">
                  <Link href="/">{route.label}</Link>
                </span>
                <span className="separator">/</span>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default memo(Breadcrumb);
