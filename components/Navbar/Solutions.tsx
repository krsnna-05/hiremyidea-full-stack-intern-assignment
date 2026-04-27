import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { NavigationMenuContent } from "../ui/navigation-menu";
import { SOLUTIONS_FEATURED_CARD, SolutionsItems } from "@/lib/contanst";

const solutionCardClass =
  "rounded-lg cursor-pointer flex items-start gap-3 p-3 transition-colors hover:bg-[#f5faf6]";

type SolutionsProps = {
  mobile?: boolean;
};

const Solutions = ({ mobile = false }: SolutionsProps) => {
  if (mobile) {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          {SolutionsItems.map((item) => (
            <div key={item.id} className={solutionCardClass}>
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-neutral-50">
                <Image
                  src={`/NavBar/Solutions/${item.icon}.webp`}
                  alt={item.title}
                  width={36}
                  height={36}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-snug text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <div className="relative aspect-16/10 w-full overflow-hidden">
            <Image
              className="h-full w-full object-cover"
              src={SOLUTIONS_FEATURED_CARD.image}
              alt={SOLUTIONS_FEATURED_CARD.imageAlt}
              fill
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-3">
              <div className="flex w-full items-end justify-between gap-2 text-white">
                <p className="text-sm font-semibold leading-tight">
                  {SOLUTIONS_FEATURED_CARD.titleLineOne}
                  <br />
                  {SOLUTIONS_FEATURED_CARD.titleLineTwo}
                </p>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <NavigationMenuContent className="flex items-center">
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
      <div className="relative h-54 w-48 shrink-0 overflow-hidden rounded-lg">
        <Image
          className="object-cover"
          src={SOLUTIONS_FEATURED_CARD.image}
          alt={SOLUTIONS_FEATURED_CARD.imageAlt}
          fill
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

export default Solutions;
