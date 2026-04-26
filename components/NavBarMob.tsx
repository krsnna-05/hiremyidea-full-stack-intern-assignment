"use client";

import { useState } from "react";
import Logo from "./Logo";
import { NAVBAR_LABELS } from "@/lib/contanst";
import { ArrowRight, Menu, X } from "lucide-react";
import Solutions from "./Navbar/Solutions";
import Blogs from "./Navbar/Blogs";
import Food from "./Navbar/Food";

const sectionTitleClass = "text-sm font-medium tracking-tight text-neutral-600";

const NavBarMob = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50 lg:hidden w-full border-b border-neutral-200 bg-[#F8F9F3]/95 backdrop-blur-md">
      <div className="relative z-50 flex items-center justify-between px-4 py-3">
        <Logo />

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-sm"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        className={`relative z-50 overflow-hidden border-t border-neutral-200 bg-white transition-all duration-300 ease-out ${
          isMenuOpen
            ? "max-h-[calc(100vh-72px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto px-4 py-4">
          <section className="space-y-3">
            <h2 className={sectionTitleClass}>{NAVBAR_LABELS.solutions}</h2>
            <Solutions mobile />
          </section>

          <section className="mt-6 space-y-2">
            <button
              type="button"
              className="w-full rounded-2xl px-2 py-3 text-left text-sm font-medium text-neutral-800 active:bg-black/5"
            >
              {NAVBAR_LABELS.features}
            </button>
            <button
              type="button"
              className="w-full rounded-2xl px-2 py-3 text-left text-sm font-medium text-neutral-800 active:bg-black/5"
            >
              {NAVBAR_LABELS.pricing}
            </button>
            <button
              type="button"
              className="w-full rounded-2xl px-2 py-3 text-left text-sm font-medium text-neutral-800 active:bg-black/5"
            >
              {NAVBAR_LABELS.restaurants}
            </button>
          </section>

          <section className="mt-6 space-y-3">
            <h2 className={sectionTitleClass}>{NAVBAR_LABELS.blogs}</h2>
            <Blogs mobile />
          </section>

          <section className="mt-6 space-y-3">
            <h2 className={sectionTitleClass}>{NAVBAR_LABELS.food}</h2>
            <Food mobile />
          </section>

          <section className="mt-6 space-y-2">
            <button
              type="button"
              className="w-full rounded-2xl px-2 py-3 text-left text-sm font-medium text-neutral-800 active:bg-black/5"
            >
              {NAVBAR_LABELS.signIn}
            </button>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2D4118] px-5 py-3 text-sm font-semibold text-[#F5F9E8] shadow-[0_8px_20px_rgba(45,65,24,0.18)]"
            >
              <span>{NAVBAR_LABELS.cta}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NavBarMob;
