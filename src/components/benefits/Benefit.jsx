/* eslint-disable react/prop-types */
export default function Benefit({
  img,
  step,
  benefitTitle,
  benefitDescription,
  order,
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-8">
      <div className="flex flex-col w-4/5">
        <div className="md:flex md:gap-12">
          <div className={`step-img-box my-10 md:order-2 relative flex-1`}>
            <img
              src={img}
              alt=""
              className="relative z-10 w-3/4 md:max-w-[400px] rounded-lg"
            />
          </div>
          <div
            className={`md:order-${
              order === 2 ? "1" : "2"
            } flex-1 md:justify-center mt-[50px]  md:flex md:flex-col`}
          >
            <span className="text-5xl  transition-all duration-1000 ease-in-out md:text-6xl text-gray-300 font-medium">
              {step}
            </span>
            <p className="text-start text-lg text-gray-800 font-bold mb-6">
              {benefitTitle}
            </p>
            <p className="text-start transition-all duration-1000 ease-in-out lg:w-[416px] text-gray-600 mb-6 font-normal text-sm">
              {benefitDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
