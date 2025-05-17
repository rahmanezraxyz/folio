import { useState, createContext, useEffect } from "react";
import { singleProjectData as defaultProjectData } from "../data/singleProjectData";
import { projectsData } from "../data/projects";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, projectId }) => {
  const [singleProjectData, setSingleProjectData] =
    useState(defaultProjectData);

  useEffect(() => {
    if (projectId) {
      const projectIdNum = parseInt(projectId, 10);
      const project = projectsData.find((p) => p.id === projectIdNum);

      if (project) {
        const projectData = {
          ProjectHeader:
            project.ProjectHeader || defaultProjectData.ProjectHeader,
          ProjectImages:
            project.ProjectImages || defaultProjectData.ProjectImages,
          ProjectInfo: project.ProjectInfo || defaultProjectData.ProjectInfo,
          RelatedProject:
            project.RelatedProject || defaultProjectData.RelatedProject,
        };

        setSingleProjectData(projectData);
      }
    }
  }, [projectId]);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
