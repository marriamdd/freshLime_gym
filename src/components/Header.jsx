import { useCycle } from "framer-motion";
import { MenuToggle } from "./menuButton/Toggle";
import { Modal } from "./menuButton/Modal";

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="fixed z-50 w-full">
      <div
        style={{ background: "rgba(254, 254, 254, 0.97)" }}
        className="relative px-[25px] flex justify-between items-center p-4 "
      >
        <div>
          <img className="w-[90px] h-[30px]" src="/logo (1).png" alt="" />
        </div>
        <div className="relative z-30 md:hidden">
          <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
        </div>
        <div className="hidden md:flex ">
          <ul className="flex items-center gap-[20px] text-[#333] ">
            <li className=" text-[18px]  font-[700]">How it works</li>
            <li className=" text-[18px] font-[700]">Inside us</li>
            <li className=" text-[18px] font-[700]">Testimonials</li>
            <li className=" text-[18px] font-[700]">Pricing</li>
            <li className="bg-[#087f5b] px-[24px] py-[12px] rounded-[9px] text-[white] font-[700]">
              Try for free
            </li>
          </ul>
        </div>
        {isOpen && <Modal toggle={toggleOpen} />}
      </div>
    </div>
  );
}
