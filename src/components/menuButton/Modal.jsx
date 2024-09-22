/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const modalVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 },
};

export const Modal = ({ toggle }) => (
  <motion.div
    className="fixed md:hidden top-0 right-0 w-full h-full bg-[rgba(255,255,255,0.97)] flex items-center justify-center z-10"
    variants={modalVariants}
    initial="closed"
    animate="open"
    exit="closed"
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    onClick={toggle}
  >
    <div className="text-black" onClick={(e) => e.stopPropagation()}>
      {" "}
      <ul>
        <li>How it works</li>
        <li>Inside us</li>
        <li>Testimonials</li>
        <li>Pricing</li>
        <li className="bg-[#087f5b] rounded-[9px] text-[white] font-[500]">
          Try for free
        </li>
      </ul>
    </div>
  </motion.div>
);
