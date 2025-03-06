import { ArrowDown, Close } from "@/constant/icons";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../assets/images/image.png";

type Props = {
  dropdown: boolean;
  handleDropdown: () => void;
  handleOpen: () => void;
};

const Sidebar = ({ dropdown, handleDropdown, handleOpen }: Props) => {
  const navigation = useRouter();
  const handleNavigation = (url: string) => {
    navigation.push(url);
    handleOpen();
  };
  return (
    <div className="fixed top-0 left-0 w-[80vw] h-[100vh] bg-white z-10 p-7 px-5">
      <div className="bg-white h-[100%]">
        <div className="flex justify-between items-center">
          <div className="mt-16">
            <Image src={Logo} alt="Bliaz" width={150} height={150} />
          </div>
        </div>
        {/* ul */}
        <div className="mt-10">
          <ul className=" xl:hidden flex flex-col gap-5 h-[100%]">
            <li onClick={() => handleNavigation("/")}>
              <span className="link !text-darkblue">HOME</span>
            </li>
            <li onClick={() => handleNavigation("/employment")}>
              <span className="link !text-darkblue">STUDY ABROAD</span>
            </li>
            <li onClick={() => handleNavigation("/employment")}>
              <span className="link !text-darkblue">WORK ABROAD</span>
            </li>
            <li onClick={() => handleNavigation("/service")}>
              <span className="link !text-darkblue">Services</span>
            </li>
            <li
              className="relative top-0 left-0 flex gap-3 items-center "
              onClick={() => handleDropdown()}
            >
              <p className="link !text-darkblue">DIGITAL LITERACY</p>

              <ArrowDown
                className={`cursor-pointer text-darkblue ${
                  dropdown && "rotate-180"
                }`}
              />
              <div
                className={`absolute left-0 top-[40px] z-10 w-[200px] bg-darkblue rounded-md  px-4 py-5 ${
                  dropdown
                    ? "h-[150px] flex transition-all duration-500"
                    : "hidden h-[0]"
                }`}
              >
                <ul className=" xl:hidden flex flex-col gap-3 h-[100%]">
                  <li onClick={() => handleNavigation("/microsoft")}>
                    <span className="link !text-white">Microsoft Suites</span>
                  </li>
                  <li onClick={() => handleNavigation("/ai")}>
                    <span className="link !text-white">AI and Automation</span>
                  </li>
                  <li onClick={() => handleNavigation("/programming")}>
                    <span className="link !text-white">Programming</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* close */}
        <div
          className="cursor-pointer h-[35px] w-[35px] bg-gray-200 rounded-full flex justify-center items-center absolute top-7 right-7"
          onClick={() => handleOpen()}
        >
          <Close color="black" size={20} className="font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
