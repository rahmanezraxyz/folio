import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={`/projects/${id}`} aria-label="Single Project">
        <div className="mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image}
              className="border-none rounded-t-xl"
              alt="Single Project"
            />
          </div>
          <div className="px-4 py-6 text-center">
            <p className="mb-2 text-lg font-general-medium md:text-xl text-ternary-dark dark:text-ternary-light">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
