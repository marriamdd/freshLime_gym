export default function HeroAvatars() {
  return (
    <div className="flex relative">
      <img
        className="rounded-full w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-10"
        src="/customer-1.jpg"
        alt=""
      />
      <img
        className="absolute left-[22px] rounded-full  w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-20"
        src="/customer-2.jpg"
        alt=""
      />
      <img
        className="absolute left-[45px] rounded-full  w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-30"
        src="/customer-3.jpg"
        alt=""
      />
      <img
        className="absolute left-[68px] rounded-full  w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-40"
        src="/customer-4.jpg"
        alt=""
      />
      <img
        className="absolute left-[90px] rounded-full  w-[35px] h-[35px] border-[2px] border-[#e6f2ef] z-50"
        src="/customer-5.jpg"
        alt=""
      />
      <img
        style={{ zIndex: 60 }}
        className="absolute left-[113px] rounded-full  w-[35px] h-[35px] border-[2px] border-[#e6f2ef] "
        src="/customer-6.jpg"
        alt=""
      />
    </div>
  );
}
