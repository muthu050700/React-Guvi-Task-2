import { motion } from "framer-motion";
const GettingFeatures = ({ value, delayValue }) => {
  const { image, title, description, alignContent } = value;
  return (
    <div
      className={`flex flex-col ${
        alignContent === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="sm:w-6/12 flex flex-col justify-center items-center my-10">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5 * delayValue,
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{
            once: true,
          }}
          className="font-bold text-2xl py-4 text-stone-600"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.9 * delayValue,
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{
            once: true,
          }}
          className=" lg:w-[500px] font-light px-3 lg:text-lg text-stone-600 text-justify text-lg"
        >
          {description}
        </motion.p>
      </div>
      <motion.div
        initial={{ scope: 0.8, opacity: 0 }}
        whileInView={{ scaope: 1, opacity: 1 }}
        transition={{
          delay: 1.3 * delayValue,
          duration: 1,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{
          once: true,
        }}
        className="sm:w-6/12"
      >
        <img
          src={`${image}`}
          className=" w-[100%] h-[300px] sm:object-fill sm:w-[600px] sm:h-[300px] lg:w-[100%] lg:h-[450px]"
        />
      </motion.div>
    </div>
  );
};
export default GettingFeatures;
