/* eslint-disable react/prop-types */
export default function Benefit({
  img,
  step,
  benefitTitle,
  benefitDescription,
  order,
}) {
  return (
    <div className="md:flex  md:gap-[50px]">
      <div
        className={`step-img-box my-[40px] md:order-${order} relative flex-1`}
      >
        <img
          src={img}
          alt=""
          className="relative z-10 w-[70%] md:max-w-[400px] rounded-[10px]"
        />
      </div>
      <div className="md:order-1 flex-1 md:justify-center md:flex md:flex-col">
        <span className="text-[60px]  transition-all duration-[1s] ease-in-out  md:text-[88px] text-[#ddd] font-[500]">
          {step}
        </span>
        <p className="text-start text-[19px] text-[#333] font-[700] mb-[26px]">
          {benefitTitle}
        </p>
        <p className="text-start  transition-all duration-[1s] ease-in-out  lg:w-[416px]   text-[#555] mb-[26px] font-[400] text-[15px]">
          {benefitDescription}
        </p>
      </div>
    </div>
  );
}
