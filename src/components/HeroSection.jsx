import { Link } from "react-scroll";
import Button from "./ui/Button";
import HeroAvatars from "./ui/HeroAvatars";

export default function HeroSection() {
  return (
    <div
      id="HeroSection"
      className="bg-[#e6f2ef] px-[25px] items-center md:items-center pb-[80px] flex flex-col md:gap-[70px] md:flex-row justify-center pt-[80px]  transition-all duration-[1s] ease-in-out"
    >
      <div className="items-center flex flex-col">
        <h1 className="text-[41px] md:text-[46px] lg:text-[52px] leading-[1.05] md:w-[400px] md:text-start max-w-[670px] text-center mb-[24px] text-[#333] font-bold">
          Welcome to the one of the best Gym Freshlime
        </h1>
        <p
          className="text-[16px] md:text-[18px] lg:text-[20px] md:w-[400px] md:text-start
         max-w-[670px] text-center transition-all  text-[#555] font-[400]"
        >
          This is the cheapest, comfrtable, best price with world champion
          coatches and one of the best barthender for your protain shakes.
        </p>

        <div className="flex gap-[20px] md:w-[400px]  my-[30px]">
          <Link
            to="tryForFree"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            <Button text="Get your month pass" bg="#087f5b" color="white" />
          </Link>
          <Link
            to="Howitworks"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <Button
              text="Learn more ↓"
              bg="white"
              color="black"
              hoverBR="3px solid white"
              hoverBG="#e6f2ef"
            />
          </Link>
        </div>

        <div className="flex  md:w-[400px] mb-[60px]  justify-between w-[320px] items-center">
          <HeroAvatars />
          <p className="text-[#555] font-[600] text-[14.4px]">
            from the <span className="text-[#077252]"> whole </span> world!
          </p>
        </div>
      </div>
      <div className="w-[80%] md:w-[60%] md:max-w-[430px] rounded-[15px]  transition-all duration-[1s] ease-in-out shadow-custom-green">
        <img className="rounded-[15px]" src="/gym.jpg" alt="" />
      </div>
    </div>
  );
}
