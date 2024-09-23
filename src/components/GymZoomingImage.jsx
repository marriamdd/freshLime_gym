/* eslint-disable react/prop-types */
export default function GymZoomingImage({ img }) {
  return (
    <div className="overflow-hidden">
      <img
        className="rounded-[15px] h-full hover:scale-[1.2] transition-all duration-[1s] easy-in-out"
        src={img}
        alt=""
      />
    </div>
  );
}
