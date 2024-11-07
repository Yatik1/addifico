
import Navbar from "@/components/Navbar";
import About from "./About";
import Services from "./Services";
import Record from "./Record";
import Hero from "@/components/Hero";
import Resources from "./Resources";
import Footer from "./ui/Footer";


function HomePage() {
  return (
    <>
      <div className="absolute h-screen w-full">
        <Navbar />
        <div className="w-[94%] h-[25rem] md:w-[97.4%] lg:w-[97%] lg:h-[80%] bg-black opacity-15 rounded-[30px] mx-[0.87rem] my-4" />
        <About />
        <Services />
        <Record />
        <Resources />
        <Footer />
      </div>

      <div className="absolute w-full flex flex-col items-center justify-center gap-[1rem] lg:gap-0 top-[5.25rem] lg:top-1/4 py-[4rem] px-[2.7rem] lg:p-0">
          <p className="text-[#637163] text-[1.5rem] font-medium lg:text-lg">Competitive Edge through Creativity & Technology</p>
          <Hero />
      </div>

    </>
  )
}

export default HomePage

