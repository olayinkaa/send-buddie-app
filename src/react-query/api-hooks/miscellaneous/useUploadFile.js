import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import  { CancelToken} from "axios";
import { AuthHTTP } from "../../../utils";

const useUploadFile = () => {
    const [completed, setCompleted] = useState(0);
	const cancelFileUpload = useRef(null);
    const Mutation = useMutation((requestPayload) => {
        return AuthHTTP.post(`/api/v1/miscellaneous/file-upload`, requestPayload, {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "*/*"
            },
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                const percentCompleted = Math.floor((loaded * 100) / total);
                if (percentCompleted < 100) {
                    setCompleted(percentCompleted);
                }
            },
            // eslint-disable-next-line no-return-assign
            cancelToken: new CancelToken(cancel=> cancelFileUpload.current = cancel),
        });
    });

    const { mutateAsync, data, isLoading } = Mutation;

    return {
        uploadFile: mutateAsync,
        isUploadingFile: isLoading,
        uploadFileResponse: data,
        loadingCompleted: completed,
        resetProgressBar: setCompleted,
        cancelFileUpload
    };
};

export default useUploadFile;
