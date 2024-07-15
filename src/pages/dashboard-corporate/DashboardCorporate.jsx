import { useState, useCallback, useReducer } from "react";
import { MdOutlineAddCircle, MdChevronRight } from "react-icons/md";
import { BiTransferAlt, BiSend, BiMoney, BiPlusCircle } from "react-icons/bi";
import _ from "lodash";
import flag1 from "@/assets/images/flag_1.png";
// import { dataObj } from "../../data/dashboard-page-data";
import { useGetUserAccountInfo, useGetBeneficiaries } from "@/react-query";
import CreateWallet from "@/features/dashboard/wallet/CreateWallet";
import { reducer, initialState } from "./reducer";
import {
    EnterAmount,
    ChooseAccount,
    ChoosePaymentModal,
    BankCard,
    EnterPin,
    DepositSummary,
    SuccessSummary,
} from "@/features/dashboard/fund-account";
import WalletCard from "./WalletCard";
import BeneficiaryCard from "@/components/BeneficiaryCard";
import { SendBuddieTable, SendBuddieSweetAlert } from "@/components/@ui-kits";
import { FeatureButton } from "@/styles";
import { NewBeneficiaryButton } from "./style";
import { useAuth } from "@/hooks";
import { BUSINESS_ACCOUNT, PERSONAL_ACCOUNT } from "@/utils/constant";
import CreateBeneficiaryModal from "@/features/dashboard/beneficiary/CreateBeneficiaryModal";
import VerifyIdentityModal from "@/features/dashboard/verify-identity/VerifyIdentityModal";

const message = (
    <p>
        <h3 className="mb-1 text-2xl font-medium">Successful!</h3>
        <h4 className="text-lg">
            Your account is currently undergoing compliance review, please exercise patience as you will be notified
            within the next 3 working days
        </h4>
    </p>
);

export default function DashboardCorporate() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVerifyId, setIsVerifyId] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [state, runDispatch] = useReducer(reducer, initialState);
    const { hasWalletModal, beneficiaryModal } = state;
    const {
        authState: { isConfirmDocumentUpdated, role, user },
        logout,
        dispatch,
    } = useAuth();
    /**
     *
     */
    const isReviewingDocuments = role === BUSINESS_ACCOUNT && isConfirmDocumentUpdated;
    const isPersonalUser = role === PERSONAL_ACCOUNT;
    /**
     *
     */
    const { UserAccountResponse: account } = useGetUserAccountInfo();
    /**
     *
     */
    const noWallet = account?.wallets && _.isEmpty(account?.wallets);
    /**
     *
     */
    const closeModal = () => {
        setIsOpen(false);
        // TODO::remember to uncomment below
        // setCurrentStep(1)
    };
    const openModal = () => {
        setIsOpen(true);
    };
    /**
     *GET BENEFICIARIES
     */
    const { topRecentBeneficiaries } = useGetBeneficiaries();
    /**
     *
     * @returns
     */
    const handleFundAccountNext = () => setCurrentStep((activeStep) => activeStep + 1);

    const displayFundAccountStep = useCallback(
        (step) => {
            let render;
            switch (step) {
                case 1:
                    render = (
                        <ChoosePaymentModal
                            isOpen={isOpen}
                            closeModal={closeModal}
                            backdrop={false}
                            onClick={handleFundAccountNext}
                        />
                    );
                    break;
                case 2:
                    render = (
                        <ChooseAccount
                            isOpen={isOpen}
                            closeModal={closeModal}
                            backdrop={false}
                            onClick={handleFundAccountNext}
                        />
                    );
                    break;
                case 3:
                    render = <EnterAmount isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 4:
                    render = <BankCard isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 5:
                    render = <EnterPin isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 6:
                    render = <DepositSummary isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 7:
                    render = <SuccessSummary isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                default:
                    closeModal();
                    break;
            }
            return isOpen && render;
        },
        [isOpen],
    );

    return (
        <>
            <div className="w-full p-4">
                <div className="mx-auto flex flex-col w-[95%] gap-4">
                    {/* content 1 */}
                    <section className="flex w-full flex-col gap-8">
                        {noWallet && isPersonalUser && (
                            <section>
                                <div className="flex flex-col gap-2 bg-inactive-brand p-5 rounded-2xl">
                                    <h2 className="text-2xl font-medium">
                                        Verify your identity,{" "}
                                        <span className="text-blue-500 font-medium">{user?.firstName}</span>
                                    </h2>
                                    <h4 className="text-gray-500">
                                        We are required by law to verify your identity before you can start sending.
                                    </h4>
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-blue-200 text-blue-500 px-4 py-2 rounded-lg"
                                            onClick={() => setIsVerifyId(true)}
                                        >
                                            Verify Identity
                                        </button>
                                    </div>
                                </div>
                            </section>
                        )}
                        {noWallet ? (
                            <section>
                                <div className="flex flex-col gap-4 rounded-xl bg-blue-brand px-5 py-10 text-white">
                                    <h3 className="text-xl">Create Wallet to get started</h3>
                                    <p className="max-w-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis adipisci
                                        accusantium maiores mollitia ut cum numquam repellat aliquid nesciunt.
                                    </p>
                                    <button
                                        type="button"
                                        className="flex items-center gap-2"
                                        onClick={() => runDispatch({ type: "openWalletModal" })}
                                    >
                                        <BiPlusCircle fontSize={20} />
                                        <span>Create Wallet</span>
                                    </button>
                                </div>
                            </section>
                        ) : (
                            <div>
                                <h2 className="mb-2 text-lg">Account Balance</h2>
                                <div className="grid grid-cols-4 gap-4">
                                    {account?.wallets.map((wallet) => (
                                        <WalletCard key={wallet.uuid} wallet={wallet} />
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* Feature button list  */}
                        <div className="grid grid-cols-4 gap-4 my-4">
                           
                            <FeatureButton type="button" isPrimary>
                                <span className="mr-2 rounded-md bg-black text-white">
                                    <BiSend fontSize={20} className="bg-blue-brand text-white" />
                                </span>
                                <span>Send money</span>
                            </FeatureButton>{" "}
                            <FeatureButton type="button">
                                <span className="mr-2  rounded-md bg-black text-white">
                                    <BiTransferAlt fontSize={20} className="" />
                                </span>
                                <span>Exchange</span>
                            </FeatureButton>
                            <FeatureButton type="button" onClick={openModal}>
                                <span className="mr-2 rounded-md bg-black text-white">
                                    <BiMoney fontSize={20} className="" />
                                </span>
                                <span>Fund account</span>
                            </FeatureButton>
                            <FeatureButton type="button" onClick={() => runDispatch({ type: "openWalletModal" })}>
                                <span className="mr-2  rounded-md bg-black text-white">
                                    <BiPlusCircle fontSize={20} className="" />
                                </span>
                                <span>Add wallet</span>
                            </FeatureButton>
                        </div>
                    </section>
                    <section className="flex justify-between gap-4">
                        <div className="w-9/12">
                            {/* content 3 */}
                            <div className="grid grid-cols-5 gap-3">
                                <NewBeneficiaryButton
                                    type="button"
                                    onClick={() => runDispatch({ type: "openBeneficiaryModal" })}
                                >
                                    <MdOutlineAddCircle fontSize={30} className="text-blue-500" />
                                    <span className="mt-2 font-medium">Add Beneficiary</span>
                                </NewBeneficiaryButton>
                                {topRecentBeneficiaries?.map((beneficiary) => (
                                    <BeneficiaryCard key={beneficiary.uuid} beneficiary={beneficiary} />
                                ))}
                            </div>
                            {/* content 4 */}
                            <div className="flex flex-col space-y-2 mt-4">
                                <h4 className="text-lg">Activities</h4>
                                <div>
                                    <SendBuddieTable
                                        data={[]}
                                        columns={[]}
                                        isHeader={false}
                                        noDataMessage="You have not made any transactions on here yet"
                                        className="border-b"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-3/12">
                            <section className="rounded-xl border border-neutral-200 bg-inactive-brand py-3">
                                <div className="flex flex-col p-5 gap-3">
                                    <h3>Account Information</h3>
                                    <div className="flex flex-col gap-3 bg-white p-4 rounded-lg">
                                        <h4>Account limits</h4>
                                        <img src={flag1} className="w-8 h-8 rounded-full" alt="" />
                                        <div>
                                            <h3 className="font-medium"> $ 5,000.00 left of</h3>
                                            <h3 className="text-gray-400 font-medium">$ 5,000,000</h3>
                                        </div>
                                        <div>
                                            <button type="button" className="flex items-center gap-2 text-blue-brand ">
                                                <span>Learn more</span>
                                                <MdChevronRight fontSize={20} />
                                            </button>
                                        </div>
                                    </div>{" "}
                                    <div className="flex flex-col gap-3 bg-white p-4 rounded-lg">
                                        <h4>Exchange rate</h4>
                                        <img src={flag1} className="w-8 h-8 rounded-full" alt="" />
                                        <div>
                                            <h3 className="font-medium">1 GBP =</h3>
                                            <h3 className="text-gray-400 font-medium">962.00 NGN</h3>
                                        </div>
                                        <div>
                                            <button type="button" className="flex items-center gap-2 text-blue-brand ">
                                                <span>More rates</span>
                                                <MdChevronRight fontSize={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    {/* right side */}
                </div>
            </div>
            {hasWalletModal && (
                <CreateWallet
                    isOpen={hasWalletModal}
                    closeModal={() => runDispatch({ type: "closeWalletModal" })}
                    backdrop={false}
                    accountDetails={account}
                />
            )}
            {beneficiaryModal && (
                <CreateBeneficiaryModal
                    isOpen={beneficiaryModal}
                    closeModal={() => runDispatch({ type: "closeBeneficiaryModal" })}
                    backdrop={false}
                />
            )}
            {isReviewingDocuments && (
                <SendBuddieSweetAlert
                    isOpen={isReviewingDocuments}
                    onConfirm={() => dispatch(logout())}
                    message={message}
                    confirmText="Ok"
                    backdrop={false}
                    hasCancelBtn={false}
                    opacity={90}
                />
            )}
            {isVerifyId && <VerifyIdentityModal isOpen={isVerifyId} closeModal={() => setIsVerifyId(false)} />}

            {/* TODO: list of all modal components */}
            {/* <ChooseAccount isOpen={isOpen} closeModal={closeModal} backdrop={false}/> */}
            {/* <EnterAmount isOpen={isOpen} closeModal={closeModal} backdrop={false}/> */}
            {/* <EnterPin isOpen={isOpen} closeModal={closeModal} backdrop={false}/> */}
            {displayFundAccountStep(currentStep)}
        </>
    );
}
