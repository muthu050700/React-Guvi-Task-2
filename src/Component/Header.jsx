const Header = () => {
  return (
    <div className="flex justify-between h-20 items-center bg-[#153448] ">
      <h1 className="font-bold ml-5 text-lg md:text-xl md:ml-10 lg:text-2xl lg:ml-16 xl:text-4xl xl:ml-24 text-[#DFD0B8]">
        Start Bootstrap
      </h1>
      <button className=" mr-5 border border-stone-200 hover:text-stone-200 hover:tracking-wider hover:transition-all  hover:bg-stone-400 px-2 py-1 rounded-lg  text-[#153448] bg-[#DFD0B8]  font-bold md:mr-10 lg:mr-16 xl:mr-24 xl:text-2xl xl:px-5 xl:py-3 ">
        Sign Up
      </button>
    </div>
  );
};
export default Header;
