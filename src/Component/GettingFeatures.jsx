const GettingFeatures = ({ value }) => {
  const { image, title, description, alignContent } = value;
  return (
    <div
      className={`flex flex-col ${
        alignContent === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="sm:w-6/12 flex flex-col justify-center items-center my-10">
        <h2 className="font-bold text-2xl py-4 text-stone-600">{title}</h2>
        <p className=" lg:w-[500px] font-light text-sm px-3 lg:text-lg text-stone-600 text-lg">
          {description}
        </p>
      </div>
      <div className="sm:w-6/12">
        <img
          src={`${image}`}
          className=" w-[100%] h-[300px] sm:object-fill sm:w-[600px] sm:h-[300px] lg:w-[100%] lg:h-[450px]"
        />
      </div>
    </div>
  );
};
export default GettingFeatures;
