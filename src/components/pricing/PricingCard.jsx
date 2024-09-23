/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
import Button from "../ui/Button";
import { IoSpeedometerOutline } from "react-icons/io5";

export default function PricingCard({
  term,
  price,
  interval,
  btn,
  data,
  bg,
  bestValue,
}) {
  return (
    <div
      style={{ background: bg || "#fff" }}
      className="border-[2px] overflow-hidden  relative rounded-[11px] flex flex-col items-center justify-center border-[#e6f2ef] w-[90%] max-w-[404px] p-[39px]"
    >
      {bestValue && <span className="pricing-plan--yearly"></span>}
      <span className="text-[16px] md:text-[18px] transition-all duration-[0.5s] easy-in-out text-center text-[#077252] font-[600] mb-[26px]">
        {term}
      </span>
      <p className="text-[#333] text-center text-[50px] lg:text-[55px] font-[600]">
        <span className="text-[24px] font-[600]">$</span> {price}
      </p>

      <p className="text-[#777] text-nowrap mb-[38px] transition-all duration-[0.5s] easy-in-out text-center font-[600] md:text-[14.5px] text-[13px]">
        {interval}
      </p>
      <div className="flex flex-col gap-[10px]">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoSpeedometerOutline
              color="#40c057"
              className="w-[24px] h-[24px]"
            />
            <p className="text-[#555] text-nowrap font-[400] transition-all duration-[0.5s] easy-in-out md:text-[16.5px] text-[15px] ">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className={`${bestValue ? "mt-[25px]" : "mt-[55px]"}`}>
        <Link
          to="HeroSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Button text={btn} bg="#087f5b" color="white" />
        </Link>
      </div>
    </div>
  );
}
