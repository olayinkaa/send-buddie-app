/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useController } from "react-hook-form";
import Select, { components } from "react-select";
// import makeAnimated from 'react-select/animated';
import { countryFlags } from "../../utils";

const { Option, SingleValue } = components;

function CustomOption(props) {
    const { data } = props;
    return (
        <Option {...props}>
            <div className="flex gap-2">
                {data.flagCode && <img src={countryFlags[data.flagCode]} alt="" className="" />}
                {data.label}
            </div>
        </Option>
    );
}
function CustomSingleValue(props) {
    const { data } = props;
    return (
        <SingleValue {...props}>
            <div className="flex gap-2">
                {data.flagCode && <img src={countryFlags[data.flagCode]} alt="" className="" />}
                {data.label}
            </div>
        </SingleValue>
    );
}

// const animatedComponents = makeAnimated();

export default function SendBuddieReactSelect({ asterik, name, control, label, rules, options, ...props }) {
    const {
        field,
        fieldState: { isTouched },
        formState: { errors },
    } = useController({
        name,
        control,
        rules,
    });
    const selectStyle = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white !important",
            padding: "3px",
            minHeight: 43,
            borderRadius: "6px",
            boxShadow: "none",
            outline: "none",
            cursor: "pointer",
            border: `1px solid ${errors[name] && errors[name].message ? "#dc2626" : "#9ca3af"} `,
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                cursor: "pointer",
            };
        },
    };

    return (
        <>
            <label htmlFor="" className="input-label">
                {label}&nbsp;{asterik && <span className="text-red-600">*</span>}
            </label>
            <Select
                {...field}
                {...props}
                className="basic-multi-select"
                classNamePrefix="react-select"
                options={options}
                styles={selectStyle}
                isClearable
                components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
            />
            {errors[name] && (
                <span className="mt-1 text-sm text-red-700" data-cy={name}>
                    {errors[name] && errors[name].message}
                </span>
            )}
        </>
    );
}

SendBuddieReactSelect.defaultProps = {
    isRtl: false,
};
