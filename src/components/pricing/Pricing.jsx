import SectionIntro from "../SectionIntro";
import PricingCard from "./PricingCard";

export default function Pricing() {
  const dataForYear = [
    "Free sauna",
    "Free chocolate bars",
    "Champ with you",
    "Plan of the year",
  ];
  const dataForMonth = [
    "High quality stuff",
    "Open 24/7",
    "Every 10th protein free",
  ];
  return (
    <div
      id="Pricing"
      className="w-[100%] flex flex-col items-center justify-center pt-[76px]"
    >
      <div className="w-[80%]  ">
        <SectionIntro title="PRICING" description="Get your dream body" />
        <div className="flex pricesCardsContainer flex-col gap-[70px] ">
          <PricingCard
            data={dataForMonth}
            term="MONTHLY"
            price="45"
            interval="Pey every single month"
            btn="Get your month pass"
          />
          <PricingCard
            data={dataForYear}
            term="YEARLY"
            price="600"
            interval="Per month it`s just 30$"
            btn="Get your yearly pass"
            bg="#e6f2ef"
            bestValue={true}
          />
        </div>

        <p className="text-[12px] lg:text-[16px] mt-[40px] mb-[60px] text-center text-[#555]">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>
    </div>
  );
}
