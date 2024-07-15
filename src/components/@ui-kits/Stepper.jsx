/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
import { useEffect, useRef, useState } from "react";
import clsx from "classnames";

function Stepper({ steps, currentStep }) {
	const [newStep, setNewStep] = useState([]);
	const stepRef = useRef();
	const updateStep = (stepNumber, steps) => {
		const newSteps = [...steps];
		let count = 0;
		while (count < newSteps.length) {
			if (count === stepNumber) {
				// current steps
				newSteps[count] = {
					...newSteps[count],
					highlighted: true,
					selected: true,
					completed: true,
				};
				count++;
			} else if (count < stepNumber) {
				// step completed
				newSteps[count] = {
					...newSteps[count],
					highlighted: false,
					selected: true,
					completed: true,
				};
				count++;
			} else {
				// step pending
				newSteps[count] = {
					...newSteps[count],
					highlighted: false,
					selected: false,
					completed: false,
				};
				count++;
			}
		}
		return newSteps;
	};
	//= ============
	const displaySteps = newStep.map((step, index) => {
		const activeClass = clsx({
			"bg-blue-500 text-white font-bold border border-blue-600": step.selected,
		});
		const highlightedClass = clsx({
			"text-blue-900 dark:text-white": step.highlighted,
			"text-gray-200 dark:text-zinc-600": !step.highlighted,
		});
		const completedClass = clsx({
			"border-blue-500": step.completed,
			"border-gray-300": !step.completed,
		});
		return (
			<div
				// eslint-disable-next-line react/no-array-index-key
				key={index}
				className={`${
					index !== newStep.length - 1
						? "w-full flex items-center"
						: "flex items-center"
				} `}
			>
				<div className="relative z-[-5] flex flex-col items-center text-zinc-600 dark:text-white">
					<div
						className={`
                        h-6 w-6 flex items-center justify-center
                        rounded-full transition
                        duration-500 ease-in-out border-2 border-gray-300
						sm:h-12 sm:w-12
                        ${activeClass}
                        `}
					>
						{step.completed ? <span>&#10003;</span> : index + 1}
					</div>
					<div
						className={`
                        absolute top-0 text-center mt-16
                         text-xs font-medium sm:uppercase  ${highlightedClass}`}
					>
						{step.description}
					</div>
				</div>
				{/* Display line */}
				<div
					className={`flex-auto border-t-2 transition duration-500 ease-in-out ${completedClass}`}
				 />
			</div>
		);
	});

	useEffect(() => {
		const stepsState = steps.map((step, index) => {
			return {
				
				description: step,
					completed: false,
					highlighted: index === 0,
					selected: index === 0,
			};
		});
		stepRef.current = stepsState;
		const current = updateStep(currentStep - 1, stepRef.current);
		setNewStep(current);
	}, [steps, currentStep]);

	return (
		<div className="flex justify-between items-center mb-20">
			{displaySteps}
		</div>
	);
}

export default Stepper;
