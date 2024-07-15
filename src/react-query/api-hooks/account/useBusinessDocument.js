import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/utils";

const uploadDocuments = async (requestPayload) => {
    try {
        const response = await HTTP.post(`/api/v1/account/update-business-documents`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
};

const useBusinessDocument = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(uploadDocuments, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading} = Mutation;
    return {
        uploadBusinessDocument:mutate,
        isUploadingBusinessDocument:isLoading,
        uploadBusinessDocumentResponse:data,
    };
};

export default useBusinessDocument;
