import type { ReactNode } from "react";
import { styLayoutWrapper } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <main className={styLayoutWrapper}>{children}</main>;
}

export default Layout;
