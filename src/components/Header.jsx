import { useCycle } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MenuToggle } from "./menuButton/Toggle";
import { Modal } from "./menuButton/Modal";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const heroSection = document.getElementById("HeroSection");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`w-full transition-all duration-[1s] easy-in-out ${
        isSticky ? "fixed top-0 z-50 bg-[rgba(255,255,255,0.97)] shadow-lg" : ""
      }`}
    >
      <div
        className={`relative px-[25px] ${
          isSticky ? "shadow-[0_1.2rem_3.6rem_rgba(0,0,0,0.1)]" : "bg-[#e6f2ef]"
        } flex justify-between items-center p-4`}
      >
        <div>
          <img className="w-[90px] h-[30px]" src="/logo (1).png" alt="" />
        </div>
        <div className="relative z-30 md:hidden">
          <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
        </div>
        <div className="hidden md:flex ">
          <ul className="flex items-center gap-[20px] text-[#333]">
            <Link
              to="Howitworks"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className="text-[18px] cursor-pointer font-[700]"
            >
              How it works
            </Link>
            <li className="text-[18px] font-[700]">Inside us</li>
            <li className="text-[18px] font-[700]">Testimonials</li>
            <li className="text-[18px] font-[700]">Pricing</li>
            <li className="bg-[#087f5b] px-[24px] py-[12px] rounded-[9px] text-white font-[700]">
              Try for free
            </li>
          </ul>
        </div>
        {isOpen && <Modal toggle={toggleOpen} />}
      </div>
    </div>
  );
}
