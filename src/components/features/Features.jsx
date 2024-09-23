import FeatureCard from "./FeatureCard";
import { IoPauseOutline } from "react-icons/io5";
import { IoIosPulse } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
export default function Features() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center pb-[70px]">
      <div className="lg:w-[80%] px-[40px] lg:px-0 w-full ">
        <div className="FeatureCardContainer">
          <FeatureCard
            img={
              <IoIosPulse
                color="#087f5b"
                className="w-[24px] transition-all duration-[0.5s] ease-in-out h-[24px] lg:w-[28pxx] lg:h-[28px] xl:w-[32px] xl:h-[32px] "
              />
            }
            text="Our gym is open 365 days in year, even holidays you can come!"
            title="Training every day!"
          />
          <FeatureCard
            img={
              <GiKnifeFork
                color="#087f5b"
                className="w-[24px] transition-all duration-[0.5s] ease-in-out h-[24px] lg:w-[28pxx] lg:h-[28px] xl:w-[32px] xl:h-[32px] "
              />
            }
            text="Our proteins are best in the world and organic good for health"
            title="Natural and organic"
          />
          <FeatureCard
            text="We have motivation speakers to motivate you every day"
            title="motivation"
            img={
              <IoRocketOutline
                color="#087f5b"
                className="w-[24px] transition-all duration-[0.5s] ease-in-out h-[24px] lg:w-[28pxx] lg:h-[28px] xl:w-[32px] xl:h-[32px] "
              />
            }
          />
          <FeatureCard
            img={
              <IoPauseOutline
                color="#087f5b"
                className="w-[24px] transition-all duration-[0.5s] ease-in-out h-[24px] lg:w-[28pxx] lg:h-[28px] xl:w-[32px] xl:h-[32px] "
              />
            }
            title="pause anytime"
            text="You got full year and have vacation? pause it, it is possible with us"
          />
        </div>
      </div>
    </div>
  );
}
