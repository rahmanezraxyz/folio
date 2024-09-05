import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'statesCounter', end: 50, duration: 2 });
	useCountUp({ ref: 'employeesCounter', end: 5000, duration: 2.5, separator: ',' });
	useCountUp({ ref: 'customersCounter', end: 125000, duration: 2.75, separator: ',' });
	useCountUp({ ref: 'companiesCounter', end: 16, duration: 1.75 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
			<CounterItem
					title="Companies Represented"
					counter={<span id="companiesCounter" />}
					measurement=""
				/>
				<CounterItem
					title="States and Districts Represented"
					counter={<span id="statesCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Employees"
					counter={<span id="employeesCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Customers Served"
					counter={<span id="customersCounter" />}
					measurement="+"
				/>


			</div>
		</div>
	);
};

export default AboutCounter;
