import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { singleProjectData  } from '../data/ProjectsData';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
	const { title } = useParams();
	const project = singleProjectData.find((project) => {
        const projectTitleUrl = project.ProjectHeader.title.replace(/\s+/g, '-').toLowerCase();
        return projectTitleUrl === title;
    });

	if (!project) {
		return <div>Project not found</div>;
	}
  	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<ProjectHeader project={project} /> 
			<ProjectGallery project={project} /> 
			<ProjectInfo project={project} /> 
			<ProjectRelatedProjects project={project} />
			
		</motion.div>
	);
};

export default ProjectSingle;
