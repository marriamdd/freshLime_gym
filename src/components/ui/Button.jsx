/* eslint-disable react/prop-types */

export default function Button({ text, bg, color, hoverBR, hoverBG }) {
  return (
    <div
      className={`rounded-[9px]  md:px-[25px] md:py-[12px] px-[12px] py-[19px] transition-all duration-[1s] ease-in-out`}
      style={{
        background: bg,
        color: color,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = hoverBG;
        e.currentTarget.style.border = hoverBR;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = bg;
      }}
    >
      <button
        className={`w-full h-full text-[13px] rounded-[9px] focus:outline-none`}
      >
        {text}
      </button>
    </div>
  );
}
