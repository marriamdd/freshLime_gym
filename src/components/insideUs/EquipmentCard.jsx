/* eslint-disable react/prop-types */
export default function EquipmentCard({ dataObj, greenTiTle, title, img }) {
  console.log(dataObj, dataObj);
  return (
    <div
      style={{ backgroundColor: "rgba(254, 254, 254, 0.97)" }}
      className=" min-w-[190px] flex-1  h-[410px] transition-shadow duration-200 shadow-custom-hover"
    >
      <div>
        <img className="h-[216px] rounded-t-[10px]" src={img} alt="" />
      </div>
      <div className="bg-[#ffffffea] pt-[19px] px-[25px] pb-[25px] rounded-b-[10px] ">
        <div className="flex flex-col items-start">
          <span className="bg-[#51cf66] font-[600] text-[10px] mb-[5px] py-[3.2px] px-[6.4px] rounded-full">
            {greenTiTle}
          </span>
          <span className="text-[#333] mb-[15px] font-[600] text-[16px]">
            {title}
          </span>
        </div>

        {dataObj?.map((item, index) => (
          <div key={index} className="flex items-center mb-[10px]">
            <ion-icon name={item.icon}></ion-icon>{" "}
            <span className="text-[#555] text-[15px] font-[400]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
