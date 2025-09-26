import React, { useEffect, useState } from "react";
import reward from "../../assets/Images/Home/Dunkin' Rewards Logo - Text_Desktop.svg";
import logo from "../../assets/Images/logo/dd_nav_logo.svg";
import appStore from "../../assets/Images/Footer/AppStore.png";
import googlePlay from "../../assets/Images/Footer/GooglePlayStore.png";
import Map from "../../assets/Images/Home/Google_map_web.png";
import downloadApp from "../../assets/Images/Home/iphone_tab.png";
import { getOffers } from "../../Apis/getDrinksOffers";
import { ArrowRight } from "../../Icons";
import DrinkCard from "../../Components/DrinkCard/DrinkCard";
import { useNavigate } from "react-router-dom";
import branshes from "../../Json/branshes.json";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  leftVarians,
  rightVarians,
  topVarians,
} from "../../assets/variants/variants";
export default function Home() {
  let [offers, setOffers] = useState([]);
  let [isLoading, setLoading] = useState(true);
  let navigate = useNavigate();
  const navigateMenu = () => {
    navigate("/drinks");
  };
  async function getData() {
    setLoading(true);
    let data = await getOffers();
    setOffers(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Home | Dunkin'</title>
        <meta name="description" content="Home Dunkin Donuts Dun " />
      </Helmet>
      <section>
        {/* header */}
        <header
          style={{
            backgroundSize: "100% 100%",
          }}
          className="slide-home h-screen bg-cover bg-center"
        >
          <motion.div
            variants={topVarians}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="contain h-full flex flex-col justify-center  items-center space-y-4"
          >
            <img className="w-96" src={reward} alt="dunkinreward" />
            <h2 className="text-3xl md:text-5xl font-black text-light">
              MAKE THE MOST
            </h2>
            <h2 className="text-3xl md:text-5xl font-black text-light">
              OF YOUR DUNKIN’ RUN!
            </h2>
            <p className="text-light w-full md:w-7/12 text-lg">
              Calling all Dunkin’ fans! Join Dunkin’ Rewards today to enjoy
              exclusive offers and start earning points toward FREE food and
              drinks. The more you visit, the more benefits you unlock!
            </p>
            <button
              onClick={navigateMenu}
              className="w-52 h-12 bg-foshia hover:bg-pink-600 rounded-full text-white p-3 uppercase font-semibold text-xl"
            >
              View Menu
            </button>
          </motion.div>
        </header>
        <div className="contain my-10">
          {/* offers */}

          {/* offers header */}
          <motion.div
            variants={topVarians}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-between items-center"
          >
            <h2 className="text-4xl text-main font-semibold">Big Offers</h2>
            <div
              onClick={navigateMenu}
              className="h-8 border border-main flex justify-center items-center space-x-1 rounded-full p-3 text-main cursor-pointer hover:bg-main hover:text-white duration-500"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="">View Menu</span>
            </div>
          </motion.div>

          {/* offers products */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-16">
            {offers.map((offer, i) => {
              return (
                <motion.div
                  variants={topVarians}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.6 }}
                  key={i}
                  className="h-full"
                >
                  <DrinkCard product={offer} />
                </motion.div>
              );
            })}
          </div>

          {/* application */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-16 items-center">
            <div className=" space-y-5">
              <motion.div
                variants={topVarians}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center my-2"
              >
                <img className="w-60 mx-auto " src={logo} alt="logo" />
                <h2 className="text-6xl font-black dark:text-white">
                  DONE EASY
                </h2>
              </motion.div>
              <motion.h5
                variants={topVarians}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl"
              >
                Find a store, place your order and get on your way with the
                Dunkin’ App
              </motion.h5>
              <motion.ul
                variants={topVarians}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="list-disc ms-4"
              >
                <li>Order ahead and pay from your phone</li>
                <li>
                  Join Dunkin’ Rewards and earn points towards free food and
                  beverages
                </li>
                <li>Earn exclusive offers and rewards</li>
              </motion.ul>
              <motion.div
                variants={topVarians}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="flex justify-center space-x-2 "
              >
                <a
                  className="cursor-pointer"
                  href="https://apps.apple.com/us/app/dunkin/id1056813463"
                  target="_blank"
                >
                  {" "}
                  <img src={appStore} alt="AppStore" />
                </a>
                <a
                  className="cursor-pointer"
                  href="https://play.google.com/store/apps/details?id=com.dunkinbrands.otgo&hl=en.html"
                  target="_blank"
                >
                  {" "}
                  <img src={googlePlay} alt="googlePlay" />
                </a>
              </motion.div>
            </div>
            <motion.div
              variants={topVarians}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <img className="rounded-lg" src={downloadApp} alt="downloadApp" />
            </motion.div>
          </div>

          {/* branshes in egypy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-20 items-center">
            {/* branshes */}
            <motion.div
              variants={leftVarians}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold dark:text-white">
                Dunkin' Donuts Branshes In Egypt
              </h2>
              <div className="my-5 space-y-2">
                {branshes.map((bransh,i) => {
                  return (
                    <div key={i}>
                      <h3>- {bransh.name}</h3>
                      <p>{bransh.address}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            {/* map image */}
            <motion.div
              variants={rightVarians}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="order-1 lg:order-2"
            >
              <img className="w-full " src={Map} alt="map" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
