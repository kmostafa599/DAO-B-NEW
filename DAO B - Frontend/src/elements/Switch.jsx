import { useState } from "react";

function Switch({ text, setChange }) {
    const [toggle, setToggle] = useState(false);
    const toggleClass = " transform translate-x-5 bg-black";
    return (
        <div className="flex items-center gap-4 my-3">
            <div
                className="md:w-14 md:h-8 w-12 h-7 flex items-center border-2 border-gray-400 rounded-full p-1 cursor-pointer"
                onClick={() => {
                    setToggle(!toggle);
                    setChange(prevState => !prevState);
                }}
            >
                {/* Switch */}
                <div
                    className={
                        "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                        (toggle ? toggleClass : null)
                    }
                ></div>
            </div>
            <label>{text}</label>
        </div>
    );
}

export default Switch;
