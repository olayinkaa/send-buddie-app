import { lazy } from "react";
import { Navigate } from "react-router-dom";
//
import Landing from "@/pages/Landing";
import RegisterCorporateSuccess from "@/pages/RegisterCorporateSuccess";
import RegisterOtp2 from "@/pages/RegisterOtp2";
import KycDocumentUpload from "@/pages/kyc-document-upload/KycDocumentUpload";
import KycDocumentReupload from "@/pages/KycDocumentReupload";
import Receipt from "@/pages/Receipt";
// PRIVATE ROUTE ==============================================>
import DashboardCorporate from "@/pages/dashboard-corporate/DashboardCorporate";
import DashboardBeneficiary from "@/pages/dashboard-beneficiary/DashboardBeneficiary";
import DashboardTransactions from "@/pages/dashboard-transaction/DashboardTransactions";
import DashboardCurrencySwap from "@/pages/dashboard-currency-swap/DashboardCurrencySwap";
import DashboardCorporate2 from "@/pages/DashboardCorporate2";
import DashboardOpenWallet from "@/pages/dashboard-open-wallet/DashboardOpenWallet";
// LAYOUT =====================================================>
import PublicLayout from "@/features/PublicLayout";
import OnBoardingLayout from "@/features/OnBoardingLayout";
import PrivateLayout from "@/features/PrivateLayout";
import DashboardProfileLayout from "@/features/dashboard-profile-layout/DashboardProfileLayout";
// lOGIC ROUTE
/**
 * protected route - cannot be access without authentication (login)
 */
import ProtectedRoute from "./protected-route";
/**
 * public route - cannot be access on successful authentication (login)
 */
import PublicRoute from "./public-route";
/**
 * GuardRoute - use to prevent access without permission after authentication
 */
import GuardRoute from "./guard";
// PUBLIC ROUTE - LAZY LOAD
const Home = lazy(() => import("@/pages/Home"));
const Faq = lazy(() => import("@/pages/faq/Faq"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const About = lazy(() => import("@/pages/About"));
const TermsAndCondition = lazy(() => import("@/pages/terms-and-condition/TermsAndCondition"));
const Login = lazy(() => import("@/pages/login/Login"));
const SignUpOption = lazy(() => import("@/pages/SignUpOption"));
const RegisterAccount = lazy(() => import("@/pages/register-account/RegisterAccount"));
const RegisterOtp = lazy(() => import("@/pages/register-otp/RegisterOtp"));
const SendOtp = lazy(() => import("@/pages/SendOtp"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
const ChangePassword = lazy(() => import("@/pages/ChangePassword"));
// WELCOME ROUTE
const WelcomeProfile = lazy(() => import("@/pages/WelcomeProfile"));
// PRIVATE ROUTE ==============================================>
// const PersonalInformation = lazy(() => import("../../pages/dashboard-profile/PersonalInformation"));
const AccountInformation = lazy(() => import("@/pages/dashboard-profile/account-information"));
const AccountLimits = lazy(() => import("@/pages/dashboard-profile/account-information/AccountLimits"));
const AccountStatement = lazy(() => import("@/pages/dashboard-profile/account-information/AccountStatement"));
const Profile = lazy(() => import("@/pages/dashboard-profile/account-information/Profile"));
const BankCards = lazy(() => import("@/pages/dashboard-profile/BankCards"));
const KycSubmission = lazy(() => import("@/pages/dashboard-profile/KycSubmission"));
// const Security = lazy(() => import("../../pages/dashboard-profile/Security"));
const LoginAndSecurity = lazy(() => import("@/pages/dashboard-profile/login-and-security"));
const SecurityChangePassword = lazy(() => import("@/pages/dashboard-profile/login-and-security/ChangePassword"));
const ChangeTransactionPin = lazy(() => import("@/pages/dashboard-profile/login-and-security/ChangeTransactionPin"));
const Notification = lazy(() => import("@/pages/dashboard-profile/login-and-security/Notification"));
const Team = lazy(() => import("@/pages/dashboard-profile/team/Team"));
const InviteTeamMember = lazy(() => import("@/pages/dashboard-profile/team/InviteTeamMember"));

const routesConfig = [
    {
        path: "",
        element: (
            <PublicRoute>
                <PublicLayout />,
            </PublicRoute>
        ),
        children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/faq", element: <Faq /> },
            { path: "/privacy", element: <Privacy /> },
            { path: "/about", element: <About /> },
            { path: "/terms-and-conditions", element: <TermsAndCondition /> },
            { path: "/landing", element: <Landing /> },
            { path: "/register-otp2", element: <RegisterOtp2 /> },
            { path: "/kyc-reupload", element: <KycDocumentReupload /> },
            { path: "/receipt", element: <Receipt /> },
        ],
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    { path: "/register-corporate-success", element: <RegisterCorporateSuccess /> },
    {
        path: "/reset-password",
        element: (
            <PublicRoute>
                <ResetPassword />
            </PublicRoute>
        ),
    },
    {
        path: "/verification",
        element: (
            <PublicRoute>
                <SendOtp />
            </PublicRoute>
        ),
    },
    {
        path: "/change-password",
        element: (
            <PublicRoute>
                <ChangePassword />
            </PublicRoute>
        ),
    },
    {
        path: "/signup-option",
        element: (
            <PublicRoute>
                <SignUpOption />
            </PublicRoute>
        ),
    },
    {
        path: "/",
        element: (
            <PublicRoute>
                <OnBoardingLayout />
            </PublicRoute>
        ),
        children: [
            { path: "register-account", element: <RegisterAccount /> },
            { path: "/register-otp", element: <RegisterOtp /> },
        ],
    },
    {
        path: "/welcome-profile",
        element: <WelcomeProfile />,
    },
    {
        path: "/",
        element: <OnBoardingLayout />,
        children: [{ path: "/kyc-upload", element: <KycDocumentUpload /> }],
        // path: "/kyc-upload",
        // element: <KycDocumentUpload />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <PrivateLayout />
            </ProtectedRoute>
            // <PrivateLayout />
        ),
        children: [
            // { path: "/dashboard", element: <GuardRoute component={<DashboardCorporate />} /> },
            { path: "/dashboard", element: <DashboardCorporate /> },
            { path: "/open-wallet", element: <DashboardOpenWallet /> },
            { path: "/beneficiary", element: <GuardRoute component={<DashboardBeneficiary />} /> },
            { path: "/transactions", element: <GuardRoute component={<DashboardTransactions />} /> },
            { path: "/currency-swap", element: <GuardRoute component={<DashboardCurrencySwap />} /> },
            // TODO: remember to remove below line 83
            { path: "/dashboard2", element: <DashboardCorporate2 /> },
            {
                path: "/profile",
                element: <DashboardProfileLayout />,
                children: [
                    // { path: "/profile", element: <GuardRoute component={<PersonalInformation />} /> },
                    { path: "", element: <GuardRoute component={<AccountInformation/>} /> },
                    { path: "security", element: <GuardRoute component={<LoginAndSecurity/>} /> },
                    { path: "change-password", element: <GuardRoute component={<SecurityChangePassword />} /> },
                    { path: "transaction-pin", element: <GuardRoute component={<ChangeTransactionPin />} /> },
                    { path: "notification", element: <GuardRoute component={<Notification/>} /> },
                    { path: "team", element: <GuardRoute component={<Team/>} /> },
                    { path: "invite-team-member", element: <GuardRoute component={<InviteTeamMember/>} /> },
                    // =============>
                    { path: "account-information", element: <GuardRoute component={<Profile/>} /> },
                    { path: "account-statement", element: <GuardRoute component={<AccountStatement/>} /> },
                    { path: "account-limits", element: <GuardRoute component={<AccountLimits/>} /> },
                    { path: "bank-and-card", element: <GuardRoute component={<BankCards />} /> },
                    { path: "kyc-submission", element: <GuardRoute component={<KycSubmission />} /> },
                    // { path: "security", element: <GuardRoute component={<Security />} /> },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/login" />,
    },
];

export default routesConfig;
