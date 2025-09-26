import React from "react";
import Links from "../Links/Links";
import { CloseSlider } from "../../Icons";
import logo from "../../assets/Images/logo/dd_nav_logo.svg";
import { Link } from "react-router-dom";

type TSldier = {
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Slider({ setSlider }: TSldier) {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-slate-100 dark:bg-slate-900 block lg:hidden">
      <div className="contain my-4">
        <div className="flex justify-between">
          <Link to="/">
            <img className="w-full" src={logo} alt="logo" />
          </Link>
          <div
            onClick={() => {
              setSlider(false);
            }}
          >
            <CloseSlider className="w-9 h-7 cursor-pointer hover:text-main duration-300 " />
          </div>
        </div>
        <div className=" my-4 ">
          <Links setSlider={setSlider} type="slider" />
        </div>
      </div>
    </section>
  );
}
