import { useField } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerField({ ...props }) {
    const [field, , { setValue }] = useField(props);

    return (
        <div className="border-2 border-gray-200 rounded-md sm:w-[400px] w-[320px] pl-3 pt-1">
            <label className="text-sm text-gray-400">{props.label}</label>
            <div className="flex items-center gap-4 pt-2 pb-2">
                <i className="fa fa-calendar-alt"></i>
                <ReactDatePicker
                    {...field}
                    {...props}
                // selected={(field.value && new Date(field.value)) || null}
                // onChange={(val) => {
                //     setValue(val);
                // }}
                />
            </div>
        </div>
    );
};
