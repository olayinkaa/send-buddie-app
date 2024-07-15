import { useEffect, useCallback, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useBusinessDocument, useUploadFile, useGetUserAccountInfo, useTokenRefresh } from "../../react-query";
import { SendBuddieButton, SendBuddieSweetAlert } from "../../components/@ui-kits";
import FileUploadSvg from "../../assets/images/FileUploadSvg";
import ProgressBarModal from "./ProgressBarModal";
import { notification } from "../../utils";
import { reducer, initialState } from "./reducer";

const SUCCESS_STATUS = [200, "200"];

function KycDocumentUpload() {
    const navigate = useNavigate();
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { isProgressBarModal, isKycSuccessModal, businessDocuments } = state;
    const {
        authState: { isAuthenticated },
    } = useAuth();
    /**
     *
     */
    const getUploadProperty = useCallback(
        (id, filter) => {
            return businessDocuments.find((item) => item.id === id)[filter];
        },
        [businessDocuments],
    );
    /**
     *
     */
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);
    /**
     *
     */
    const { uploadFile, loadingCompleted, resetProgressBar, cancelFileUpload } = useUploadFile();
    /**
     *
     */
    const { UserAccountResponse: account } = useGetUserAccountInfo();
    /** Action to call refresh user token */
    const { refreshUserToken } = useTokenRefresh();
    /**
     *
     */
    const goToDashboard = () => {
        navigate("/dashboard");
    };
    /**
     *
     */
    const { uploadBusinessDocument, isUploadingBusinessDocument } = useBusinessDocument({
        onSuccess: (res) => {
            runDispatch({ type: "openKycSuccessModal" });
            refreshUserToken({ "remember-me": true });
            setTimeout(() => goToDashboard(), 3000);
            notification({ message: res?.data?.message, status: "info", direction: "top-right" });
        },
        onError: (err) => {
            notification({ message: err?.response.data.message, status: "error", direction: "top-right" });
        },
    });
    /**
     *
     * @param {*} e
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestPayload = {
            accountNumber: account?.accountNumber,
            additionalDocFileCode: getUploadProperty("additional", "fileCode"),
            addressDocFileCode: getUploadProperty("address", "fileCode"),
            memorandumDocFileCode: getUploadProperty("memorandum", "fileCode"),
            ownershipDocFileCode: getUploadProperty("ownership", "fileCode"),
            registrationDocFileCode: getUploadProperty("registration", "fileCode"),
        };
        uploadBusinessDocument(requestPayload);
    };

    const handleFileUpload = async (e, index) => {
        try {
            const values = [...businessDocuments];
            const file = e.target.files[0];
            const requestPayload = new FormData();
            requestPayload.append("file", file);
            runDispatch({ type: "openProgressBarModal" });
            const { status, data } = await uploadFile(requestPayload);
            if (SUCCESS_STATUS?.includes(status)) {
                values[index].name = file.name;
                values[index].fileCode = data.fileCode;
                runDispatch({ type: "updateBusinessDocuments", payload: values });
                runDispatch({ type: "closeProgressBarModal" });
                resetProgressBar(0);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error });
        }
    };
    /**
     *
     * @param {*} e
     * @param {*} index
     */
    const handleRemoveFile = (e, index) => {
        e.preventDefault();
        const values = [...businessDocuments];
        values[index].name = "";
        values[index].fileCode = "";
        runDispatch({ type: "updateBusinessDocuments", payload: values });
    };
    /**
     *
     */
    const cancelUpload = () => {
        runDispatch({ type: "closeProgressBarModal" });
        if (cancelFileUpload.current) {
            cancelFileUpload.current("File upload cancelled");
            resetProgressBar(0);
        }
    };
    /**
     *
     */
    const disabledUploadButton = businessDocuments.some((item) => item.name === "");
    return (
        <div
            className="
            primary-light-container dark:primary-dark-container col-span-1 
            flex items-center justify-center bg-[center_top_700px] p-8
            dark:bg-dark-brand lg:col-span-2
            "
        >
            <div className="flex w-5/6 flex-col rounded-xl border-2  border-gray-200 p-8 md:w-full lg:w-4/6 xl:w-2/5 ">
                <h2 className="mb-6 text-2xl text-slate-900 dark:text-white">Submit KYC documents</h2>
                <pre className="hidden">{JSON.stringify(businessDocuments, null, 2)}</pre>
                <div className="flex flex-col gap-y-10">
                    {businessDocuments.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className="
                                    inline-flex flex-col items-start bg-gray-brand p-3 
                                    outline-dashed outline-2 outline-offset-2 outline-outline-brand"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <FileUploadSvg />
                                    <h4 className="text-base font-medium">{item.title}</h4>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="file"
                                        className="
                                            relative
                                            z-[2]
                                            block
                                            opacity-0
                                            file:cursor-pointer file:border-0
                                            file:bg-transparent
                                            file:text-blue-brand
                                            file:underline
                                            focus:outline-none
                                            "
                                        accept="application/pdf"
                                        onChange={(e) => handleFileUpload(e, index)}
                                    />
                                    <div className="absolute bottom-0 left-0 z-[1] flex w-full justify-between text-blue-brand underline decoration-blue-brand">
                                        <span className="block truncate flex-1">
                                            {item.name ? item.name : "Upload document"}
                                        </span>
                                        {item.name && (
                                            <button
                                                type="button"
                                                className="text-red-500"
                                                onClick={(e) => handleRemoveFile(e, index)}
                                            >
                                                delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div>
                        <SendBuddieButton
                            title="Upload Documents"
                            onClick={handleSubmit}
                            className="w-full"
                            isLoadingText="Please wait"
                            isLoading={isUploadingBusinessDocument}
                            disabled={disabledUploadButton}
                        />
                    </div>
                </div>
                {isProgressBarModal && (
                    <ProgressBarModal
                        isOpen={isProgressBarModal}
                        closeModal={() => runDispatch({ type: "closeProgressBarModal" })}
                        progressWidth={loadingCompleted}
                        cancelUpload={cancelUpload}
                    />
                )}
                {isKycSuccessModal && (
                    <SendBuddieSweetAlert
                        isOpen={isKycSuccessModal}
                        closeModal={() => runDispatch({ type: "closeKycSuccessModal" })}
                        onConfirm={() => goToDashboard()}
                        message="Kyc documents have been successfully submitted and currently undergoing compliance review"
                        confirmText="Ok"
                        backdrop={false}
                        hasCancelBtn={false}
                    />
                )}
            </div>
        </div>
    );
}

export default KycDocumentUpload;
