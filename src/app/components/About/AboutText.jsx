import { motion } from "framer-motion";

export default function AboutText() {
  const textAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.15 * i,
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="backdrop-blur-sm bg-opacity-10 rounded-2xl p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center md:text-left mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-100">About me ?</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-200 to-gray-400 mt-2" />
      </motion.div>

      <motion.h3
        className="font-['Space_Grotesk'] text-3xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          variants={textAnimation}
          className="text-gray-200 inline-block"
        >
          My name is
        </motion.span>
        <div className="flex items-center gap-3 flex-wrap mt-2">
          <motion.span
            variants={textAnimation}
            custom={1}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            TAHIRIMIHAJA
          </motion.span>
          <motion.span
            variants={textAnimation}
            custom={2}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 bg-clip-text text-transparent"
          >
            Albertinot
          </motion.span>
          <motion.span
            variants={textAnimation}
            custom={3}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            Judickael
          </motion.span>
        </div>
      </motion.h3>

      <motion.p
        className="font-['Inter'] text-lg leading-relaxed text-gray-300 text-justify"
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        custom={4}
        viewport={{ once: true }}
      >
        <motion.span
          variants={textAnimation}
          custom={5}
          className="font-medium text-gray-100"
        >
          I'm passionate about front-end and mobile development, with a strong
          focus on JavaScript, and deeply inspired by the world of design. I
          love solving challenges and building creative, user-friendly
          solutions. Thanks to my education and experience, I've developed the
          ability to work efficiently, adapt quickly, and continuously grow my
          skills to stay ahead in this fast-evolving field.{" "}
        </motion.span>{" "}
      </motion.p>
    </motion.section>
  );
}
