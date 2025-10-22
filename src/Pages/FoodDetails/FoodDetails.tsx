import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IFood } from "../../Interfaces/food";
import { getFood } from "../../Apis/getFoodById";
import NotFound from "../../Components/NotFound/NotFound";
import Prompt from "../../Components/Prompt/Prompt";
import { motion } from "framer-motion";
import Loading from "../../Components/Loading/Loading";
import delivery from "../../assets/Images/Home/button-Dunkin'-Delivers_dsk-new.svg";
import { Helmet } from "react-helmet";
export default function FoodDetails() {
  const isMobile = useMediaQuery("(max-width:768px)");
  // drinkId
  const { id } = useParams();
  // drinkData
  let [food, setFood] = useState<IFood | null>(null);
  // loading
  let [isLoading, setLoading] = useState<boolean>(true);
  let [prompt, setPrompt] = useState<boolean>(false);
  async function getData() {
    setLoading(true);
    let data = await getFood(id as string);
    setFood(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>{food ? food?.title : "Food Details"}</title>
        <meta name="description" content="About Dunkin Donuts Dun " />
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {food ? (
            <>
              <section className="contain py-28 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                  {/* details */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isMobile ? 0 : -30,
                      y: isMobile ? 30 : 0,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: isMobile ? 0.7 : 0.4 }}
                    className="space-y-5  order-2 md:order-1"
                  >
                    {/* title */}
                    <h2 className="text-4xl md:text-5xl uppercase font-extrabold dark:text-white">
                      {food?.title}
                    </h2>

                    {/* subTitle */}
                    <h3 className="text-3xl uppercase font-medium">
                      {food?.subTitle}
                    </h3>

                    {/* description */}
                    <p>{food?.ingrdients}</p>

                    {/* delivery */}
                    <h3 className="text-3xl uppercase font-semibold">
                      Let us come to you!
                    </h3>
                    <img
                      onClick={() => {
                        setPrompt(true);
                      }}
                      className="cursor-pointer"
                      src={delivery}
                      alt="delivery"
                    />

                    {/* price */}
                    <div className="space-y-3">
                      <h3 className="text-2xl uppercase font-semibold">
                        Price
                      </h3>
                      <span className="text-lg text-foshia font-medium space-x-2">
                        {food?.discount > 0 ? (
                          <>
                            <del className="text-gray-400">{food?.price}EGP</del>
                            <span>
                              {Math.ceil(
                                food?.price - (food?.discount * food?.price) / 100
                              )}
                              EGP
                            </span>
                          </>
                        ) : (
                          <span>{food?.price}EGP</span>
                        )}
                      </span>
                    </div>
                  </motion.div>

                  {/* image */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isMobile ? 0 : 30,
                      y: isMobile ? 30 : 0,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: isMobile ? 0.4 : 0.7 }}
                    className="order-1 md:order-2 mx-auto"
                  >
                    <img
                      className="w-40 md:w-80 "
                      src={food?.image}
                      alt={food?.title}
                    />
                  </motion.div>
                </div>
              </section>
              {/* prompt */}
              {prompt ? <Prompt setPrompt={setPrompt} /> : ""}
            </>
          ) : (
            <NotFound
              title="This product doesn’t exist, Check the URL or visit our Menu."
              url="/foods"
              btnName="go to menu"
            />
          )}
        </>
      )}
    </>
  );
}
