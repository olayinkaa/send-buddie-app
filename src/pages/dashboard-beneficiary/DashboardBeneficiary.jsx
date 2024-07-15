import { useMemo, useReducer } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";
import Gravatar from "react-gravatar";
import MetricSvg2 from "@/assets/images/MetricSvg2";
import CreateBeneficiaryModal from "@/features/dashboard/beneficiary/CreateBeneficiaryModal";
import { useGetBeneficiaries, useDeleteBeneficiary, queryKeys } from "@/react-query";
import { SendBuddieTable, SendBuddieSweetAlert, SendBuddieSkeletonLoader } from "@/components/@ui-kits";
import { reducer, initialState } from "./reducer";
import { notification, beneficiaryType } from "@/utils";
import BeneficiaryCard from "@/components/BeneficiaryCard";
// import BeneficiaryCardSkeleton from "./BeneficiaryCardSkeleton";

const ERROR_STATUS = [400];
const SUCCESS_STATUS = [200, "200"];

function DashboardBeneficiary() {
    const queryClient = useQueryClient();
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { beneficiaryModal, removeBeneficiaryModal, selectedItem } = state;
    
    /** GET BENEFICIARIES */
    const { beneficiaries, topRecentBeneficiaries, isLoadingBeneficiaries } = useGetBeneficiaries();
    /**
     * Delete Beneficiaries
     */
    const onDeleteSuccess = (res) => {
        const { status, data, response: errorResponse } = res;
        if (ERROR_STATUS?.includes(errorResponse?.status)) {
            notification({ message: errorResponse?.data.message, status: "error", direction: "top-right" });
        }
        if (SUCCESS_STATUS?.includes(status)) {
            queryClient.invalidateQueries([queryKeys.GET_BENEFICIARIES]);
            notification({ message: data?.message, status: "info", direction: "top-right" });
            runDispatch({ type: "closeRemoveBeneficiaryModal" });
        }
    };
    const { deleteBeneficiary, isDeletingBeneficiary } = useDeleteBeneficiary({ onSuccess: onDeleteSuccess });
    /**
     * Table columns - headers
     */
    const COLUMNS = useMemo(() => {
        return [
            {
                Header: "Name",
                accessor: "names",
                // eslint-disable-next-line react/no-unstable-nested-components
                Cell: ({ value, row }) => {
                    return (
                        <div className="inline-flex items-center gap-2">
                            {/* <SendBuddiePlaceholder/> */}
                            <Gravatar
                                email={row?.values?.email}
                                className="rounded-full"
                                rating="g"
                                size={45}
                                // protocol="https://"
                                default="mp"
                            />
                            <span className="font-medium">{value}</span>
                        </div>
                    );
                },
            },
            {
                Header: "Country",
                accessor: "countryCode",
            },
            {
                Header: "Beneficiary Type",
                accessor: "beneficiaryType",
                Cell: ({ value }) => beneficiaryType(value),
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
                // eslint-disable-next-line react/no-unstable-nested-components
                Cell: ({ row }) => {
                    return (
                        <button
                            type="button"
                            onClick={() => {
                                runDispatch({ type: "openRemoveBeneficiaryModal" });
                                runDispatch({ type: "setSelectedItem", payload: row?.values });
                            }}
                        >
                            <BiTrash fontSize={20} className="text-red-300" />
                        </button>
                    );
                },
            },
        ];
    }, []);
    /**
     * 
     */
    const messageText = (
        <p className="text-lg">
            Delete <span className="font-bold">{selectedItem.names}</span> as Beneficiary
        </p>
    );

    return (
        <>
            <div className="w-full p-4">
                <div className="mx-auto flex w-[95%] gap-4">
                    {/* left side */}
                    <div className="flex w-9/12 flex-col">
                        {/* content 1 */}
                        <h2 className="mb-2 text-lg">Recent </h2>
                        <div className="mb-10 grid grid-cols-5 gap-3">
                            <button
                                type="button"
                                className="
                                flex flex-col items-center justify-center
                                rounded-xl border border-neutral-200 p-10
                                transition duration-1000 hover:scale-90
                                "
                                onClick={() => runDispatch({ type: "openBeneficiaryModal" })}
                            >
                                <MdOutlineAddCircle fontSize={30} className="text-blue-500" />
                                <span className="mt-2 font-medium">Add Beneficiary</span>
                            </button>
                            {/* {isLoadingBeneficiaries && (
                                <div className="flex gap-3">
                                    <BeneficiaryCardSkeleton card={4} />
                                </div>
                            )} */}
                            {topRecentBeneficiaries?.map((beneficiary) => (
                                <BeneficiaryCard key={beneficiary.uuid} beneficiary={beneficiary} />
                            ))}
                        </div>
                        {/* content 4 */}
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-2xl">All Beneficiaries</h4>
                            {isLoadingBeneficiaries ? (
                                <SendBuddieSkeletonLoader height={20} count={20} />
                            ) : (
                                <SendBuddieTable
                                    data={beneficiaries}
                                    columns={COLUMNS}
                                    isHeader={false}
                                    noDataMessage="You have not added any beneficiary on here yet"
                                    className="border-b"
                                />
                            )}
                        </div>
                    </div>
                    {/* right side */}
                    <div className="mt-8 h-full w-3/12 rounded-xl border border-neutral-200 bg-blue-brand py-3 text-white">
                        <div className="flex flex-col items-center">
                            <div className="py-10">
                                <MetricSvg2 />
                            </div>
                            <p className="mb-1 text-center font-medium">Send money</p>
                            <p className="mb-10 text-center font-medium">Send money to family and friends</p>
                            <div className="w-full px-6 py-5">
                                <button type="button" className="btn-white block w-full">
                                    Send Money
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {beneficiaryModal && (
                <CreateBeneficiaryModal
                    isOpen={beneficiaryModal}
                    closeModal={() => runDispatch({ type: "closeBeneficiaryModal" })}
                    backdrop={false}
                />
            )}
            {removeBeneficiaryModal && (
                <SendBuddieSweetAlert
                    isOpen={removeBeneficiaryModal}
                    onCancel={() => runDispatch({ type: "closeRemoveBeneficiaryModal" })}
                    onConfirm={() => deleteBeneficiary(selectedItem?.uuid)}
                    message={messageText}
                    confirmText="Continue"
                    isLoadingText="Please wait"
                    backdrop={false}
                    icon="delete_icon"
                    isLoading={isDeletingBeneficiary}
                    // disabled={isDeletingBeneficiary}
                    hasAnimation={false}
                    hasCancelBtn
                />
            )}
        </>
    );
}

export default DashboardBeneficiary;
