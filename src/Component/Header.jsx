import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="flex justify-between h-20 items-center bg-[#153448] ">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{
          once: true,
        }}
        className="font-bold ml-5 text-lg md:text-xl md:ml-10 lg:text-2xl lg:ml-16 xl:text-4xl xl:ml-24 text-[#DFD0B8]"
      >
        Start Bootstrap
      </motion.h1>
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.5,
          },
        }}
        whileTap={{
          scale: 0.8,
          transition: {
            duration: 0.5,
          },
        }}
        className=" mr-5 mt-4 border border-stone-200   px-2 py-1 rounded-lg  text-[#153448] bg-[#DFD0B8]  font-bold md:mr-10 lg:mr-16 xl:mr-24 xl:text-2xl xl:px-5 xl:py-3 "
      >
        Sign Up
      </motion.button>
    </div>
  );
};
export default Header;
