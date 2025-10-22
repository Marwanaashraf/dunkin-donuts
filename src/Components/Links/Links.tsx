import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowDown, IceDrink, Sandwitch } from "../../Icons";
let links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "", name: "Menu" },
  { path: "/contact", name: "Contact" },
];
let menuLinks = [
  { path: "/drinks", name: "Drinks" },
  { path: "/foods", name: "Foods" },
];
type TLinks = {
  type: string;
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Links({ type, setSlider }: TLinks) {
  // menudropdown
  let [menuDropDown, setMenuDropDown] = useState<boolean>(false);
  let menuRef = useRef<HTMLLIElement>(null);
  // click menu in navbar or slider
  function handleDropDown() {
    if (menuDropDown) setMenuDropDown(false);
    else setMenuDropDown(true);
  }
  useEffect(() => {
    // close dropdown
    document.addEventListener("click", (e) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenuDropDown(false);
      }
    });
  }, []);

  // click in esc from keyboard
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setSlider(false);
        setMenuDropDown(false);
      }
    });
  }, []);
  return (
    <ul
      className={
        type === "nav"
          ? "list-none flex justify-evenly "
          : "list-none flex flex-col justify-evenly  h-60"
      }
    >
      {links.map((link, i) => {
        // menu dropdown
        return link.name === "Menu" ? (
          <li
            ref={menuRef}
            className=" relative cursor-pointer"
            key={i}
          >
            <div
              onClick={handleDropDown}
              className="nav-link flex space-x-1 items-center "
            >
              <span>{link.name}</span>{" "}
              <span>
                <ArrowDown className="w-5 h-5 mt-2" />
              </span>
            </div>
            {menuDropDown ? (
              <div className="menu-dropdown w-40 p-2 rounded-lg absolute top-full bg-white dark:bg-slate-800 shadow-lg ">
                {menuLinks.map((menuLink, i) => {
                  return (
                    <div
                      className="hover:bg-gray-100 hover:dark:bg-slate-700 rounded-sm my-2"
                      key={i}
                      onClick={() => {
                        setSlider(false);
                      }}
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link active-link cursor-pointer flex items-center space-x-1"
                            : "nav-link cursor-pointer flex items-center space-x-1"
                        }
                        to={menuLink.path}
                        onClick={() => {
                          setMenuDropDown(false);
                        }}
                      >
                        {menuLink.name === "Drinks" ? (
                          <IceDrink className="w-5" />
                        ) : (
                          <Sandwitch className="w-5" />
                        )}{" "}
                        <span>{menuLink.name}</span>
                      </NavLink>
                      {i === menuLinks.length - 1 ? (
                        ""
                      ) : (
                        <hr className="my-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </li>
        ) : (
          // othe links
          <li key={i}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to={link.path}
              onClick={() => {
                setSlider(false);
              }}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
