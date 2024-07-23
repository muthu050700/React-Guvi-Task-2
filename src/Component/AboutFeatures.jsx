import { motion } from "framer-motion";
const AboutFeatures = ({ value, reviews, delayVariable }) => {
  const { title, description, image } = value;

  return (
    <div className="my-7 lg:m-1">
      <div className=" mx-10 flex flex-col items-center gap-4 ">
        <motion.div
          initial={{ scope: 0.5, opacity: 0 }}
          whileInView={{ scope: 1, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 100,
            delay: 0.5 * delayVariable,
          }}
          viewport={{
            once: true,
          }}
        >
          <img
            src={`${image}`}
            alt="img"
            className={`${
              reviews === "reviews"
                ? "w-[150px] h-[150px] rounded-[50%] "
                : "w-14 sm:w-16"
            }`}
          />
        </motion.div>

        <motion.p
          initial={{ scope: 0.2, opacity: 0 }}
          whileInView={{ scope: 1, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 100,
            delay: 0.8 * delayVariable,
          }}
          viewport={{
            once: true,
          }}
          className=" font-bold text-xl sm:text-2xl lg:text-xl text-[#153448]"
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ scope: 0.5, opacity: 0 }}
          whileInView={{ scope: 1, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 100,
            delay: 1.1 * delayVariable,
          }}
          viewport={{
            once: true,
          }}
          className=" w-64 font-light text-lg sm:text-xl lg:text-lg text-[#3C5B6F]"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};
export default AboutFeatures;
