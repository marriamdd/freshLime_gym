export default function HeroAvatars() {
  return (
    <div className="flex relative">
      <img
        className="rounded-full w-[35px] transition-all duration-[1s] ease-in-out md:w-[48px] md:h-[48px] h-[35px] border-[2px] border-[#e6f2ef] z-10"
        src="/customer-1.jpg"
        alt=""
      />
      <img
        className="absolute left-[22px] md:left-[33px] transition-all duration-[1s] ease-in-out  rounded-full md:w-[48px] md:h-[48px]  w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-20"
        src="/customer-2.jpg"
        alt=""
      />
      <img
        className="absolute left-[45px] md:left-[33px] transition-all duration-[1s] ease-in-out   rounded-full md:w-[48px] md:h-[48px] w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-30"
        src="/customer-3.jpg"
        alt=""
      />
      <img
        className="absolute left-[68px] md:left-[67px] transition-all duration-[1s] ease-in-out  rounded-full md:w-[48px] md:h-[48px] w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-40"
        src="/customer-4.jpg"
        alt=""
      />
      <img
        className="absolute left-[90px] md:left-[98px] transition-all duration-[1s] ease-in-out  rounded-full md:w-[48px] md:h-[48px]  w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-50"
        src="/customer-5.jpg"
        alt=""
      />
      <img
        style={{ zIndex: 60 }}
        className="absolute left-[113px]  md:left-[133px] transition-all duration-[1s] ease-in-out  rounded-full md:w-[48px] md:h-[48px] w-[35px] h-[35px] border-[2px] border-[#e6f2ef] "
        src="/customer-6.jpg"
        alt=""
      />
    </div>
  );
}
