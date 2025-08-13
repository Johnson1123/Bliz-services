import Primary from "@/components/small/Buttons/Primary";
import React from "react";

const NavbarBtnGroup = () => {
  return (
    <div className="flex gap-5 col-span-2">
      <div className=" xl:flex">
        <Primary text="Contact Us" url="/contact-us" />
      </div>
    </div>
  );
};

export default NavbarBtnGroup;
