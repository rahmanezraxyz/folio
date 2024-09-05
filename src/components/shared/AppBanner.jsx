import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import BIC from '../../images/BIC.png';
import { motion } from 'framer-motion';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col justify-center items-center sm:flex-row mt-12 md:mt-2"
			// Centered horizontally and vertically
		>
			<div className="w-full md:w-1/3 text-center sm:text-left mt-4 mr-4">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Business Information Coalition
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
					We advocate for stronger consumer privacy and support the needs of B2B businesses.
				</motion.p>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-center sm:text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={BIC}
					alt="BIC Logo"
					className="mt-12"
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
