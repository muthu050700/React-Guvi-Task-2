import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="bg-[#153448]">
      <div className="custom-shape-divider-top-1716053322">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#948979]"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center h-15 bg[#153448] py-4">
        <div className="flex gap-8 py-4 list-none text-[#DFD0B8] font-medium">
          <motion.a
            initial={{ scope: 0.8, opacity: 0 }}
            whileInView={{ scaope: 1, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{
              once: true,
            }}
            href="#"
            className="hover:tracking-wider hover:transition-all"
          >
            <li>Home</li>
          </motion.a>
          <motion.a
            initial={{ scope: 0.8, opacity: 0 }}
            whileInView={{ scaope: 1, opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{
              once: true,
            }}
            href="#"
            className="hover:tracking-wider hover:transition-all"
          >
            <li>About</li>
          </motion.a>
          <motion.a
            initial={{ scope: 0.8, opacity: 0 }}
            whileInView={{ scaope: 1, opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{
              once: true,
            }}
            href="#"
            className="hover:tracking-wider hover:transition-all"
          >
            <li>Contact us</li>
          </motion.a>
          <motion.a
            initial={{ scope: 0.8, opacity: 0 }}
            whileInView={{ scaope: 1, opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{
              once: true,
            }}
            href="#"
            className="hover:tracking-wider hover:transition-all"
          >
            <li>Service</li>
          </motion.a>
        </div>
        <motion.p
          initial={{ scope: 0.8, opacity: 0 }}
          whileInView={{ scaope: 1, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 2,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{
            once: true,
          }}
          className="text-[#DFD0B8] font-medium  "
        >
          © Your Website 2024. All Rights Reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
