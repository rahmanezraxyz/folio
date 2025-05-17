import { useContext } from "react";
import { Link } from "react-router-dom";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectRelatedProjects = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {singleProjectData.RelatedProject.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {singleProjectData.RelatedProject.Projects.map((project) => {
          return (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                <img
                  src={project.img}
                  className="rounded-t-xl border-none"
                  alt={project.title}
                />
                <div className="text-center px-4 py-6">
                  <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {project.title}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
