// src/context/SingleProjectContext.js
import { createContext, useState } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, project }) => {
	const [projects] = useState(singleProjectDataJson); // Assuming this is where you're defining your projects

	return (
		<SingleProjectContext.Provider value={{ projects, project }}>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
