import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import clsx from "classnames";
import { SendBuddieTextField } from "@/components/@form";
import { SendBuddieButton } from "@/components/@ui-kits";
import { VALIDATE_EMAIL } from "@/utils/validators";
import { useUserAuth } from "../../react-query";
import { Container, Form } from "./style";

export default function Login() {
    const firstName = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    const [isUser, setIsUser] = useState(false);
    const { control, handleSubmit } = useForm({
        mode: "all",
        defaultValues: {
            password: "",
            username:  email || "", // if firstName exist, use the email, else set it to empty string
            rememberMe: false,
        },
    });

    const { loginUser, isLogingUser } = useUserAuth();
    
    const handleAuthentication = (values) => {
        loginUser(values);
    };

    useEffect(() => {
        // if username exist return true
        if (firstName !== "null" && firstName !== undefined) {
            setIsUser(true);
        }
    }, [firstName]);

    // if(1 >  0.5 ){
    //     return new Error("Test Error Boundary")
    // }

   

    return (
        <Container>
            <h5 className="mb-3 space-x-2 text-3xl font-medium">
                {isUser ? (
                    <span>Welcome back, {firstName}</span>
                ) : (
                    <>
                        <span>Sign in to</span>
                        <Link to="/" className="hover:text-green-500 hover:underline">
                            SendBuddie
                        </Link>
                    </>
                )}
            </h5>
            {/* <pre>{JSON.stringify(watch(),null,2)}</pre> */}
            <Form>
                {!isUser && 
                <div className="p-3">
                    <SendBuddieTextField
                        type="email"
                        control={control}
                        label="Email address"
                        autoComplete="on"
                        name="username"
                        rules={{
                            required: {
                                value: true,
                                message: "Email address is required",
                            },
                            pattern: VALIDATE_EMAIL,
                        }}
                    />
                </div>}
                <div className="p-4">
                    <SendBuddieTextField
                        type="password"
                        control={control}
                        label="Password"
                        name="password"
                        placeholder="*********"
                        rules={{
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                        }}
                    >
                        <Link to="/reset-password" className="text-base text-green-400">
                            Forgot password?
                        </Link>
                    </SendBuddieTextField>
                </div>
                <div className="mb-3 p-4">
                    <SendBuddieButton
                        title="Login"
                        onClick={handleSubmit(handleAuthentication)}
                        className="w-full"
                        isLoadingText="Please wait"
                        isLoading={isLogingUser}
                    />
                </div>
            </Form>
            {isUser ? (
                <div className="flex items-center gap-1 mt-3">
                    <span>Not {firstName} ?</span>
                    <button type="button" className="text-green-500" onClick={() => setIsUser(!isUser)}>
                        Switch account
                    </button>
                </div>
            ) : (
                <Link to="/signup-option" className="m-3 hover:underline">
                    <span>New here ?</span> &nbsp;
                    <span className="text-green-500">Create a new account</span>
                </Link>
            )}

            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </Container>
    );
}
