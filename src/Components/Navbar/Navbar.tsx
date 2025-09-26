import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo/dd_nav_logo.svg";
import {
  ArrowDown,
  CloseSlider,
  DarkMode,
  IceDrink,
  LightMode,
  ListDown,
  Sandwitch,
} from "../../Icons";
import Links from "../Links/Links";
import Slider from "../Slider/Slider";

export default function Navbar() {
  let [darkMode, setDarkMode] = useState(false);
  let [isSlider, setSlider] = useState<boolean>(false);
  function handleMode() {
    // light
    if (darkMode) {
      setDarkMode(false);
      localStorage.setItem("mode", "light");
      document.querySelector("html")?.classList.remove("dark");
    }
    // dark
    else {
      setDarkMode(true);
      localStorage.setItem("mode", "dark");
      document.querySelector("html")?.classList.add("dark");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("mode")) {
      // if light
      if (localStorage.getItem("mode") === "light") {
        setDarkMode(false);
        document.querySelector("html")?.classList.remove("dark");
      }
      //else dark
      else {
        setDarkMode(true);
        document.querySelector("html")?.classList.add("dark");
      }
    }
  }, []);
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-30 bg-slate-100 p-6 flex justify-between items-center dark:bg-slate-900">
        {/* logo */}
        <Link to="/">
          <img className="w-full" src={logo} alt="logo" />
        </Link>
        {/* links */}
        <div className="hidden lg:block w-1/2">
          <Links type="nav" setSlider={setSlider} />
        </div>
        {/* mode */}
        <div className=" flex space-x-3 items-center">
          <div
            onClick={handleMode}
            className={
              darkMode
                ? "cursor-pointer w-14 h-7 border border-slate-700   rounded-full bg-slate-800 flex items-center justify-end"
                : "cursor-pointer w-14 h-7 border border-slate-400    rounded-full bg-slate-200 flex items-center "
            }
          >
            {darkMode ? (
              <div className="w-6 h-6 bg-black text-slate-200 rounded-full flex justify-center items-center">
                <DarkMode className="w-4 h-4 " />
              </div>
            ) : (
              <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                <LightMode className="w-4 h-4" />
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setSlider(true);
            }}
            className="block lg:hidden"
          >
            <ListDown className="w-7 h-7 text-black dark:text-dark cursor-pointer" />
          </div>
        </div>
      </nav>
      {isSlider ? <Slider setSlider={setSlider} /> : ""}
    </>
  );
}
