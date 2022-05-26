import { Outlet } from "react-router-dom";
import { Header } from "../../components/Admin/Header";

export default function Admin() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}
