import { useState } from "react";
import useSentEmail from "./customHooks/useSentEmail";
import { Spin } from "antd";
export default function FreeWeekFormComponent() {
  const { errorMessages, sendEmail, showSuccesMessage, loader } =
    useSentEmail();

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const options = [
    "Please choose one option :",
    "Friends and Family",
    "YouTube Video",
    "Podcast",
    "Facebook ad",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sendEmail(emailData)) {
      console.log("Email data is valid and being processed");

      setEmailData({
        name: "",
        email: "",
        message: "Please choose one option :",
      });
    }
  };

  return (
    <div
      id="tryForFree"
      className="w-[100%] flex flex-col items-center justify-center mb-[50px] border-b pb-[90px]"
    >
      <div className="w-[80%]">
        <div className="freeWeekContainer ">
          <div className="freeWeekContainerImg"></div>
          <div className="freeWeekContainerForm p-[15px]">
            <form onSubmit={handleSubmit}>
              <div className="flex mb-[38px] flex-col gap-[30px]">
                <h2 className="text-[#02261b] lg:text-[28px] transition-all duration-[0.5] ease-in-out text-[25px] font-[700]">
                  Get your first week for free
                </h2>
                <p className="text-[#02261b] text-[14.5px] lg:text-[16.2px] font-[400]">
                  A lot and all kinds of hummers waiting for you. Start working
                  out today, make your best shape as possible, stay healthy and
                  active with us!
                </p>
              </div>
              {!showSuccesMessage ? (
                <div className="form gap-[15px]">
                  <div>
                    <label className="text-[8px] font-[500]" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      placeholder="Mark Godwin"
                      className="bg-[#b5d9ce] lg:h-[52px] transition-all duration-[0.5] ease-in-out mt-[5px] p-[9.5px] rounded-[8px] w-full"
                      name="fullName"
                      value={emailData.name}
                      onChange={(e) =>
                        setEmailData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      id="fullName"
                      type="text"
                    />
                    {errorMessages.nameError && (
                      <p className="text-red-500 text-nowrap text-[12px] mt-[5px]">
                        {errorMessages.nameError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-[8px] font-[500]" htmlFor="Email">
                      Email
                    </label>
                    <input
                      placeholder="me@gmail.com"
                      className="bg-[#b5d9ce] transition-all duration-[0.5] ease-in-out lg:h-[52px] mt-[5px] p-[9.5px] rounded-[8px] w-full"
                      name="Email"
                      onChange={(e) =>
                        setEmailData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      value={emailData.email}
                      id="Email"
                      type="email"
                    />
                    {errorMessages.emailError && (
                      <p className="text-red-500 text-[12px] mt-[5px]">
                        {errorMessages.emailError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="text-[8px] font-[500]"
                      htmlFor="fromWhere"
                    >
                      Where did you hear from us?
                    </label>

                    <select
                      onChange={(e) =>
                        setEmailData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      value={emailData.message}
                      className="bg-[#b5d9ce] customSelect transition-all duration-[0.5] ease-in-out mt-[5px] h-[43px] lg:h-[52px] p-[9.5px] rounded-[8px] w-full"
                      name="fromWhere"
                      id="fromWhere"
                    >
                      {options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <button className="formBtn py-[19px] transition-all duration-[0.5] ease-in-out px-[13px] mt-[20px] bg-[#02261b] text-[white] rounded-[9px]">
                    {loader ? <Spin /> : " Sign up now "}
                  </button>
                </div>
              ) : (
                <div className=" flex flex-col justify-center gap-[10px] mb-[-30px] items-center">
                  <h1 className="font-[700] text-[#02261b] transition-all duration-[0.5] ease-in-out  text-[25px] md:text-[30px]">
                    S U C C E S S
                  </h1>
                  <h2 className="text-[25px] text-[#02261b] transition-all duration-[0.5] ease-in-out  pb-[20px] text-center font-[600]">
                    Your account has been created
                  </h2>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
