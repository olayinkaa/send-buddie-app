/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import clsx from "classnames";

let currenPinIndex = 0;

export default function SendBuddiePinInputField({ label, name, pin, setPin, className, ...props }) {
    const [activePinIndex, setActivePinIndex] = useState(0);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const { value } = e.target;
        const newPin = [...pin];
        newPin[currenPinIndex] = value?.substring(value.length - 1);
        setPin(newPin);
        if (!value) {
            setActivePinIndex(currenPinIndex - 1);
        } else {
            setActivePinIndex(currenPinIndex + 1);
        }
    };

    const handleOnKeyDown = (e, index) => {
        currenPinIndex = index;
        if (e.key === "Backspace") setActivePinIndex(currenPinIndex - 1);
    };

    useEffect(() => {
        inputRef?.current?.focus();
    }, [activePinIndex, pin]);

    const baseClass = clsx(
        `
        placeholder:text-center text-center text-2xl p-2
        border border-gray-400 text-center text-lg`,
        className,
    );

    return (
        <>
            {label && (
                <label htmlFor="PIN" className="input-label">
                    {label}
                </label>
            )}
            <div className="mt-2 flex gap-8">
                {pin.map((_, index) => (
                    <input
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        ref={index === activePinIndex ? inputRef : null}
                        autoComplete="new-password"
                        maxLength={1}
                        className={baseClass}
                        onChange={handleChange}
                        onKeyDown={(e) => handleOnKeyDown(e, index)}
                        value={pin[index]}
                        data-cy={name}
                        {...props}
                    />
                ))}
            </div>
        </>
    );
}

SendBuddiePinInputField.defaultProps = {
    className: "",
    type: "text",
};
