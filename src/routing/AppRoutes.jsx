import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ResetPassword from "../pages/ResetPassword";
import ChangePassword from "../pages/ChangePassword";
import SendOtp from "../pages/SendOtp";
import SignUpOption from "../pages/SignUpOption";
import RegisterCorporateSuccess from "../pages/RegisterCorporateSuccess";
import RegisterOtp from "../pages/register-otp/RegisterOtp";
import RegisterOtp2 from "../pages/RegisterOtp2";
import RegisterAccount from "../pages/RegisterAccount";
import KycDocumentUpload from "../pages/KycDocumentUpload";
import KycDocumentReupload from "../pages/KycDocumentReupload";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Receipt from "../pages/Receipt";
import About from "../pages/About";
import Faq from "../pages/faq/Faq";
import TermsAndCondition from "../pages/TermsAndCondition";
import PublicLayout from "../features/PublicLayout";
import Privacy from "../pages/Privacy";
import DashboardCorporate from "../pages/DashboardCorporate";
// TODO: remember to remove DashboardCorporate2
import DashboardCorporate2 from "../pages/DashboardCorporate2";
import DashboardBeneficiary from "../pages/dashboard-beneficiary/DashboardBeneficiary";
import PrivateLayout from "../features/PrivateLayout";
import DashboardTransactions from "../pages/dashboard-transaction/DashboardTransactions";
import DashboardCurrencySwap from "../pages/dashboard-currency-swap/DashboardCurrencySwap";
import DashboardProfileLayout from "../features/DashboardProfileLayout";
import PersonalInformation from "../pages/dashboard-profile/PersonalInformation";
import BankCards from "../pages/dashboard-profile/BankCards";
import KycSubmission from "../pages/dashboard-profile/KycSubmission";
import Security from "../pages/dashboard-profile/Security";
import OnBoardingLayout from "../features/OnBoardingLayout";
import WelcomeProfile from '../pages/WelcomeProfile';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRoute />}>
                    <Route path="/" element={<PublicLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />  {/** */}
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
                    </Route>
                    <Route path="/" element={<OnBoardingLayout />}>
                        <Route path="register-account" element={<RegisterAccount />} />
                    </Route>
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/send-otp" element={<SendOtp />} />
                    <Route path="/signup-option" element={<SignUpOption />} />
                    <Route path="/register-corporate-success" element={<RegisterCorporateSuccess />} />
                    <Route path="/register-otp" element={<RegisterOtp />} />
                    <Route path="/register-otp2" element={<RegisterOtp2 />} />
                    <Route path="/kyc-upload" element={<KycDocumentUpload />} />
                    <Route path="/kyc-reupload" element={<KycDocumentReupload />} />
                    <Route path="/receipt" element={<Receipt />} />
                    <Route path="welcome-profile" element={<WelcomeProfile/>} />

                </Route>
                <Route  element={<PrivateRoute />}>
                    <Route path="/" element={<PrivateLayout />}>
                        <Route path="dashboard" element={<DashboardCorporate />} />
                        {/* TODO: remember to remove DashboardCorporate2 */}
                        <Route path="dashboard2" element={<DashboardCorporate2 />} />
                        <Route path="beneficiary" element={<DashboardBeneficiary />} />
                        <Route path="transactions" element={<DashboardTransactions />} />
                        <Route path="currency-swap" element={<DashboardCurrencySwap />} />
                        <Route path="/profile" element={<DashboardProfileLayout />}>
                            <Route index element={<PersonalInformation />} />
                            <Route path="bank-and-card" element={<BankCards />} />
                            <Route path="kyc-submission" element={<KycSubmission />} />
                            <Route path="security" element={<Security />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
