import type { ReactNode } from "react";
import { styLayoutWrapper } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className={styLayoutWrapper}>{children}</div>;
}

export default Layout;
