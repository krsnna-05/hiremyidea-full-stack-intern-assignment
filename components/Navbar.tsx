"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import { NAVBAR_LABELS } from "@/lib/contanst";
import Solutions from "./Navbar/Solutions";
import Blogs from "./Navbar/Blogs";
import Food from "./Navbar/Food";

const navItemClass =
  "relative whitespace-nowrap text-[13px] xl:text-sm text-neutral-700 px-2 lg:px-3 xl:px-4 py-2 rounded-lg cursor-pointer transition-colors hover:bg-black/3 hover:opacity-[0.9] font-normal";
type DropdownValue = "solutions" | "blogs" | "food";
const VIEWPORT_EDGE_PADDING = 12;
const VIEWPORT_WIDTHS: Record<DropdownValue, number> = {
  solutions: 960,
  blogs: 760,
  food: 540,
};

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | undefined>(
    undefined,
  );

  const clampViewportPosition = useCallback((nextCenter: number) => {
    const navElement = navRef.current;
    if (!navElement) {
      return nextCenter;
    }

    const viewportElement = navElement.querySelector(
      '[data-slot="navigation-menu-viewport"]',
    ) as HTMLElement | null;

    if (!viewportElement) {
      return nextCenter;
    }

    const navWidth = navElement.getBoundingClientRect().width;
    const viewportWidth = viewportElement.getBoundingClientRect().width;
    const halfViewport = viewportWidth / 2;
    const minCenter = halfViewport + VIEWPORT_EDGE_PADDING;
    const maxCenter = navWidth - halfViewport - VIEWPORT_EDGE_PADDING;

    if (minCenter > maxCenter) {
      return navWidth / 2;
    }

    return Math.min(Math.max(nextCenter, minCenter), maxCenter);
  }, []);

  const updatePositionFromActiveTrigger = useCallback(() => {
    const navElement = navRef.current;
    if (!navElement || !activeDropdown) {
      return;
    }

    const activeTrigger = navElement.querySelector(
      '[data-slot="navigation-menu-trigger"][data-state="open"]',
    ) as HTMLElement | null;

    if (!activeTrigger) {
      return;
    }

    const triggerRect = activeTrigger.getBoundingClientRect();
    const navRect = navElement.getBoundingClientRect();
    const targetCenter =
      triggerRect.left - navRect.left + triggerRect.width / 2;
    setPosition(clampViewportPosition(targetCenter));
  }, [activeDropdown, clampViewportPosition]);

  useLayoutEffect(() => {
    const navElement = navRef.current;
    if (!navElement) {
      return;
    }

    const syncViewportWidth = () => {
      const availableWidth = navElement.getBoundingClientRect().width;
      const activeKey = activeDropdown as DropdownValue | undefined;
      const desiredWidth = activeKey ? VIEWPORT_WIDTHS[activeKey] : 0;

      setViewportWidth(
        desiredWidth
          ? Math.min(availableWidth - VIEWPORT_EDGE_PADDING * 2, desiredWidth)
          : 0,
      );
    };

    syncViewportWidth();

    const resizeObserver = new ResizeObserver(syncViewportWidth);
    resizeObserver.observe(navElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeDropdown]);

  const openDropdown = (
    dropdown: DropdownValue,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    if (!navRect) return;

    const center = rect.left - navRect.left + rect.width / 2;
    setPosition(clampViewportPosition(center));
    setActiveDropdown(dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(undefined);
  };

  useLayoutEffect(() => {
    if (!activeDropdown) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      updatePositionFromActiveTrigger();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [activeDropdown, updatePositionFromActiveTrigger]);

  useEffect(() => {
    if (!activeDropdown) {
      return;
    }

    const handleResize = () => {
      updatePositionFromActiveTrigger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeDropdown, updatePositionFromActiveTrigger]);

  return (
    <div
      ref={navRef}
      className="relative flex w-full items-center justify-between mb-12 max-[1024px]:hidden"
      onMouseLeave={closeDropdown}
    >
      <NavigationMenu
        viewport={true}
        renderViewport={false}
        value={activeDropdown}
        onValueChange={(value) => {
          setActiveDropdown(value || undefined);
        }}
        className="z-20 grid w-full max-w-none min-w-0 grid-cols-[1fr_auto_1fr] items-center p-2 gap-x-3 xl:gap-x-5"
      >
        {/* LEFT */}
        <div className="min-w-0 flex items-center justify-self-start">
          <Logo />
        </div>

        {/* CENTER */}
        <NavigationMenuList className="flex-none justify-self-center gap-x-1 lg:gap-x-2 xl:gap-x-3">
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
        <div className="shrink-0 flex items-center justify-end justify-self-end gap-2 lg:gap-3 xl:gap-4">
          <p className=" cursor-pointer text-sm font-light text-neutral-700 hover:text-neutral-900">
            {NAVBAR_LABELS.signIn}
          </p>
          <button className="group inline-flex items-center gap-2 rounded-full bg-[#2D4118] px-4 lg:px-5 xl:px-6 py-2.5 xl:py-3 text-xs lg:text-sm font-semibold text-[#F5F9E8] shadow-[0_8px_20px_rgba(45,65,24,0.28)] ring-1 ring-[#3C5322] transition-all duration-200 hover:bg-[#344B1C]">
            <span>{NAVBAR_LABELS.cta}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* 🔥 CUSTOM POSITIONED VIEWPORT */}
        <div className="absolute left-0 top-full w-full flex justify-center mt-2 pointer-events-none">
          <NavigationMenuViewport
            className="relative pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] max-w-[calc(100vw-24px)]"
            style={{
              left: `${position}px`,
              width: viewportWidth ? `${viewportWidth}px` : undefined,
              transform: `translateX(-50%)`,
            }}
          />
        </div>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
