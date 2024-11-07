import GradientBg from "@/components/ui/GradientBg";
import HomePage from "@/components/HomePage";


export default function Home() {
  return (
        <div className="relative h-screen bg-[#272d2a] flex flex-col items-center justify-center overflow-x-hidden">
          <GradientBg />
          <HomePage />
        </div>
  );
}
