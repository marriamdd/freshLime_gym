import EquipmentCard from "./EquipmentCard";

export default function EquipmentCard2() {
  const dataObj = [
    {
      icon: "100KG plus",

      title: "High tempo cardio",
    },
    {
      icon: "champion",
      title: "Best view",
    },
    {
      icon: "star-outline",
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
