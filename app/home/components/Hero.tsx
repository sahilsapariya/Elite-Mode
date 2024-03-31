function Hero() {
  return (
    <section className="relative w-full flex justify-center items-center h-[580px] bg-gray-50 overflow-hidden">
      <div className="relative max-w-[1200px] w-full h-full flex items-end bg-black">
        <div className="mb-10 ml-10">
          <div className="relative flex flex-col gap-1 z-40 w-fit">
            <h3 className="font-[poly] sm:text-[rgb(57,61,70)] text-[24px] mb-[-10px] text-white">
              Summar Sale
            </h3>
            <span className="text-[64px] font-bold italic sm:text-[#393D46] font-[Poppins] mb-2 text-white">
              50%{" "}
              <span className="text-white drop-shadow-2 sm:drop-shadow-none">
                OFF
              </span>
            </span>
            <button className="px-10 py-3 font-medium italic bg-[#000] sm:bg-[#393D46] text-[20px] text-white font-poppins mt-4">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="absolute hidden sm:block top-0 left-0 right-0 bottom-0 m-auto w-full h-full bg-hero-background"></div>
        <div className="absolute sm:hidden top-0 left-0 right-0 bottom-0 m-auto w-full h-full bg-hero-mobile-background"></div>
      </div>
    </section>
  );
};

export default Hero;
