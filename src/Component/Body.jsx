const Body = ({ signup }) => {
  console.log(signup);
  return (
    <div
      className={`flex flex-col justify-center items-center mx-1  ${
        signup === "signup" ? "h-[50vh]" : "h-[50vh] lg:h-[90vh] sm:h-[85vh]"
      }`}
    >
      {signup === "signup" ? (
        <h2 className="lg:py-10 py-4 text-xl font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl text-center ">
          Ready to get started? Sign up now!
        </h2>
      ) : (
        <h2 className="py-4 text-xl font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl">
          Generate more leads with a{" "}
          <p className="py-2">professional landing page!</p>
        </h2>
      )}

      <div className="flex">
        <input
          className="border border-black w-[200px] py-1 px-2 text-lg rounded-lg sm:w-[315px] sm:py-3 lg:w-[390px] xl:w-[530px] xl:py-5"
          placeholder="Email address"
        />
        <button className=" border border-black px-2  rounded-lg ml-2 text-sl  sm:px-4 sm:text-lg xl:px-5 xl:text-xl">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Body;
