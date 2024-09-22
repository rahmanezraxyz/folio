
import {useTheme} from "../../ThemeContext"

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../../components/styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";



const ExperienceCard = ({ experience }) => {
	const {theme} = useTheme();
	const backgroundColor = theme === 'dark' ? "#fff" : "#F5F5F5"; // Dark or light background
	const textColor = theme === 'dark' ? "#fff" : "#000000"; // Text color based on theme
	const arrowColor = theme === 'dark' ? "#fff" : "#F5F5F5";
	const textColor1 = theme === 'dark' ? "#000000" : "#000000"; // Text color based on theme
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: backgroundColor,
				color: textColor,
			}}
			contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
			date={experience.date}
			iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' , backgroundColor :'#000000' }}

			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[80%] h-[80%] object-contain"
					/>
				</div>
			}
		>
			<div>
					<h3 className=" text-ternary-dark  sm:text-l md:text-xl lg:text-1xl xl:text-2xl font-bold">{experience.title}</h3>
				<p
					className=" text-ternary-dark text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className=" text-ternary-dark mt-5 list-disc ml-5 space-y-2 ">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className=" text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	const {theme} = useTheme();
	const color = theme === 'dark' ? "#fff" : "#000000";
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className=" sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>


			<motion.div className="mt-20 md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal  font-general-bold text-custom-purple text-center sm:text-left text-ternary-dark dark:text-primary-light ">
				<p className={`${styles.sectionSubText} text-center`}>
					What I have done so far
				</p>
				<h2 className={`${styles.sectionHeadText} text-center  mt-10 text-gray-500 dark:text-gray-200`}>
					Education & Experience
				</h2>
			</motion.div>

			<div className="mt-20">

				<motion.div
					initial={{ opacity: 0, y: -180 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}

				>

						<VerticalTimeline
							key={theme} // Forces re-render on theme change
							lineColor={color}

						>
							{experiences.map((experience, index) => (
								<ExperienceCard
									key={`experience-${index}`}
									experience={experience}
								/>
							))}
						</VerticalTimeline>




				</motion.div>

			</div>
		</motion.section>
	);
};

export default SectionWrapper(Experience, "work");
