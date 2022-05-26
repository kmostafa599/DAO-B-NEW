import { useState } from 'react';
import Button from '../../elements/Button';
import Container from '../../elements/Container';
import TopTitle from '../../elements/TopTitle';
import { Link } from 'react-router-dom';
import EditProfileForm from '../../components/User/EditProfileForm';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/actions';
import { useSelector } from 'react-redux';

export default function EditProfile() {
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

    const [editedData, setEditedData] = useState(initialState);
    const dispatch = useDispatch()
    // const user = JSON.parse(localStorage.getItem('user'))
    const user = useSelector(state=>state.auth.user)
    console.log(user._id)
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log({name,value})
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(editedData,user._id))
        console.log(editedData);
    }

    return (
        <section className='py-8'>
            <Container>
                <div className='flex items-center justify-between'>
                    <TopTitle title="Edit" />
                    <div className="flex items-center gap-4">
                        <Link to='/user/profile' className='flex items-center'>
                            <Button>
                                <i className="fa-solid fa-xmark sm:mr-2"></i> <span className='sm:block hidden'>Cancel</span>
                            </Button>
                        </Link>
                        <Link to='/user/profile' className='flex items-center'>
                            <Button handleSubmit={handleSubmit}>
                                <i className="fa-solid fa-check-double"></i> <span className='sm:block hidden'>Save</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-start gap-8 py-14 sm:justify-between justify-center sm:flex-nowrap flex-wrap' >
                    <label className="w-64 flex flex-col items-center px-4 md:py-20 py-10 text-blue rounded-3xl tracking-wide uppercase border border-black cursor-pointer">
                        <i className="fa fa-solid fa-camera text-4xl mb-4"></i>
                        <span className="mt-2 capitalize text-xl">Upload</span>
                        <input type='file' className="hidden" />
                    </label>
                    <EditProfileForm handleChange={handleChange} handleSubmit={handleSubmit}  />
                </div>
            </Container>
        </section>
    )
}
