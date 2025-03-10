import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';
import {useTheme} from "../../ThemeContext";


const AppBanner = () => {

	const { theme } = useTheme();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="section flex flex-col sm:justify-between items-center sm:flex-row  "
		>
			<div className="w-full md:w-2/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className=" text-hero font-general-bold  text-center  sm:text-left leading-normal   text-ternary-dark dark:text-primary-light "
				>

					Hi, I&apos;m <span className=" text-custom-purple ">Ibrahim</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Software Engineer & Full-Stack Developer
				</motion.p>

			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-1/2 justify-center align-middle  sm:mt-0"
			>
				<img
					src={
						theme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
					className="small-image"
				/>

			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
