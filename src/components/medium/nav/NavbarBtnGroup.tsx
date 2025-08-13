import Primary from "@/components/small/Buttons/Primary";
import Transparent from "@/components/small/Buttons/Transparent";
import React from "react";

const NavbarBtnGroup = () => {
  return (
    <div className="flex gap-5 col-span-2">
      <div className=" xl:flex">
        <Primary text="Contact Us" url="/contact-us" />
      </div>
      {/* <Transparent text="Log In" url="/login" icon={false} /> */}
    </div>
  );
};

export default NavbarBtnGroup;
