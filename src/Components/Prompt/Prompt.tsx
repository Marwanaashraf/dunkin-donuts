import React, { useEffect, useRef } from "react";
import { CloseSlider } from "../../Icons";
type TPromptProps = {
  setPrompt: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Prompt({ setPrompt }: TPromptProps) {
  let promptLayerRef = useRef<HTMLDivElement>(null);
  let promptRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    promptLayerRef?.current?.addEventListener("click", (e) => {
      if (!promptRef.current?.contains(e.target as Node)) setPrompt(false);
    });
  }, []);
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") setPrompt(false);
    });
  }, []);
  return (
    <div
      ref={promptLayerRef}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/60 flex justify-center items-center"
    >
      <div
        ref={promptRef}
        className="w-[90%] sm:w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] h-60 rounded-lg bg-white dark:bg-slate-800 text-center space-y-4 relative"
      >
        <h2 className="text-3xl font-semibold mt-12 text-light dark:text-white">
          YOU’RE GOING PLACES!
        </h2>
        <p className="text-lg">
          Right now, you’re headed away from DunkinDonuts.com
        </p>
        <div className="flex justify-center space-x-2 ">
          <button
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.dunkinbrands.otgo&hl=en.html",
                "_self"
              );
              setPrompt(false);
            }}
            className="w-40 h-10 text-white bg-foshia hover:bg-foshia/90 rounded-full font-medium uppercase"
          >
            Accept
          </button>
          <button
            onClick={() => {
              setPrompt(false);
            }}
            className="w-40 h-10 text-white bg-gray-700 hover:bg-slate-700/90 dark:bg-gray-600 dark:hover:bg-slate-600/90 rounded-full font-medium uppercase"
          >
            Cancel
          </button>
        </div>
        <div
          onClick={() => {
            setPrompt(false);
          }}
          className="text-gray-400 absolute top-0 right-2 cursor-pointer hover:text-foshia"
        >
          <CloseSlider className="w-6 h-6 " />
        </div>
      </div>
    </div>
  );
}
