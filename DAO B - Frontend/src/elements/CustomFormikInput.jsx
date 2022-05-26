import { ErrorMessage, useField } from "formik";

export default function CustomFormikInput(props) {
    const [field, meta] = useField(props);
    return (
        <>
            <div className={`flex flex-col justify-center ${props.fullWidth ? "w-full lg:col-span-2 col-span-1" : "w-[320px] sm:w-[400px]"} py-[.5rem] px-[14px] text-sm border border-input rounded-md mb-4`}>
                <label htmlFor={field.name} className="pb-1 capitalize text-[#B5B8BB]">{props.label}</label>
                <div className="flex items-center">
                    {props.icons && <i className={`${props.icons} pr-2`}></i>}
                    <input
                        className={`border-0 outline-0 transition-colors p-1 w-full focus:bg-gray-100 rounded-md placeholder-gray-600 ${meta.touched && meta.error && 'is-invalid'}`}
                        {...props}
                    />
                </div>
            </div>
            <ErrorMessage component="div" name={field.name} className="text-red-500 -mt-4 mb-4 text-xs pl-2" />
        </>
    )
}
