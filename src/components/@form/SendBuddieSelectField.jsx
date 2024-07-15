/* eslint-disable react/prop-types */
import React from "react";
import { useController } from "react-hook-form";
import clsx from "classnames";

export default function SendBuddieSelectField({
    asterik,
    className,
    control,
    options,
    label,
    name,
    optionTitle,
    optionValue,
    optionLabel,
    rules,
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
        "ring-1 ring-red-600 border-none focus:!ring-1 focus:!ring-red-500":  !!errors[name]?.message,
        // "ring-1 ring-green-500 ": !errors[name]?.message && isTouched,
    });

   

    const baseClass = clsx("rounded-[4px] border-gray-400 focus:ring-1", className);

    return (
        <>
            <label htmlFor="" className="input-label">
                {label}&nbsp;{asterik && <span className="text-red-600">*</span>}
            </label>
            <select
                name={name}
                id={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                data-cy={name}
                className={clsx(baseClass, validateField)}
                {...props}
            >
                <option value="">{optionTitle}</option>
                {options?.map((data, index) => {
                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <option key={index} value={data[optionValue]}>
                            {data[optionLabel]}
                        </option>
                    );
                })}
            </select>
            <span className="text-sm text-red-700 mt-1">{errors[name] && errors[name].message}</span>
        </>
    );
}

SendBuddieSelectField.defaultProps = {
    optionTitle: "",
    optionValue: "value",
    optionLabel: "label",
    options: [],
    asterik: false,
};
