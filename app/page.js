
import GradientBg from "@/components/GradientBg";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative w-[100%] h-screen bg-[#272d2a] overflow-x-hidden">

      <GradientBg />

      <div className="absolute h-full w-full">
        <div className=" w-[97.5%] h-[95%] bg-black opacity-15 rounded-[30px] m-4" />
      </div>

      <div className="w-full h-full absolute z-10 flex flex-col items-center justify-center">
        <p className="text-[#637163] text-lg">Competitive Edge through Creativity & Technology</p>
        <HeroSection />
      </div>

    </div>
  );
}
