import { useState, useCallback } from "react";
import { SendBuddieModal } from "@/components/@ui-kits";
import RenderPageOne from "./RenderPageOne";
import RenderPageTwo from "./RenderPageTwo";

export default function VerifyIdentityModal({ isOpen, closeModal}) {
    const [currentStep, setCurrentStep] = useState(1);
    const handleNextStep = () => setCurrentStep((activeStep) => activeStep + 1);
    const handlePreviousStep = () => setCurrentStep((activeStep) => activeStep - 1);

    // eslint-disable-next-line consistent-return
    const displayContent = useCallback(() => {
        switch (currentStep) {
            case 1:
                return <RenderPageOne onClick={handleNextStep} />;
            case 2:
                return <RenderPageTwo onClose={closeModal} />;
            default:
                break;
        }
    }, [currentStep, closeModal]);

    return (
        <SendBuddieModal
            title="Verify Account"
            isOpen={isOpen}
            closeModal={closeModal}
            goBack={handlePreviousStep}
            backdrop={false}
            hasBackArrow={currentStep !== 1}
        >
            <div className="flex flex-col gap-4 p-6 pb-14">{displayContent()}</div>
        </SendBuddieModal>
    );
}
