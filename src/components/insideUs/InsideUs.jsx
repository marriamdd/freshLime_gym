import EquipmentCard1 from "./EquipmentCard1";
import EquipmentCard2 from "./EquipmentCard2";

export default function InsideUs() {
  const arr = [
    "CHEST PRESS MACHINE",
    "SEATED DIP MACHINE",
    "CHEST FLY MACHINE",
    "BENCH PRESS",
    "INCLINE BENCH PRESS",
    "ADJUSTABLE BENCH",
    "OLYMPIC WEIGHT BENCH",
    "GHD MACHINE",
  ];
  return (
    <div>
      {" "}
      <div className="w-[100%] flex flex-col items-center justify-center mb-[30px]">
        <div className="flex flex-col w-[80%]  ">
          <p
            style={{ letterSpacing: "0.75px" }}
            className="text-[#077252] self-center font-[500] text-[13px]"
          >
            INSIDE US
          </p>
          <h1
            style={{ letterSpacing: "-0.5px" }}
            className="self-center text-center text-[26px] md:text-nowrap lg:text-[48px] text-[#333] mb-[70px] font-[700]"
          >
            At our gym u will find everything u need
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-[50px] items-center justify-center  w-[80%]  ">
          <div className=" EquipmentDiv  gap-[20px]  ">
            <EquipmentCard1 />
            <EquipmentCard2 />
          </div>

          <div className=" md:w-[325px] flex-1 flex flex-col max-w-[470px] h-[410px] transition-shadow duration-200 ">
            <span
              style={{ letterSpacing: "-0.5px" }}
              className="text-[#333] font-[700] text-[19px] mb-[20px]"
            >
              Our equipment:
            </span>
            {arr.map((item) => (
              <span
                className="text-[#555] text-nowrap flex-1 text-[14px] font-[400]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
