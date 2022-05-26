import { Link } from "react-router-dom";
import CreateUserForm from "../../components/Admin/AdminDashboard/CreateUserForm";
import Button from "../../elements/Button";
import Container from "../../elements/Container";
import TopTitle from "../../elements/TopTitle";
import { useState } from "react";
import { useFormik } from 'formik';
import { createUser } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function CreateUser() {
    const initialState = {
        firstName: "",
        lastName: "",
        phone: 0,
        email: "",
        jobTitle: "",
        teamName: "",
        business: "",
        city: "",
        address: "",
        wallet: "",
        password: "",
        confirmPassword: "",
    };

    const [userData, setUserData] = useState(initialState);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(userData);
        dispatch(createUser(userData))

    }

    return (
        <section className='py-8'>
            <Container>
                <div className='flex items-center justify-between'>
                    <TopTitle title="Create User" />
                    <div className="flex items-center gap-4">
                        <Link to='/user/dashboard' className='flex items-center'>
                            <Button>
                                <i className="fa-solid fa-xmark sm:mr-2"></i> <span className='sm:block hidden'>Cancel</span>
                            </Button>
                        </Link>
                        <Button handleSubmit={handleSubmit}>
                            <i className="fa-solid fa-check-double"></i> <span className='sm:block hidden'>Save</span>
                        </Button>
                    </div>
                </div>
                <div className='flex items-start gap-8 py-14 sm:justify-between justify-center sm:flex-nowrap flex-wrap' >
                    <label className="w-64 flex flex-col items-center px-4 md:py-20 py-10 text-blue rounded-3xl tracking-wide uppercase border border-black cursor-pointer">
                        <i className="fa fa-solid fa-camera text-4xl mb-4"></i>
                        <span className="mt-2 capitalize text-xl">Upload</span>
                        <input type='file' className="hidden" />
                    </label>
                    <CreateUserForm handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
            </Container>
        </section>
    )
}
