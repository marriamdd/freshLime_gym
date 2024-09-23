import Benefit01 from "./benefits/Benefit01";
import Benefit02 from "./benefits/Benefit02";
import Benefit03 from "./benefits/Benefit03";

export default function HowItWorks() {
  return (
    <div
      id="Howitworks"
      name="Howitworks"
      className="w-[100%] flex flex-col items-center justify-center mb-[30px]"
    >
      <div className="flex flex-col w-[80%]  ">
        <p
          style={{ letterSpacing: "0.75px" }}
          className="text-[#077252] self-start font-[500] text-[13px]"
        >
          HOW WE WORK
        </p>
        <h1
          style={{ letterSpacing: "-0.5px" }}
          className="text-start text-[26px] md:text-nowrap lg:text-[48px] text-[#333] mb-[70px] font-[700]"
        >
          Our benefits and skills that make u happy
        </h1>
      </div>
      <div className="flex flex-col  w-[100%]  ">
        <Benefit01 />
        <Benefit02 />
        <Benefit03 />
      </div>
    </div>
  );
}
