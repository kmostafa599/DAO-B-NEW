import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function DropDownSelect({ options, onSelect, label }) {
    return (
        <div className='sm:w-[400px] w-[320px] px-3 py-[.8rem] text-sm flex flex-col items-start border border-gray-300 rounded-md'>
            <label className='capitalize text-gray-400 text-xs'>{label}</label>
            <div className='flex items-center gap-3 w-full mt-1'>
                <i className='fa fa-solid fa-briefcase'></i>
                <Dropdown className='w-full'
                    options={options}
                    onChange={onSelect}
                    value={options[0]}
                    placeholder="Select an option"
                />
            </div>
        </div>
    )
}
