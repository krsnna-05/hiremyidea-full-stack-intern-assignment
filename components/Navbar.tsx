"use client";

import { useRef, useState } from "react";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import {
  BLOG_ITEMS,
  FOOD_ITEMS,
  NAVBAR_LABELS,
  SOLUTIONS_FEATURED_CARD,
  SolutionsItems,
} from "@/lib/contanst";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navItemClass =
  " relative text-neutral-700 px-4 py-2 rounded-lg cursor-pointer transition-colors hover:bg-black/3 hover:opacity-[0.9] font-normal";
const solutionCardClass =
  "rounded-lg cursor-pointer flex items-start gap-3 p-3 transition-colors hover:bg-[#f5faf6]";
const blogCardClass =
  "rounded-xl cursor-pointer flex items-start gap-4 p-2 transition-colors hover:bg-[#f5faf6]";
const foodItemClass =
  "flex items-center gap-3 rounded-xl p-3 text-neutral-900 transition-colors hover:bg-[#f5faf6]";

type DropdownValue = "solutions" | "blogs" | "food";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | undefined>(
    undefined,
  );

  const openDropdown = (
    dropdown: DropdownValue,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    if (!navRect) return;

    const center = rect.left - navRect.left + rect.width / 2;
    setPosition(center);
    setActiveDropdown(dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(undefined);
  };

  return (
    <div
      ref={navRef}
      className="relative w-full hidden lg:flex justify-between items-center mb-12"
      onMouseLeave={closeDropdown}
    >
      <NavigationMenu
        viewport={true}
        renderViewport={false}
        value={activeDropdown}
        onValueChange={(value) => {
          setActiveDropdown(value || undefined);
        }}
        className="w-full max-w-none items-center justify-between p-2 gap-x-5 z-20"
      >
        {/* LEFT */}
        <div className="w-52 shrink-0">
          <Logo />
        </div>

        {/* CENTER */}
        <NavigationMenuList className="flex-1 justify-center lg:gap-x-3">
          <NavigationMenuItem value="solutions">
            <NavigationMenuTrigger
              className={navItemClass}
              onMouseEnter={(e) => openDropdown("solutions", e)}
            >
              {NAVBAR_LABELS.solutions}
            </NavigationMenuTrigger>
            <Solutions />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navItemClass}
              onMouseEnter={closeDropdown}
            >
              {NAVBAR_LABELS.features}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navItemClass}
              onMouseEnter={closeDropdown}
            >
              {NAVBAR_LABELS.pricing}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem value="blogs">
            <NavigationMenuTrigger
              className={navItemClass}
              onMouseEnter={(e) => openDropdown("blogs", e)}
            >
              {NAVBAR_LABELS.blogs}
            </NavigationMenuTrigger>
            <Blogs />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navItemClass}
              onMouseEnter={closeDropdown}
            >
              {NAVBAR_LABELS.restaurants}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem value="food">
            <NavigationMenuTrigger
              className={navItemClass}
              onMouseEnter={(e) => openDropdown("food", e)}
            >
              {NAVBAR_LABELS.food}
            </NavigationMenuTrigger>
            <Food />
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* RIGHT */}
        <div className="w-52 shrink-0 flex items-center justify-end gap-4">
          <p className="cursor-pointer text-sm font-light text-neutral-700 hover:text-neutral-900">
            {NAVBAR_LABELS.signIn}
          </p>
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#2D4118] px-6 py-3 text-sm font-semibold text-[#F5F9E8] shadow-[0_8px_20px_rgba(45,65,24,0.28)] ring-1 ring-[#3C5322] transition-all duration-200 hover:bg-[#344B1C]">
            <span>{NAVBAR_LABELS.cta}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* 🔥 CUSTOM POSITIONED VIEWPORT */}
        <div className="absolute left-0 top-full w-full flex justify-center mt-2 pointer-events-none">
          <NavigationMenuViewport
            className="relative transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-auto"
            style={{
              transform: `translateX(${position}px) translateX(-50%)`,
            }}
          />
        </div>
      </NavigationMenu>
    </div>
  );
};

const Solutions = () => {
  return (
    <NavigationMenuContent className={`flex items-center`}>
      <div className="grid min-w-150 grid-cols-2 gap-4 p-1">
        {SolutionsItems.map((item) => (
          <div key={item.id} className={solutionCardClass}>
            <div className="w-12 h-12 shrink-0 flex items-center justify-center">
              <Image
                src={`/NavBar/Solutions/${item.icon}.webp`}
                alt={item.title}
                width={40}
                height={40}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-neutral-900">{item.title}</h3>
              <p className="text-xs text-neutral-600 font-light mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-54 w-48 shrink-0 overflow-hidden rounded-lg relative">
        <Image
          className="h-full w-full object-cover"
          src={SOLUTIONS_FEATURED_CARD.image}
          alt={SOLUTIONS_FEATURED_CARD.imageAlt}
          width={216}
          height={216}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end p-3">
          <div className="flex w-full items-end justify-between gap-2 text-white">
            <p className="text-sm leading-tight font-semibold">
              {SOLUTIONS_FEATURED_CARD.titleLineOne}
              <br />
              {SOLUTIONS_FEATURED_CARD.titleLineTwo}
            </p>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
};

const Blogs = () => {
  return (
    <NavigationMenuContent className={`p-2 `}>
      <div className="grid grid-cols-2 gap-8 min-w-150">
        {BLOG_ITEMS.map((blog) => (
          <article key={blog.id} className={blogCardClass}>
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              width={128}
              height={128}
              className="h-32 w-32 min-h-32 min-w-32 max-h-32 max-w-none flex-none rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 className="text-[13px] leading-snug text-neutral-900">
                {blog.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-500 font-light">
                {blog.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </NavigationMenuContent>
  );
};

const Food = () => {
  return (
    <NavigationMenuContent className={`min-w-120 p-3 `}>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {FOOD_ITEMS.map((item) => (
          <div key={item.id} className={`${foodItemClass}`}>
            <Image
              src={item.icon}
              alt={item.title}
              className="h-8 w-8 shrink-0 rounded-sm object-cover"
              loading="lazy"
              decoding="async"
              width={32}
              height={32}
            />
            <p className="text-sm font-light">{item.title}</p>
          </div>
        ))}
      </div>
    </NavigationMenuContent>
  );
};

export default Navbar;
