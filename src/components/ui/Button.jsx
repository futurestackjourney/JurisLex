import { motion } from "motion/react";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <motion.button
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      type={type}
      onClick={onClick}
      className="py-3 px-4 sm:py-4 sm:px-8 bg-primary text-white text-xl tracking-wider hover:bg-[#162456b9] transition-colors rounded-md font-semibold mt-6"
    >
      {text}
    </motion.button>
  );
};

export default Button;
