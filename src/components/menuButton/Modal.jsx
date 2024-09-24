/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MenuToggle } from "./Toggle";

const modalVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 },
};

export const Modal = ({ toggle, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.div
      className="fixed md:hidden top-0 right-0 w-full h-full bg-[rgba(255,255,255,0.97)] flex  items-center justify-center z-[50]"
      variants={modalVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={toggle}
    >
      <div className="absolute top-[15px] right-[24px]">
        <MenuToggle isOpen={isOpen} />
      </div>

      <div className="text-black" onClick={(e) => e.stopPropagation()}>
        <ul className="text-[24px] flex flex-col font-[700] gap-[20px] text-center">
          <Link
            to="Howitworks"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={toggle}
            className="cursor-pointer"
          >
            How it works
          </Link>
          <Link
            to="InsideUS"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={toggle}
            className="cursor-pointer"
          >
            Inside us
          </Link>
          <Link
            to="HowWeWork"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={toggle}
            className="cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            onClick={toggle}
            to="Pricing"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className="cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="tryForFree"
            spy={true}
            onClick={toggle}
            smooth={true}
            offset={-100}
            duration={500}
            className="bg-[#087f5b] cursor-pointer py-[9px] px-[19px] rounded-[9px] text-white font-[500]"
          >
            Try for free
          </Link>
        </ul>
      </div>
    </motion.div>
  );
};
