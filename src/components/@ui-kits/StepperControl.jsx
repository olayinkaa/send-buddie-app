/* eslint-disable react/prop-types */
// import clsx from "classnames";
// import { useCallback } from "react";
import SendBuddieButton from './SendBuddieButton';

function StepperControl({ currentStep, steps }) {
    // const currentClass = clsx({
    //     "opacity-40 cursor-not-allowed disabled": currentStep === 1,
    //     "cursor-pointer": currentStep !== 1,
    // });

    // const positionBackButton = clsx({
    //     "justify-start": currentStep === steps.length - 1,
    //     "justify-around": currentStep !== steps.length - 1,
    // });

   

    return (
        <div className="flex justify-start -z-10 mt-8">
            {/* back button */}
            <button
                // onClick={handleBack}
                type="button"
                className={`
                border-2 bg-white uppercase
                text-slate-400 
                rounded-lg border-slate-400 px-6 py-2`}
            >
                Back
            </button>
            {currentStep !== steps.length - 1 && (
                <div>
                    <SendBuddieButton
                        title="Next"
                    />
                </div>
            )}
        </div>
    );
}

export default StepperControl;

// onClick={
// 	+currentStep === 2 && isIntegratedService
// 		? handleSubmit(handlePayeeDetails)
// 		: currentStep === 3 ? handleNext
// 		: handleSubmit(handleFormSubmit)
// }
