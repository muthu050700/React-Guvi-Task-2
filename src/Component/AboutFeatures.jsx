const AboutFeatures = ({ value }) => {
  const { title, description, image } = value;

  return (
    <div className="my-7 lg:m-1">
      <div className=" mx-10 flex flex-col items-center gap-4">
        <img src={`${image}`} alt="img" className="w-14 sm:w-16" />
        <p className=" font-bold text-xl sm:text-2xl lg:text-xl">{title}</p>
        <p className=" w-64 font-light text-lg sm:text-xl lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};
export default AboutFeatures;
