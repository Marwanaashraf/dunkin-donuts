import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodsByCategory } from "../../../Apis/getFoods";
import { AppDispatch, RootState } from "../../../Redux/store";
import { getFoods } from "../../../Redux/FoodSlice";
import Loading from "../../../Components/Loading/Loading";
import { fCategories } from "../../../Enums/FoodCategories";
import { Dount, Sandwitch } from "../../../Icons";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { ProductType } from "../../../Enums/ProductType";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { topVarians } from "../../../assets/variants/variants";
export default function Foods() {
  let { foods, isLoading } = useSelector((state: RootState) => state.food);
  let [category, setCategory] = useState(fCategories.SANDWITCHES);
  let categories = Object.values(fCategories);
  const handleCategory = (item: fCategories) => {
    setCategory(item);
    disp(getFoods(item));
  };
  let disp = useDispatch<AppDispatch>();
  useEffect(() => {
    disp(getFoods());
  }, []);
  return (
    <>
      <Helmet>
        <title>Foods Menu | Dunkin'</title>
        <meta
          name="description"
          content="Menu Food foods Dunkin Donuts Dun donuts Sandwitch"
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
            Foods Menu
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
                      ? "flex justify-center items-center border border-main text-main rounded-lg h-10 p-3 space-x-1 cursor-pointer"
                      : "flex justify-center items-center border border-light dark:border-dark rounded-lg h-10 p-3 space-x-1 cursor-pointer"
                  }
                >
                  {item === fCategories.DONUTS ? (
                    <>
                      <Dount className="w-5" />
                      <span className="text-xs md:text-base">{item}</span>
                    </>
                  ) : (
                    <>
                      <Sandwitch className="w-5" />
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
            viewport={{ once: true , amount: 0.3}}
            transition={{ duration: 1, delay: 0.7, staggerChildren: 0.15 }}
            className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 my-8 gap-5"
          >
            {foods.map((item, i) => {
              return (
                <motion.div
                  variants={topVarians}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                  key={i}
                  className="h-full"
                >
                  <FoodCard product={item} productType={ProductType.FOOD} />
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      )}
    </>
  );
}
