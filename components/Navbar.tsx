import React from "react";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { SolutionsItems } from "@/lib/contanst";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <NavigationMenu className=" w-full flex items-center justify-between">
      <Logo />
      <NavigationMenuList className=" mx-auto">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className=" text-neutral-700 hover:opacity-[0.9] px-4 py-2 hover:bg-black/3 rounded-lg">
            Solutions
          </NavigationMenuTrigger>
          <Solutions />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Solutions = () => {
  return (
    <NavigationMenuContent className="flex items-center overflow-hidden data-open:animate-in fade-in-50 slide-in-from-top-10">
      <div className="grid min-w-150 grid-cols-2 gap-4 p-1">
        {SolutionsItems.map((item) => (
          <div
            key={item.id}
            className="rounded-lg hover:bg-[#f5faf6] cursor-pointer flex items-start gap-3 p-3 transition-colors"
          >
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
          src="/NavBar/Solutions/Scenary.webp"
          alt="Solutions Illustration"
          width={216}
          height={216}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end p-3">
          <div className="flex w-full items-end justify-between gap-2 text-white">
            <p className="text-sm leading-tight font-semibold">
              Modern-Day Miracle in
              <br />
              Salinas, California
            </p>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
};

export default Navbar;
