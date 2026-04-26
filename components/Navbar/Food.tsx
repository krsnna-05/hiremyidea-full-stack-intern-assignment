import Image from "next/image";
import { NavigationMenuContent } from "../ui/navigation-menu";
import { FOOD_ITEMS } from "@/lib/contanst";

const foodItemClass =
  "flex items-center gap-3 rounded-xl p-3 text-neutral-900 transition-colors hover:bg-[#f5faf6]";

type FoodProps = {
  mobile?: boolean;
};

const Food = ({ mobile = false }: FoodProps) => {
  if (mobile) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {FOOD_ITEMS.map((item) => (
          <div key={item.id} className={foodItemClass}>
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
    );
  }

  return (
    <NavigationMenuContent className="min-w-120 p-3">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {FOOD_ITEMS.map((item) => (
          <div key={item.id} className={foodItemClass}>
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

export default Food;
