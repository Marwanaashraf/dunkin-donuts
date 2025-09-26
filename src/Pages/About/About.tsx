import { Helmet } from "react-helmet";
import dunkin from "../../assets/Images/About/Dunkin_Brands_headquarters_sign.jpg";
import { motion } from "framer-motion";
import { leftVarians, rightVarians, topVarians } from "../../assets/variants/variants";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Dunkin'</title>
        <meta name="description" content="About Dunkin Donuts Dun " />
      </Helmet>

      <section className="py-28 contain">
        <motion.h1
          variants={topVarians}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="head text-center space-y-3"
        >
          About Us
        </motion.h1>
        {/* Details from company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 my-14 items-center gap-5">
          <motion.div
            variants={leftVarians}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-3 order-2 lg:order-1"
          >
            <h2 className="uppercase text-2xl font-bold dark:text-white">
              COMPANY SNAPSHOT
            </h2>
            <p className="text-lg">
              Dunkin’, founded in 1950, is the largest coffee and donuts brand
              in the United States, with more than 14,000 restaurants in nearly
              40 global markets. Dunkin’ is part of the Inspire Brands family of
              restaurants. For more information, visit{" "}
              <a
                className="text-light dark:text-dark font-semibold hover:text-foshia hover:underline"
                href="https://inspirebrands.com/"
                target="_blank"
              >
                InspireBrands.com.
              </a>{" "}
               
            </p>
            <h2 className="uppercase text-xl font-bold dark:text-white">
              HEADQUARTERS
            </h2>
            <div className="space-y-1 ">
              <p>Dunkin'</p>
              <p>130 Royall Street</p>
              <p>Canton, MA 02021</p>
              <p>781-737-3000</p>
            </div>
          </motion.div>
          <motion.div
            variants={rightVarians}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.1 }}
            className="order-1 lg:order-2"
          >
            <img className="w-full rounded-lg " src={dunkin} alt="Dunkin" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
