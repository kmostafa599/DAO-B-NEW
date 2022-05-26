import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import useAuth from "../../context/AuthContext"
import { logoutUser } from "../../store/actions";

export default function Home() {
    // const { logout, user } = useAuth();
    const user = useSelector(state=>state.auth.user)
    const dispatch = useDispatch()
    const logout = () =>{
        dispatch(logoutUser(user.id))
    }
    return (
        <section id="home">
            Home component
            {user && <button onClick={logout}>Logout</button>}
        </section>
    )
}
