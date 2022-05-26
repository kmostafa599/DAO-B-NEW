import CompanyBonus from "../../components/User/UserDashboard/CompanyBonus";
import Container from "../../elements/Container";
import EmployeesTable from '../../components/User/UserDashboard/EmployeesTable';
import { useEffect } from "react";
import { getAllUsers } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function UserDashboard() {
    const dispatch = useDispatch()
    // const [user,setUser] = useState(JSON.parse(localStorage.getItem('user'))||null)
    useEffect(()=>{

        dispatch(getAllUsers())
    })
    return (
        <section className="font-light">
            <Container>
                <CompanyBonus />
                <EmployeesTable />
            </Container>
        </section>
    )
}
