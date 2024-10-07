// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [

	{
		id: 1,
		title: 'Laboratory Research Management',
		category: 'Web Application',
		img: MobileImage2,
		ProjectHeader: {
			title: 'Laboratory Research Management Web Application - Managing a research laboratory',
			publishDate: 'Jan 27, 2024',
			tags: 'Angular / SpringBoot',
		},
	},
	{
		id: 2,
		title: 'BrightSkies Academy Platform',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'BrightSkies Academy Platform - Developed a web-based platform for online training tailored to High Performance Computing (HPC) courses.',
			publishDate: 'Nov 6, 2023',
			tags: 'Angular, Django, MySQL, AWS',
		},
	},
	{
		id: 3,
		title: 'Olive Oil supply chain',
		category: 'Web application',
		img: UIImage1,
		ProjectHeader: {
			title: 'Olive Oil supply chain - A React and Blockchain-Based Solution for Ensuring Product Authenticity ',
			publishDate: 'May 31, 2023',
			tags: 'React / NodeJS / Blockchain / MongoDB ',
		},
	},
	{
		id: 4,
		title: 'Blog space',
		category: 'Web application',
		img: UIImage2,
		ProjectHeader: {
			title: 'Blog space - Academic project',
			publishDate: 'May 28, 2023',
			tags: 'PHP / AJAX / JAVASCRIPT / HTML / CSS',
		},
	},
	{
		id: 5,
		title: 'Patient tracker',
		category: 'Mobile Application',
		img: MobileImage1,
		ProjectHeader: {
			title: 'Patient tracker - Developed a mobile application for patient monitoring',
			publishDate: 'Apr 20, 2023',
			tags: 'Dart / Flutter',
		},
	},
	{
		id: 6,
		title: 'DoubleCo Agency',
		category: 'Web Application',
		img: WebImage1,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Oct 11, 2022',
			tags: 'HTML / Bootstrap / CSS / Frontend',
		},
	},
];
