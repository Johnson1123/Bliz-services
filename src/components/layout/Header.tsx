import React from "react";

import SmallScreen from "../medium/nav/SmallScreen";
import LargeScreen from "../medium/nav/LargeScreen";

function Header() {
  return (
    <header className="bg-darkBlue bg-no-repeat bg-cover w-[100vw] ">
      <SmallScreen />
      <LargeScreen />
    </header>
  );
}

export default Header;
