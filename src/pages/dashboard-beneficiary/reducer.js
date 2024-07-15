export const initialState = {
    beneficiaryModal:false,
    removeBeneficiaryModal:false,
    selectedItem: {}
}

export const reducer = (state, action)=> {
    const {type, payload} = action
    switch(type){
        case "closeBeneficiaryModal":
            return {
                ...state,
                beneficiaryModal:false
            }
        case "openBeneficiaryModal":
            return {
                ...state,
                beneficiaryModal: true
            }
        case "openRemoveBeneficiaryModal":
            return {
                ...state,
                removeBeneficiaryModal:true
            }
        case "closeRemoveBeneficiaryModal":
            return {
                ...state,
                removeBeneficiaryModal:false,
                selectedItem:{}
            }
        case "setSelectedItem": 
            return {
                ...state,
                selectedItem: payload
            }
        default:
            return state
    }
}