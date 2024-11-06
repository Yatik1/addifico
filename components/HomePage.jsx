
import Navbar from "@/components/Navbar";
import About from "./About";
import Services from "./Services";
import Record from "./Record";
import Hero from "@/components/Hero";


function HomePage() {
  return (
    <>
      <div className="absolute h-screen w-full">
        <Navbar />
        <div className=" w-[97.5%] h-[80%] bg-black opacity-15 rounded-[30px] m-4" />
        <About />
        <Services />\
        <Record />
      </div>

      <div className="w-full h-full absolute z-10 flex flex-col items-center justify-center">
        <p className="text-[#637163] text-lg">Competitive Edge through Creativity & Technology</p>
        <Hero />
      </div>

    </>
  )
}

export default HomePage