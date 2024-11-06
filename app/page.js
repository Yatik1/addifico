import GradientBg from "@/components/ui/GradientBg";
import HomePage from "@/components/HomePage";


export default function Home() {
  return (
        <div className="relative w-[100%] h-screen bg-[#272d2a] overflow-x-hidden">
          <GradientBg />
          <HomePage />
        </div>
  );
}
