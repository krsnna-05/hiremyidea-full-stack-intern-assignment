import Navbar from "./Navbar";
import HeroContent from "./Hero/HeroContent";
import NavBarMob from "./NavBarMob";

const Hero = () => {
  return (
    <div className="mt-2 mb-10 md:mb-24 2xl:max-w-7xl px-4 md:px-8 mx-auto">
      <div className="border relative  border-neutral-200 rounded-2xl bg-[linear-gradient(180deg,#F5FAF6_0%,#F5FAF6_100%)] p-2 w-full h-screen">
        <Navbar />
        <NavBarMob />
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
