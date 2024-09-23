import Benefit from "./Benefit";

export default function Benefit01() {
  return (
    <div>
      <Benefit
        order={2}
        img="/meal.jpg"
        step={"01"}
        benefitTitle={"For all 7 days in week our diet plan"}
        benefitDescription={
          "We have our own brand chef, who created diet meal plan for every single human being body time and all of this including in subscription price"
        }
      />
    </div>
  );
}
