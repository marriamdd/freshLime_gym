export default function AllFeatured() {
  return (
    <div className="flex flex-col items-center my-[40px] gap-[30px]">
      <p className="text-[#555] text-[13px] font-[600]">As featured in hello</p>
      <div className="flex justify-between w-[80%]">
        <img
          className=" w-[68px] md:w-[134px] md:h-[19px] lg:w-[201px] lg:h-[29px] filter brightness-0 opacity-50 h-[10px] transition-all duration-[1s] ease-in-out"
          src="/techcrunch.png"
          alt=""
        />
        <img
          className=" w-[31px] h-[10px]  md:w-[60px] md:h-[19px]  lg:w-[90px] lg:h-[29px]  filter brightness-0 opacity-50  transition-all duration-[1s] ease-in-out"
          src="/business-insider.png"
          alt=""
        />
        <img
          className=" h-[10px] w-[73px] md:w-[73px] md:h-[19px] lg:w-[219px] lg:h-[29px]  filter brightness-0 opacity-50 transition-all duration-[1s] ease-in-out"
          src="/the-new-york-times.png"
          alt=""
        />
        <img
          className="  h-[10px] w-[36px] md:w-[102px] md:h-[19px] lg:w-[110px] lg:h-[28px] filter brightness-0 opacity-50  transition-all duration-[1s] ease-in-out"
          src="/forbes.png"
          alt=""
        />
        <img
          className=" h-[10px] w-[52px] md:w-[110px] md:h-[30px] lg:w-[154px] lg:h-[29px] filter brightness-0 opacity-50  transition-all duration-[1s] ease-in-out"
          src="/usa-today.png"
          alt=""
        />
      </div>
    </div>
  );
}
