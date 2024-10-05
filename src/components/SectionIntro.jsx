/* eslint-disable react/prop-types */

export default function SectionIntro({ title, description }) {
  return (
    <div className="flex flex-col w-[100%]  ">
      <p
        style={{ letterSpacing: "0.75px" }}
        className="text-[#077252] self-start font-[500] text-[13px]"
      >
        {title}
      </p>
      <h1
        style={{ letterSpacing: "-0.5px" }}
        className="text-start text-[26px] md:text-nowrap lg:text-[30px]  text-[#333] mb-[70px] font-[700]"
      >
        {description}
      </h1>
    </div>
  );
}
