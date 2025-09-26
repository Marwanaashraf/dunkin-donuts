import React, { useState } from "react";
import iceCoffe from "../../assets/Images/Frozen Drinks/iced_coffee.png";
import icedMatchaLatte from "../../assets/Images/Frozen Drinks/iced-matcha-latte.png";
export let drinks = [
  {
    title: "Ice Coffe",
    category: ["coffe", "Iced"],
    sizes: ["s", "m", "l"],
    prices: [98, 105, 115],
    image: iceCoffe,
  },
  {
    title: "Ice Matcha latte",
    category: ["coffe", "Iced"],
    sizes: ["s", "m", "l"],
    prices: [98, 105, 115],
    image: icedMatchaLatte,
  },
];
let drink = {
  title: "Ice Coffe",
  category: ["coffe", "Iced"],
  sizes: ["S", "M", "L"],
  prices: [98, 105, 115],
  image: iceCoffe,
};
export default function Menu() {
  let [size, setSize] = useState(drink.sizes[0]);
  let [price, setprice] = useState(drink.prices[0]);
  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-5 my-5 gap-5">
        {drinks.map((drink) => {
          return (
            <div className="group border border-slate-300 rounded-lg flex flex-col justify-center cursor-pointer items-center p-3 hover:border-main duration-500">
              <img
                className="w-28 group-hover:scale-[1.1] duration-500"
                src={drink.image}
                alt={drink.title}
              />
              <div className="">
                <h3 className="font-bold text-3xl">{drink.title}</h3>
                <p className="text-center">{drink.prices[0]}EGP</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2">
        <div className="flex space-x-1">
          {drink.sizes.map((item, i) => {
            return (
              <div
                onClick={() => {
                  setSize(item);
                  setprice(drink.prices[i]);
                }}
                className={
                  item === size
                    ? "w-10 h-10 border border-main text-main rounded-full flex justify-center items-center font-semibold cursor-pointer"
                    : "w-10 h-10 border border-gray-300 rounded-full flex justify-center items-center font-semibold cursor-pointer"
                }
              >
                <span>{item}</span>
              </div>
            );
          })}
        </div>
        <h3 className="font-semibold text-2xl">{price}EGP</h3>
      </div>
    </div>
  );
}
