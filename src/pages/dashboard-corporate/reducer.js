export const initialState = {
    hasWalletModal: false,
    beneficiaryModal: false,
};

export const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case "closeWalletModal":
            return {
                ...state,
                hasWalletModal: false,
            };
        case "openWalletModal":
            return {
                ...state,
                hasWalletModal: true,
            };
        case "openBeneficiaryModal":
            return {
                ...state,
                beneficiaryModal: true,
            };
        case "closeBeneficiaryModal":
            return {
                ...state,
                beneficiaryModal: false,
            };
        default:
            return state;
    }
};
