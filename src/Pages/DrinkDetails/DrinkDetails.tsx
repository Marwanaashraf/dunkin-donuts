import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDrink } from "../../Interfaces/drink";
import { getDrink } from "../../Apis/getDrinkByID";
import { Sizes } from "../../Enums/enums";
import delivery from "../../assets/Images/Home/button-Dunkin'-Delivers_dsk-new.svg";
import Loading from "../../Components/Loading/Loading";
import Prompt from "../../Components/Prompt/Prompt";
import NotFound from "../../Components/NotFound/NotFound";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
export default function DrinkDetails() {
  const isMobile = useMediaQuery("(max-width:768px)");
  // drinkId
  const { id } = useParams();
  // drinkData
  let [drink, setDrink] = useState<IDrink | null>(null);
  // active size
  let [sizeActive, setSize] = useState<string>(Sizes.SMAL);
  // index of size
  let [sizeIndex, setSizeIndex] = useState<number>(0);
  // loading
  let [isLoading, setLoading] = useState<boolean>(true);
  let [prompt, setPrompt] = useState<boolean>(false);
  // handle size
  function handleSize(size: string, i: number) {
    setSize(size);
    setSizeIndex(i);
  }
  async function getData() {
    setLoading(true);
    let data = await getDrink(id as string);
    setDrink(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {drink ? (
            <>
              <Helmet>
                <title>{drink ? drink?.title : "Drink Details"}</title>
                <meta name="description" content="About Dunkin Donuts Dun " />
              </Helmet>
              <section className="contain py-28 mt-14">
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
                      {drink?.title}
                    </h2>

                    {/* subTitle */}
                    <h3 className="text-3xl uppercase font-medium">
                      {drink?.subTitle}
                    </h3>

                    {/* description */}
                    <p>{drink?.ingrdients}</p>

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

                    {/* sizes prices */}
                    <div className="grid grid-cols-2 gap-5 items-center">
                      {/* sizes */}
                      <div className="space-y-2">
                        <h3 className="text-2xl uppercase font-semibold">
                          Size
                        </h3>
                        <div className="flex space-x-1.5">
                          {drink?.sizes.map((size, i) => {
                            return (
                              <div
                                onClick={() => {
                                  handleSize(size, i);
                                }}
                                key={i}
                                className={
                                  size === sizeActive
                                    ? "w-10 h-10 rounded-full flex justify-center items-center bg-foshia text-white cursor-pointer"
                                    : "w-10 h-10 rounded-full flex justify-center items-center border border-light dark:border-dark cursor-pointer"
                                }
                              >
                                <span className="font-bold">{size}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* prices */}
                      <div className="space-y-2">
                        <h3 className="text-2xl uppercase font-semibold">
                          Price
                        </h3>
                        <span className="text-lg text-foshia font-medium space-x-2">
                          {drink?.discount > 0 ? (
                            <>
                              <del className="text-gray-400">
                                {drink?.prices[sizeIndex]}EGP
                              </del>
                              <span>
                                {Math.ceil(
                                  drink.prices[sizeIndex] -
                                    (drink.discount * drink.prices[sizeIndex]) /
                                      100
                                )}
                                EGP
                              </span>
                            </>
                          ) : (
                            <span>{drink.prices[sizeIndex]}EGP</span>
                          )}
                        </span>
                      </div>
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
                      src={drink?.image}
                      alt={drink?.title}
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
              url="/drinks"
              btnName="go to menu"
            />
          )}
        </>
      )}
    </>
  );
}
