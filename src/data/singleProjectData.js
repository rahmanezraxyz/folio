// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiLinkedin,
	FiTwitter,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Data Privacy Papers',
		publishDate: 'Sep 4, 2024',
		tags: 'Privacy / Regulations',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'GDPR: General Data Protection Regulation Overview',
			img: Image1,
		},
		{
			id: 2,
			title: 'CCPA: California Consumer Privacy Act Explained',
			img: Image2,
		},
		{
			id: 3,
			title: 'EU AI Act: Understanding its Impact on Data Privacy',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Business Information Coalition',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Research & Policy Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '555 8888 888',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The Business Information Coalition (BIC) aims to provide thorough research and insights into various data privacy regulations around the world, helping businesses navigate compliance and regulatory challenges.',
		Technologies: [
			{
				title: 'Topics & Technologies',
				techs: [
					'GDPR',
					'CCPA',
					'EU AI Act',
					'ARPA',
					'State Privacy Laws',
					'Data and B2B Practices',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'The General Data Protection Regulation (GDPR) sets a global standard for data privacy. BIC’s paper provides a detailed analysis of its key provisions and compliance strategies.',
			},
			{
				id: 2,
				details:
					'California Consumer Privacy Act (CCPA) represents the US’s move toward greater data protection. Our analysis focuses on the law’s core principles and how businesses can align their practices.',
			},
			{
				id: 3,
				details:
					'The EU AI Act introduces new rules on AI technology with significant data privacy implications. BIC’s research offers an in-depth exploration of how AI regulations intersect with data protection standards.',
			},
			{
				id: 4,
				details:
					'Additional papers explore emerging state privacy laws in the U.S., ARPA (American Rescue Plan Act), and the growing significance of data management in B2B contexts.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/company',
			},
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/company',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/company',
			},
		],
	},
	RelatedProject: {
		title: 'Related Papers',
		Projects: [
			{
				id: 1,
				title: 'ARPA and Privacy in the Digital Age',
				img: Image4,
			},
			{
				id: 2,
				title: 'State Privacy Laws: A Comprehensive Overview',
				img: Image5,
			},
			{
				id: 3,
				title: 'Data and B2B: Privacy Implications for Businesses',
				img: Image6,
			},
			{
				id: 4,
				title: 'EU AI Act: Navigating AI and Privacy Regulations',
				img: Image3,
			},
		],
	},
};
