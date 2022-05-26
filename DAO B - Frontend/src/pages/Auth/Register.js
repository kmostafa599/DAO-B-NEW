import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/actions";

export default function Register() {
    // const { user, register, loading, error, message } = useAuth();
    const {isAuthenticated} = useSelector(state=>state.auth)
    const {error} = useSelector(state=>state.error)

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const initialState = {
        fullname: "",
        email: '',
        password: '',
        msg:null,
    }

    // useEffect(() => {
    //     if (user) {
    //         navigate('/')
    //     }
    // }, [user])

    const [registerState, setRegisterState] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegisterState({ ...registerState, [name]: value });
    }
    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault();
        dispatch(registerUser(registerState))
        if(isAuthenticated){
            navigate('/user/dashboard')
        }
    }

    return (
        <section id="user_register">
            <h1>Register User</h1>
            {loading && <p>Loading...</p>}
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="fullname" id="fullname" name="fullname" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <input type="submit" />
            </form>
            {/* {error && <p>{error}</p>}
            {message && <p>{message}</p>} */}
        </section>
    )
}
