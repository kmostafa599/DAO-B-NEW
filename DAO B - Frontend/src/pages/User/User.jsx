import { Outlet } from "react-router-dom";
import { Header } from "../../components/User/Header";

export default function User() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}
