/* eslint-disable react/prop-types */

export default function FeedbackCard({ img, text, name }) {
  return (
    <div className="flex flex-col gap-[20px]">
      <img
        className="rounded-full w-[52px] h-[52px]"
        src={img}
        alt="customer"
      />
      <p className="text-[#555] font-[400] text-[17px] text-start">{text}</p>
      <span className="text-[#777]  font-[400] text-[17px] text-start">
        {name}
      </span>
    </div>
  );
}
