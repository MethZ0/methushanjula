import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // Animation Variants
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delays each child animation
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imgVariants = {
    hidden: { x: -100, opacity: 0 }, // Start off-screen to the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.05 }, // Slight scaling on hover
  };

  return (
    <motion.div
      className="pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // Triggers when 20% of the component is in view
    >
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <motion.div variants={containerVariants} className="space-y-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="w-full lg:w-1/4"
              variants={imgVariants}
              whileHover="hover"
            >
              <motion.img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h3
                className="mb-2 font-semibold text-2xl"
                variants={itemVariants}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="mb-4 text-stone-400"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>
              <div>
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    variants={itemVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
