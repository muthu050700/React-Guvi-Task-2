import AboutFeatures from "./AboutFeatures";
import { motion } from "framer-motion";
const Reviews = () => {
  const usage = "Reviews";
  const Reviews = [
    {
      id: 1,
      image:
        "https://imageio.forbes.com/blogs-images/womensmedia/files/2018/07/Photo-happy-1-unsplash-michael-dam.jpg?format=jpg&width=1440",
      title: "Margaret E.",
      description: "This is fantastic! Thanks so much guys!",
    },
    {
      id: 2,
      image:
        "https://demos.creative-tim.com/marketplace/material-kit-pro/assets/img/faces/christian.jpg",
      title: "Fred S.",
      description:
        "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHHXOWCdmjJy8gBrpNkbgXOjjuuoX7-h5YpWfgYOkqJdAU9uy",
      title: "Sarah W.",
      description:
        "Thanks so much for making these free resources available to us!",
    },
  ];
  return (
    <div className="flex flex-col justify-evenly  bg-[#DFD0B8] ">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeIn",
          delay: 0.5,
          type: "spring",
          stiffness: 60,
        }}
        viewport={{
          once: true,
        }}
        className="font-bold pt-14 pb-3 text-xl text-center text-stone-600"
      >
        {usage === "Reviews" && <h2>What people are saying...</h2>}
      </motion.div>
      <div className="flex flex-col justify-evenly bg-[#DFD0B8] py-10 lg:flex-row">
        {Reviews.map((value, index) => {
          return (
            <AboutFeatures
              key={value.id}
              value={value}
              reviews={"reviews"}
              delayVariable="1"
            />
          );
        })}
      </div>
    </div>
  );
};
export default Reviews;
