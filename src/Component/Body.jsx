import { useState } from "react";

const Body = ({ signup }) => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [valid, setValid] = useState("");
  let validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function handleEmail(e) {
    e.preventDefault();
    let inputValue = emailInputValue;
    verifyingEmail(inputValue);
  }
  function verifyingEmail(value) {
    if (value === "") {
      setErrorMsg("Email field cannot be empty");
      setValid(true);
    } else if (validRegex.test(value)) {
      setErrorMsg("Form submission successful");
      setValid(false);
    } else {
      setErrorMsg("Enter valid Email Address");
      setValid(true);
    }
  }
  function getInputValue(e) {
    setEmailInputValue(e.target.value);
  }
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center   ${
          signup === "signup"
            ? "h-[50vh] bg-[#948979] text-[#153448]"
            : "h-[50vh] lg:h-[90vh] sm:h-[85vh] bg-[#153448]"
        }`}
      >
        {signup === "signup" ? (
          <h2 className="lg:py-10 py-4 text-xl font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl text-center text-[#153448] ">
            Ready to get started? Sign up now!
          </h2>
        ) : (
          <h2 className="py-4 text-xl font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl  text-[#DFD0B8] ">
            Generate more leads with a{" "}
            <p className="py-2">professional landing page!</p>
          </h2>
        )}

        <form className="">
          <input
            className={` text-sm sm:text-lg lg:text-2xl border bg-stone-100 text-stone-600 w-[200px] py-2 px-2  rounded-lg sm:w-[315px] sm:py-3 lg:w-[390px] lg:py-[17px] xl:w-[530px] xl:py-5 x items-center  ${
              valid === ""
                ? " border-stone-400 border-2"
                : valid
                ? "border-red-500  border-[3px]"
                : "border-green-600 border-[3px]"
            }`}
            placeholder="Email address"
            onChange={getInputValue}
            value={emailInputValue}
          />

          <button
            className="hover:tracking-wider hover:transition-all  border-stone-400 border-2 px-2 py-[6px]  text-[#153448] bg-[#DFD0B8]  rounded-lg ml-2 text-sl  sm:px-4 sm:py-3 lg:py-[17px]  xl:py-5 sm:text-lg lg:text-2xl xl:px-5 xl:text-xl"
            onClick={handleEmail}
          >
            Submit
          </button>

          <div>
            <p
              className={`${
                valid ? "text-red-600 " : "text-green-700"
              } text-sm my-1 sm:my-2 sm:text-lg lg:my-3 lg:text-xl xl:my-4 xl:text-2xl`}
            >
              {errorMsg}
            </p>
          </div>
        </form>
      </div>
      {signup !== "signup" && (
        <div className="fill-[#153448] bg-[#DFD0B8]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="]"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};
export default Body;
