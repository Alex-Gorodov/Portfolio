import { Header } from "../header/header";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  children,
}) => (
  <div className="page-container">
    <Header/>
    {children}
  </div>
);
