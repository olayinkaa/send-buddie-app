export default function getBeneficiaryType(type) {
    let result = "";
    switch (type) {
        case "SENDBUDDIE":
            result = "SendBuddie";
            break;
        case "PREPAID_CARD":
            result = "Prepaid Card";
            break;
        case "MOBILE_WALLET":
            result = "Mobile Wallet";
            break;
        case "BANK":
            result = "Bank";
            break;
        default:
            result = "";
            break;
    }
    return result;
}
