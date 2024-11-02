
export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#272d2a]">
      <div className="absolute top-14 left-[-22rem]">
        <img 
          src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"   
          className="h-[60rem] rotate-[213deg]"
        />
      </div>
      <div className="absolute top-17 right-[-18rem]">
        <img 
          src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"   
          className=" w-[50rem] h-[65rem] rotate-[0deg]"
        />
      </div>

      <div className="h-full w-full bg-transparent absolute z-999">
        <div className="h-full w-full flex items-center justify-center p-4">
          <div className="w-full h-[95%] bg-black opacity-15 rounded-[30px]">
            
          </div>
        </div>
      </div>
    </div>
  );
}
