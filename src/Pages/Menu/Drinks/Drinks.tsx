import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dCategories } from "../../../Enums/DrinkCategories";
import { AppDispatch, RootState } from "../../../Redux/store";
import { FrozenICon, HotDrink, IceDrink, TeaIcon } from "../../../Icons";
import Loading from "../../../Components/Loading/Loading";
import { ProductType } from "../../../Enums/ProductType";
import DrinkCard from "../../../Components/DrinkCard/DrinkCard";
import { getDrinks } from "../../../Redux/DrinkSlice";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { topVarians } from "../../../assets/variants/variants";
export default function Drinks() {
  let disp = useDispatch<AppDispatch>();
  // active category
  let [category, setCategory] = useState<dCategories>(dCategories.HOT);
  // drink state
  let { isLoading, drinks } = useSelector((state: RootState) => state.drink);
  // drinks categories
  let categories = Object.values(dCategories);

  let handleCategory = (item: dCategories) => {
    setCategory(item);
    disp(getDrinks(item));
  };
  
  useEffect(() => {
    disp(getDrinks(category));
  }, []);
  return (
    <>
      <Helmet>
        <title>Drinks Menu | Dunkin'</title>
        <meta
          name="description"
          content="Menu Drinks drink Dunkin Donuts Dun donuts icecoffe coffe tea hotcoffe late"
        />
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="contain py-28">
          {/* header */}
          <motion.h1
            variants={topVarians}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Drinks Menu
          </motion.h1>

          {/* categories */}
          <motion.div
            variants={topVarians}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center space-x-3 my-7"
          >
            {categories.map((item, i) => {
              return (
                <div
                  onClick={() => {
                    handleCategory(item);
                  }}
                  key={i}
                  className={
                    item === category
                      ? "flex justify-center items-center border border-main text-main rounded-lg h-10 p-3 space-x-1 cursor-pointer my-1"
                      : "flex justify-center items-center border border-light dark:border-dark rounded-lg h-10 p-3 space-x-1 cursor-pointer my-1"
                  }
                >
                  {item === dCategories.HOT ? (
                    <>
                      <HotDrink className="w-5" />
                      <span className="text-xs md:text-base">{item}</span>
                    </>
                  ) : item === dCategories.ICE ? (
                    <>
                      <IceDrink className="w-5" />
                      <span className="text-xs md:text-base">{item}</span>
                    </>
                  ) : item === dCategories.COLD ? (
                    <>
                      <FrozenICon className="w-5" />
                      <span className="text-xs md:text-base">{item}</span>
                    </>
                  ) : (
                    <>
                      <TeaIcon className="w-5" />
                      <span className="text-xs md:text-base">{item}</span>
                    </>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* products */}
          <motion.div
            variants={topVarians}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              delay: 0.7,
              staggerChildren: 0.2,
            }}
            className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 my-8 gap-5"
          >
            {drinks.map((drink, i) => {
              return (
                <motion.div
                  variants={topVarians}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.9,
                  }}
                  key={i}
                  className="h-full"
                >
                  <DrinkCard product={drink} />
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      )}
    </>
  );
}
