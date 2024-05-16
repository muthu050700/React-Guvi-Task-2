const Header = () => {
  return (
    <div className="flex justify-between h-20 items-center bg-orange-300 ">
      <h1 className="font-bold ml-5 text-lg md:text-xl md:ml-10 lg:text-2xl lg:ml-16 xl:text-4xl xl:ml-24">
        Start Bootstrap
      </h1>
      <button className=" mr-5 border border-black px-2 py-1 rounded-lg hover:bg-gray-300 font-bold md:mr-10 lg:mr-16 xl:mr-24 xl:text-2xl xl:px-5 xl:py-3 ">
        Sign Up
      </button>
    </div>
  );
};
export default Header;
