import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  // Animation Variants
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger child animations
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // Triggers when 20% of the component is visible
    >
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <motion.div variants={containerVariants} className="space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariants}
          >
            {/* Year Section */}
            <motion.div
              className="w-full lg:w-1/4"
              variants={itemVariants}
            >
              <p className="mb-2 text-sm text-stone-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Details Section */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={itemVariants}
            >
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              <div>
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    variants={itemVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
