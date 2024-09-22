export default function HowItWorks() {
  return (
    <div className="w-[100%] flex items-center justify-center mb-[30px]">
      <div className="flex flex-col w-[80%]  ">
        <p
          style={{ letterSpacing: "0.75px" }}
          className="text-[#077252] self-start font-[500] text-[13px]"
        >
          HOW WE WORK
        </p>
        <h1
          style={{ letterSpacing: "-0.5px" }}
          className="text-start text-[26px] md:text-nowrap lg:text-[48px] text-[#333] mb-[70px] font-[700]"
        >
          Our benefits and skills that make u happy
        </h1>
        <div className="md:flex ">
          <div className="step-img-box my-[40px] md:order-2 relative flex-1">
            <img
              src="/meal.jpg"
              alt=""
              className="relative z-10 w-[70%] md:max-w-[400px] rounded-[10px]"
            />
          </div>
          <div className="md:order-1 flex-1 md:justify-center md:flex md:flex-col">
            <span className="text-[60px] text-[#ddd] font-[500]">01</span>
            <p className="text-start text-[19px] text-[#333] font-[700] mb-[26px]">
              For all 7 days in week our diet plan
            </p>
            <p className="text-start md:w-[340px] transition-all duration-[1s] ease-in-out  lg:w-[416px]  text-[#555] mb-[26px] font-[400] text-[15px]">
              We have our own brand chef, who created diet meal plan for every
              single human being body time and all of this including in
              subscription price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
