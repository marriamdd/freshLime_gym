import EquipmentCard from "./EquipmentCard";

export default function EquipmentCard1() {
  const dataObj = [
    {
      icon: "speedometer-outline",
      title: "High tempo cardio",
    },
    {
      icon: "eye-outline",
      title: "Best view",
    },
    {
      icon: "star-outline",
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
      />{" "}
    </div>
  );
}
