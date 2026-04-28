"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCT_ILLUSTRATION_ITEMS } from "@/lib/contanst";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";

const MobileIllustration = () => {
  const [currentIndex, setCurrentIndex] = useState(5);
  const [showProductCard, setShowProductCard] = useState(true);
  const [changeProductCard, setChangeProductCard] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const totalItems = PRODUCT_ILLUSTRATION_ITEMS.length;

    const interval = setInterval(() => {
      setShowProductCard(false);
      setChangeProductCard(false);
      if (totalItems === 0) {
        return;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setShowProductCard(true);
        setChangeProductCard(true);
      }, 1000);

      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 3000);

    return () => {
      clearInterval(interval);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const totalItems = PRODUCT_ILLUSTRATION_ITEMS.length;

  const getRelativePosition = (index: number) => {
    let diff = index - currentIndex;

    if (diff > totalItems / 2) {
      diff -= totalItems;
    }

    if (diff < -totalItems / 2) {
      diff += totalItems;
    }

    return diff;
  };

  return (
    <div className="block w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-88 lg:max-w-96 xl:max-w-104 mx-auto">
      <div className="relative aspect-[0.52] rounded-[2rem] border-10 border-[#D7D8D7] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* notch */}
        <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

        <div className="absolute inset-x-0 top-10 h-38 z-10">
          {PRODUCT_ILLUSTRATION_ITEMS.map((item, index) => {
            const relative = getRelativePosition(index);
            const absRelative = Math.abs(relative);

            return (
              <motion.div
                key={item.id}
                className="absolute left-1/2 top-0 w-24 -translate-x-1/2 sm:w-28 md:w-32 lg:w-34"
                animate={{
                  x: `${relative * 115}%`,
                  scale: relative === 0 ? 1.05 : absRelative === 1 ? 0.8 : 0.7,
                  opacity: relative === 0 ? 1 : absRelative === 1 ? 0.6 : 0.2,
                  filter:
                    relative === 0
                      ? "blur(0px)"
                      : absRelative === 1
                        ? "blur(1px)"
                        : "blur(2px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex: totalItems - absRelative,
                }}
              >
                <Image
                  src={item.product_img_src}
                  alt="Device Illustration"
                  width={200}
                  height={150}
                  className="h-auto w-full aspect-square rounded-2xl object-cover"
                />
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className=" absolute h-full w-full top-35 z-20"
          animate={{
            top: showProductCard ? "20%" : "100%",
            transition: {
              duration: 0.5,
              ease: easeInOut,
            },
          }}
        >
          <Image
            src={
              changeProductCard
                ? PRODUCT_ILLUSTRATION_ITEMS[currentIndex]
                    .product_details_img_src
                : PRODUCT_ILLUSTRATION_ITEMS[
                    currentIndex - 1 >= 0 ? currentIndex - 1 : 0
                  ].product_details_img_src
            }
            alt="Product Details"
            width={400}
            height={300}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MobileIllustration;
