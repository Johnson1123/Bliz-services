import React from "react";

import SmallScreen from "../medium/nav/SmallScreen";
import LargeScreen from "../medium/nav/LargeScreen";

function Header() {
  return (
    <header className="bg-darkBlue 3k:bg-white bg-no-repeat bg-cover w-[100vw] 2k:bg-white lg:grid 3k:grid grid-cols-1">
      <SmallScreen />
      <LargeScreen />
    </header>
  );
}

export default Header;
