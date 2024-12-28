import { motion } from "framer-motion";

const SimpleTittle = ({ name }) => {
  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative inline-block"
    >
      <div className="relative z-10">
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-['Space_Grotesk'] text-5xl font-black tracking-tight inline-block text-gray-100"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute -bottom-3 left-0 w-full h-1.5 rounded-full bg-gradient-to-r from-gray-200 to-gray-400"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.8 }}
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-2xl bg-gradient-to-r from-gray-200 to-gray-400"
      />
    </motion.div>
  );
};

export default SimpleTittle;
