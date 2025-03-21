import React from "react";

import SmallScreen from "../medium/nav/SmallScreen";
import LargeScreen from "../medium/nav/LargeScreen";
import { claHeaderContainer } from "@/styles/header.style";

function Header() {
  return (
    <header className={claHeaderContainer}>
      <SmallScreen />
      <LargeScreen />
    </header>
  );
}

export default Header;
