"use client";

import React from "react";
import Solutions from "./Solutions";
import Blogs from "./Blogs";
import Food from "./Food";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  x: number;
  showDropDown: boolean;
  dropDownRef: React.RefObject<HTMLDivElement | null>;
  activeMenu: "solutions" | "blogs" | "food" | null;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropDown = ({
  x,
  showDropDown,
  dropDownRef,
  activeMenu,
  setShowDropDown,
}: Props) => {
  return (
    <AnimatePresence>
      {showDropDown && (
        <motion.div
          className=" absolute left-0 top-14 bg-background max-w-3xl px-2 border border-neutral-200 rounded-xl shadow-lg z-50"
          animate={{ x, opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -10 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          exit={{ opacity: 0, y: -10 }}
          ref={dropDownRef}
          layout
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          {activeMenu === "solutions" && <Solutions />}
          {activeMenu === "blogs" && <Blogs />}
          {activeMenu === "food" && <Food />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropDown;
