import { AvatarBlock } from "./Avatar";
import DownloadIOSButton from "./DownloadIOSButton";

const HeroContent = () => {
  return (
    <section className="mx-auto mt-16 max-w-2xl text-center md:mt-12 flex flex-col items-center gap-12 px-4 md:px-0">
      <AvatarBlock />
      <div className="">
        <h1 className="text-4xl md:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#253612]">
          The Safest Way to
          <br />
          Shop for Groceries
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-sm md:text-lg font-light leading-[1.55] text-[#747A7D]">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food
          Insights
        </p>
        <div className="mt-10">
          <DownloadIOSButton />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
