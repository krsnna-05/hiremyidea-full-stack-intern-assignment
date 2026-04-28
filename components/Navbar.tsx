"use client";

import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import { NAVBAR_LABELS } from "@/lib/contanst";
import DropDown from "./Navbar/DropDown";
import { useRef, useState } from "react";

const navItemClass =
  "relative whitespace-nowrap text-[13px] xl:text-sm text-neutral-700 px-2 lg:px-3 xl:px-4 py-2 rounded-lg cursor-pointer transition-colors hover:bg-black/3 hover:opacity-[0.9] font-normal";

const Navbar = () => {
  const [dropX, setDropX] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<
    "solutions" | "blogs" | "food" | null
  >(null);
  const handleMouseOver =
    (menu: "solutions" | "blogs" | "food") =>
    (e: React.MouseEvent<HTMLElement>) => {
      setActiveMenu(menu);
      setShowDropDown(true);
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const width = dropDownRef.current?.offsetWidth ?? 300;
      const containerRect = containerRef.current?.getBoundingClientRect() ?? {
        left: 0,
        width: window.innerWidth,
      };
      const containerLeft = containerRect.left;
      const containerWidth = containerRect.width;
      // desired x relative to container
      let desired = centerX - containerLeft - width / 2;
      const padding = 12; // keep some space from edges
      const min = padding;
      const max = Math.max(containerWidth - width - padding, padding);
      desired = Math.max(min, Math.min(desired, max));
      setDropX(desired);
    };

  const handleMouseLeave = () => {
    setShowDropDown(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-between mb-12 max-[1024px]:hidden"
    >
      <NavigationMenu
        className="z-20 grid w-full max-w-none min-w-0 grid-cols-[1fr_auto_1fr] items-center p-2 gap-x-3 xl:gap-x-5"
        viewport={true}
      >
        {/* LEFT */}
        <div className="min-w-0 flex items-center justify-self-start">
          <Logo />
        </div>

        {/* CENTER */}
        <NavigationMenuList
          className="flex-none justify-self-center gap-x-1 lg:gap-x-2 xl:gap-x-3"
          onMouseLeave={handleMouseLeave}
        >
          <NavigationMenuItem value="solutions">
            <NavigationMenuTrigger
              className={navItemClass}
              onMouseOver={handleMouseOver("solutions")}
              value="solutions"
            >
              {NAVBAR_LABELS.solutions}
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navItemClass}>
              {NAVBAR_LABELS.features}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navItemClass}>
              {NAVBAR_LABELS.pricing}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={navItemClass}
              onMouseOver={handleMouseOver("blogs")}
              value="blogs"
            >
              {NAVBAR_LABELS.blogs}
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navItemClass}>
              {NAVBAR_LABELS.restaurants}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={navItemClass}
              onMouseOver={handleMouseOver("food")}
              value="food"
            >
              {NAVBAR_LABELS.food}
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>

        <DropDown
          x={dropX}
          showDropDown={showDropDown}
          dropDownRef={dropDownRef}
          activeMenu={activeMenu}
          setShowDropDown={setShowDropDown}
        />

        {/* RIGHT */}
        <div className="shrink-0 flex items-center justify-end justify-self-end gap-2 lg:gap-3 xl:gap-4">
          <p className=" cursor-pointer text-sm font-light text-neutral-700 hover:text-neutral-900">
            {NAVBAR_LABELS.signIn}
          </p>
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#2D4118] px-4 lg:px-5 xl:px-6 py-2.5 xl:py-3 text-xs lg:text-sm font-semibold text-[#F5F9E8] shadow-[0_8px_20px_rgba(45,65,24,0.28)] ring-1 ring-[#3C5322] transition-all duration-200 hover:bg-[#344B1C]">
            <span>{NAVBAR_LABELS.cta}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5" />
          </button>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
