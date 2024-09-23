import { IoSpeedometerOutline } from "react-icons/io5"; // Importing IoSpeedometerOutline
import { AiOutlineEye } from "react-icons/ai"; // Importing Eye and Star icons
import EquipmentCard from "./EquipmentCard";
import { BsPersonArmsUp } from "react-icons/bs";

export default function EquipmentCard1() {
  const dataObj = [
    {
      icon: <IoSpeedometerOutline color="#40c057" />,
      title: "High tempo cardio",
    },
    {
      icon: <AiOutlineEye color="#40c057" />, // Using Eye icon
      title: "Best view",
    },
    {
      icon: <BsPersonArmsUp color="#40c057" />, // Using Star icon
      title: "All kind",
    },
  ];

  return (
    <div>
      <EquipmentCard
        img="/card-img-1.jpg"
        dataObj={dataObj}
        greenTiTle="FRESH NEW CARDIO"
        title="Cardio Part"
      />
    </div>
  );
}
