import React from "react";
import { Spiner } from "../../Icons";
import logo from "../../assets/Images/logo/dd_nav_logo.svg";
import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center  bg-slate-100 dark:bg-slate-800">
      {/* <Spiner className='w-16 h-16'/> */}
      <motion.img
        initial={{ opacity: 0.5, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        className="w-60"
        src={logo}
        alt="logo"
      />
    </div>
  );
}
