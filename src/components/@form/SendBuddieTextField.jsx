/* eslint-disable react/prop-types */
import React from "react";
import { useController } from "react-hook-form";
import clsx from "classnames";

export default function SendBuddieTextField({
    asterik,
    type,
    control,
    name,
    label,
    rules,
    className,
    children,
    ...props
}) {
    const {
        field: { onChange, onBlur, value },
        fieldState: { isTouched },
        formState: { errors },
    } = useController({
        name,
        control,
        rules,
    });

    const validateField = clsx({
        "ring-1 ring-red-500 border-none focus:!ring-1 focus:!ring-red-500": isTouched && !!errors[name]?.message,
        "ring-1 ring-red-600 border-none focus:!ring-1 focus:!ring-red-500": !!errors[name]?.message,
        // "ring-1 ring-green-500 ": !errors[name]?.message && isTouched,
    });

    const baseClass = clsx("input-control", className);

    return (
        <>
            <label htmlFor="" className="input-label flex justify-between">
                <p>
                    {label}&nbsp;
                    {asterik && <span className="text-red-600">*</span>}
                </p>
                {children || ""}
            </label>
            <input
                type={type}
                name={name}
                autoComplete="off"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={clsx(baseClass, validateField)}
                data-cy={name} // use for cypress testing selectorpay
                {...props}
            />
            {errors[name] && (
                <span className="mt-1 text-sm text-red-700" data-cy={name}>
                    {errors[name] && errors[name].message}
                </span>
            )}
        </>
    );
}

SendBuddieTextField.defaultProps = {
    type: "text",
};
