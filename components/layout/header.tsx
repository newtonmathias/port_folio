import React from "react";
import MainNav from "./main-nav";
import { MobileNav } from "./mobile-nav";

type Props = {};

const SiteHeader = (props: Props) => {
  return (
    <header className="stcky top-0 z-40 w-full border-b bg-background">
      <div className="container">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;
