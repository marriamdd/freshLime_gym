import FeedbackCard from "../FeedbackCard";
import GymZoomingImage from "../GymZoomingImage";
import SectionIntro from "../SectionIntro";

export default function HowWeWork() {
  return (
    <div
      id="HowWeWork"
      className="w-[100%] howWeWorkContainer lg:pl-[80px] px-[30px] py-[80px] bg-[#e6f2ef]  gap-[80px] "
    >
      <div>
        <SectionIntro
          title=" HOW WE WORK"
          description=" Our benefits and skills that make u happy"
        />
        <div className="feedBacksGrid  gap-[40px] ">
          <FeedbackCard
            img="/customer-1.jpg"
            text=" Hi there lola here, I never liked gym before. I am lazy hahahaha, but in
        Fresh Lime you just can't be lazy, wanna work hours and never stop!"
            name="— Lola Lee"
          />
          <FeedbackCard
            img="/customer-2.jpg"
            text="I'm from Maldives and I never seen Gym like Fresh Lime, love everything. They have best machines for chest and my wife loves it."
            name="— Marcus Stanford"
          />
          <FeedbackCard
            img="/customer-3.jpg"
            text="In Fresh Lime I'm feeling like home, best stuff, amazing personal stuff, one of the best protain bars inside. I love everything!"
            name="— Marta Hansen"
          />
          <FeedbackCard
            img="/customer-4.jpg"
            text="When I started I was skinny, Now I'm like mountain. Every single day coming to fresh line gave me energy, passion, happiness, joy and love!"
            name="— Steve Maccarthury"
          />
        </div>
      </div>
      <div
        className="gymGridContainer 
       
       "
      >
        <GymZoomingImage img="/gym-1 (1).jpg" />
        <GymZoomingImage img="/gym-2.jpg" />
        <GymZoomingImage img="/gym-3.jpg" />
        <GymZoomingImage img="/gym-4.jpg" />
        <GymZoomingImage img="/gym-6.jpg" />
        <GymZoomingImage img="/gym-1 (1).jpg" />
      </div>
    </div>
  );
}
