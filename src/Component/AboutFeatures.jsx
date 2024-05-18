const AboutFeatures = ({ value, reviews }) => {
  const { title, description, image } = value;

  return (
    <div className="my-7 lg:m-1">
      <div className=" mx-10 flex flex-col items-center gap-4 ">
        <img
          src={`${image}`}
          alt="img"
          className={`${
            reviews === "reviews"
              ? "w-[150px] h-[150px] rounded-[50%] "
              : "w-14 sm:w-16"
          }`}
        />
        <p className=" font-bold text-xl sm:text-2xl lg:text-xl text-[#153448]">
          {title}
        </p>
        <p className=" w-64 font-light text-lg sm:text-xl lg:text-lg text-[#3C5B6F]">
          {description}
        </p>
      </div>
    </div>
  );
};
export default AboutFeatures;
