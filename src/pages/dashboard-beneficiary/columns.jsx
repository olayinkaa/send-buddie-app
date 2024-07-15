/* eslint-disable import/prefer-default-export */
// import { BiTrash } from "react-icons/bi";

export const COLUMNS = [
    {
        Header: "S/n",
        accessor: "id",
        Cell: ({row}) => {return row.index + 1}
    },
    {
        Header: "Name",
        accessor: "names",
    },
    {
        Header: "Country",
        accessor: "countryCode",
    },
    {
        Header: "Beneficiary Type",
        accessor: "beneficiaryType",
    },
    {
        Header: "Account Number",
        accessor: "accountNumber",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "",
        accessor: "uuid",
    },
];
