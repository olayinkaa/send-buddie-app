import listOfDocuments from "./constants";

export const initialState = {
    isProgressBarModal:false,
    isKycSuccessModal:false,
    businessDocuments:[...listOfDocuments]
}

export const reducer = (state, action)=> {
    const {type, payload} = action
    switch(type){
        case "openProgressBarModal":
            return {
                ...state,
                isProgressBarModal:true
            }
        case "closeProgressBarModal":
            return {
                ...state,
                isProgressBarModal: false
            }
        case "openKycSuccessModal":
            return {
                ...state,
                isKycSuccessModal: true
            }
        case "closeKycSuccessModal":
            return {
                ...state,
                isKycSuccessModal: false
            }
        case "updateBusinessDocuments":
            return {
                ...state,
                businessDocuments:payload
            }
        default:
            return state
    }
}