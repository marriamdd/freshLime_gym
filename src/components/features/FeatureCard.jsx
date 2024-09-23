/* eslint-disable react/prop-types */
export default function FeatureCard({ title, img, text }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="rounded-full  transition-all duration-[0.5s] ease-in-out mb-[25px] md:w-[60px] md:h-[60px] lg:w-[64px] lg:h-[64px] bg-[#b5d9ce] w-[50px] h-[50px] flex items-center justify-center ">
        {/* <img className="w-[32px] h-[32px]" src={img} alt="icon" /> */}
        {img}
      </div>

      <span className="text-[19px] transition-all duration-[0.5s] ease-in-out  lg:text-[21px] text-[#333] text-nowrap font-[700]">
        {title}
      </span>
      <p className="text-[#555] font-[400] transition-all duration-[0.5s] ease-in-out  lg:text-[16px] text-[15px]">
        {text}
      </p>
    </div>
  );
}
