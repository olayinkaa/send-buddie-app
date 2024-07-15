export const VALIDATE_EMAIL = {
    value: /.{2,}@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/i,
    message: "Please enter a valid email address",
};

export const ALPHABET_ONLY = {
    value: /^[A-Za-z\s]+$/,
    message: "Please enter alphabets only",
};
