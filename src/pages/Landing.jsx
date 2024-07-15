import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <Link to="/account-success">Account Success</Link>
                <Link to="/reset-password">Reset Password</Link>
                <Link to="/change-password">Change Password</Link>
                <Link to="/verification">Send Otp</Link>
                <Link to="/signup-option">Sign up option</Link>
                <Link to="/register-corporate-success">Register corporate success</Link>
                <Link to="/register-otp">Register Otp</Link>
                <Link to="/register-otp2">Register Otp 2</Link>
                <Link to="/register-account">Register Account</Link>
                <Link to="/kyc-upload">Kyc Upload Document</Link>
                <Link to="/kyc-reupload">Kyc reupload Document</Link>
                <Link to="/receipt">Receipt</Link>
            </div>
        </div>
    );
}

export default Landing;
