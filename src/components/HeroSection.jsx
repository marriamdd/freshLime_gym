import Button from "./ui/Button";
import HeroAvatars from "./ui/HeroAvatars";

export default function HeroSection() {
  return (
    <div className="bg-[#e6f2ef] px-[25px] items-center md:items-center pb-[80px] flex flex-col md:gap-[50px] md:flex-row justify-center pt-[140px]">
      <div className="items-center flex flex-col">
        <h1 className="text-[41px] leading-[1.05] md:w-[400px] md:text-start max-w-[670px] text-center mb-[24px] text-[#333] font-bold">
          Welcome to the one of the best Gym Freshlime
        </h1>
        <p
          className="text-[16px] md:w-[400px] md:text-start
         max-w-[670px] text-center  text-[#555] font-[400]"
        >
          This is the cheapest, comfrtable, best price with world champion
          coatches and one of the best barthender for your protain shakes.
        </p>

        <div className="flex gap-[20px] md:w-[400px]  my-[30px]">
          <Button text="Get your month pass" bg="#087f5b" color="white" />
          <Button
            text="Learn more ↓"
            bg="white"
            color="black"
            hoverBR="3px solid white"
            hoverBG="#e6f2ef"
          />
        </div>

        <div className="flex  md:w-[400px] mb-[60px]  justify-between w-[320px] items-center">
          <HeroAvatars />
          <p className="text-[#555] font-[600] text-[14.4px]">
            from the <span className="text-[#077252]"> whole </span> world!
          </p>
        </div>
      </div>
      <div className="w-[80%] md:w-[60%] md:max-w-[430px] rounded-[15px] shadow-custom-green">
        <img className="rounded-[15px]" src="/gym.jpg" alt="" />
      </div>
    </div>
  );
}
