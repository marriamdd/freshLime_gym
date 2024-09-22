import { useCycle } from "framer-motion";
import { MenuToggle } from "./menuButton/Toggle";
import { Modal } from "./menuButton/Modal";

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="fixed w-full">
      <div className="relative px-[25px] flex justify-between items-center p-4 bg-[white]">
        <div>
          <img className="w-[90px] h-[30px]" src="/logo (1).png" alt="" />
        </div>
        <div className="relative z-30 md:hidden">
          <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-[20px] ">
            <li>How it works</li>
            <li>Inside us</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li className="bg-[#087f5b] rounded-[9px] text-[white] font-[500]">
              Try for free
            </li>
          </ul>
        </div>
        {isOpen && <Modal toggle={toggleOpen} />}
      </div>
    </div>
  );
}
