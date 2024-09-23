import EquipmentCard from "./EquipmentCard";
import { GiTrophyCup } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
export default function EquipmentCard2() {
  const dataObj = [
    {
      span: "100KG",
      title: " plus",

      icon: <GiWeightLiftingUp color="#51cf66" />,
    },
    {
      title: "champion",
      icon: <GiTrophyCup color="#51cf66" />,
    },
    {
      icon: <MdOutlineRecordVoiceOver color="#51cf66" />,
      title: "support",
    },
  ];
  return (
    <div>
      <EquipmentCard
        img="/card-img-2.jpg"
        dataObj={dataObj}
        greenTiTle="HEAVY BARS"
        title="Best Bars"
      />{" "}
    </div>
  );
}
