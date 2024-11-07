import TextAnimate from "./ui/TextAnimate";

function About() {
  return (
    <div className="flex flex-col px-4 lg:p-9 mt-[5rem] lg:mt-[7rem] w-full">
      <div className="flex items-center lg:justify-start lg:ml-[8rem]">
        <h2 className="text-[#98D18B] text-[4rem] lg:text-[5.5rem] leading-[4rem] lg:leading-[7rem] font-medium">
          Make a <br />
          Difference
        </h2>
      </div>

      <hr className="w-[85%] lg:ml-[8rem] mt-[1.5rem] lg:mt-[3rem] border-[#4D534E]" />

      <div className="flex flex-col lg:flex-row lg:gap-8 lg:ml-[8rem] items-start justify-start px-2 lg:p-0">
        <div className="lg:w-[45%] mt-8">
          <p className="text-[#A6B5A3] text-[1.3rem] lg:text-lg">Why we exist?</p>
        </div>
        <div className="lg:w-[55%] mt-5 lg:mt-8 lg:mr-[2rem]">
          <TextAnimate />
        </div>
        
      </div>
    </div>
  );
}

export default About;
