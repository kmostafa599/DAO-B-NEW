import TopTitle from '../../elements/TopTitle';
import Container from '../../elements/Container';
import WalletInfo from '../../components/Admin/AdminDashboard/WalletInfo';
import DropDownSelect from '../../elements/DropDownSelect';
import AdminDashboardTabs from '../../components/Admin/AdminDashboard/AdminDashboardTabs';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllUsers, loadUser } from '../../store/actions';
import { getMainWallet } from '../../store/actions/walletActions';
import { getAllTeams } from '../../store/actions/teamActions';

const options = [
    "All", "New", "Pending", "Approved", "Rejected"
]

export default function AdminDashboard() {
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)
    useEffect(()=>{
        dispatch(getAllUsers())
        dispatch(loadUser())
        dispatch(getMainWallet())
        dispatch(getAllTeams())

    },[])
    
    const onSelect = (value) => {
        console.log(value.value);
    }

    return (
        <section className='py-8'>
            <Container>
                <div className='flex items-center justify-between mb-14'>
                    <TopTitle title="Company Bonuses" employees={users?.length} />
                    <WalletInfo />
                </div>
                {/* <DropDownSelect options={options} onSelect={onSelect} lebel="Specific days" /> */}
                <AdminDashboardTabs />
            </Container>
        </section>
    )
}
