import { useState } from "react";

export default function FreeWeekFormComponent() {
  const options = [
    "Friends and Family",
    "YouTube Video",
    "Podcast",
    "Facebook ad",
    "Other",
    "Please choose one option :",
  ];
  const [chosen, setChosen] = useState("Please choose one option :");
  console.log(chosen);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id="tryForFree"
      className=" w-[100%] flex flex-col items-center justify-center mb-[50px] border-b pb-[90px]"
    >
      <div className="w-[80%]">
        <div className="freeWeekContainer ">
          <div className=" freeWeekContainerImg"></div>
          <div className=" freeWeekContainerForm  p-[15px]  ">
            <form onSubmit={handleSubmit}>
              <div className="flex mb-[38px] flex-col  gap-[30px]">
                <h2 className="text-[#02261b] lg:text-[28px] transition-all duration-[0.5] ease-in-out text-[25px] font-[700]">
                  Get your first week for free
                </h2>
                <p className="text-[#02261b]  text-[14.5px] lg:text-[16.2px] font-[400]">
                  A lot and all kinds of hummers waiting for you. Start working
                  out today, make your best shape as possible, stay health and
                  active with us!
                </p>
              </div>
              <div className="form gap-[15px]">
                <div>
                  <label className="text-[8px] font-[500]" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    placeholder="Mark Godwin"
                    className="bg-[#b5d9ce] lg:h-[52px]  transition-all duration-[0.5] ease-in-out mt-[5px] p-[9.5px] rounded-[8px] w-full"
                    name="fullName"
                    id="fullName"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-[8px] font-[500]" htmlFor="Email">
                    Email
                  </label>
                  <input
                    placeholder="me@example.com"
                    className="bg-[#b5d9ce]  transition-all duration-[0.5] ease-in-out lg:h-[52px] mt-[5px] p-[9.5px] rounded-[8px] w-full"
                    name="Email"
                    id="Email"
                    type="gmail"
                  />
                </div>
                <div>
                  <label className="text-[8px] font-[500]" htmlFor="fromWhere">
                    Where did u hear from us?
                  </label>

                  <select
                    onChange={(e) => setChosen(e.target.value)}
                    value={chosen}
                    placeholder="Please choose one option:"
                    className="bg-[#b5d9ce]  transition-all duration-[0.5] ease-in-out mt-[5px] h-[43px] lg:h-[52px] p-[9.5px] rounded-[8px] w-full"
                    name="fromWhere"
                    id="fromWhere"
                  >
                    {options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <button className="formBtn py-[19px]  transition-all duration-[0.5] ease-in-out px-[13px] mt-[20px]  bg-[#02261b] text-[white] rounded-[9px]">
                  Sign up now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
