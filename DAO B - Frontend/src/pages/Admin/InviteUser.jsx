import { Link } from "react-router-dom"
import Input from "../../elements/Input"
import Submit from "../../elements/Submit"
import DropDownSelect from "../../elements/DropDownSelect"
import Button from "../../elements/Button"
import BlackBgModal from '../../components/BlackBgModal';

const options = ["Development", "item2", "item3", "item4"]

export default function InviteUser() {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("something")
    }

    const onSelectDropdown = (e) => {
        console.log(e)
    }

    return (
        <BlackBgModal cancelPath="/admin/dashboard" topTitle="Invite user">
            <form onSubmit={submitHandler} className="my-6">
                <div className="flex items-center gap-4">
                    <Input fullWidth type='email' name='email' label="Invite users" placeholder='Email' icons="fa fa-solid fa-envelope" />
                    <Submit onlyIcon classes="py-5 px-6 rounded-full -mt-4" iconClass="fa fa-solid fa-plus" />
                </div>
            </form>
            <div className="mail_names">
                <div className="flex items-center gap-6 md:flex-nowrap flex-wrap py-3 border-b-[1px] border-gray-200">
                    <h1 className="w-1/2">jessica.hanson@example.com</h1>
                    <DropDownSelect options={options} onSelect={onSelectDropdown} label="Team" />
                    <Link to="/admin/dashboard"><i className="fa fa-solid fa-trash" /></Link>
                </div>
                <div className="flex items-center gap-6 md:flex-nowrap flex-wrap py-3 border-b-[1px] border-gray-200">
                    <h1 className="w-1/2">jessica.hanson@example.com</h1>
                    <DropDownSelect options={options} onSelect={onSelectDropdown} label="Team" />
                    <Link to="/admin/dashboard"><i className="fa fa-solid fa-trash" /></Link>
                </div>
                <div className="flex items-center gap-6 md:flex-nowrap flex-wrap py-3 border-b-[1px] border-gray-200">
                    <h1 className="w-1/2">jessica.hanson@example.com</h1>
                    <DropDownSelect options={options} onSelect={onSelectDropdown} label="Team" />
                    <Link to="/admin/dashboard"><i className="fa fa-solid fa-trash" /></Link>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-6">
                <Button>
                    <i className="fa fa-solid fa-xmark" /><span className="sm:block hidden">Cancel</span>
                </Button>
                <Button>
                    <i className="fa fa-solid fa-check" /><span className="sm:block hidden">Save</span>
                </Button>
            </div>
        </BlackBgModal>
    )
}
