import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BonusHistoryTable from '../../../components/BonusHistoryTable';
// import useAuth from "../../../context/AuthContext";

// const people = [
//     {
//         id: 1,
//         date: "2019-01-01",
//         time: "12:00",
//         wallet: "0x22bD...BA4B",
//         summary: "£240,123",
//         bonus: "30%",
//         team: "Development"
//     },
//     {
//         id: 2,
//         date: "2019-01-01",
//         time: "12:00",
//         wallet: "0x22bD...BA4B",
//         summary: "£140,000",
//         bonus: "30%",
//         team: "Development"
//     },
//     {
//         id: 3,
//         date: "2019-01-01",
//         time: "12:00",
//         wallet: "0x22bD...BA4B",
//         summary: "£440,12",
//         bonus: "30%",
//         team: "Development"
//     },
//     {
//         id: 4,
//         date: "2019-01-01",
//         time: "12:00",
//         wallet: "0x22bD...BA4B",
//         summary: "£240,00",
//         bonus: "30%",
//         team: "Development"
//     },
//     {
//         id: 5,
//         date: "2019-01-01",
//         time: "12:00",
//         wallet: "0x22bD...BA4B",
//         summary: "£240",
//         bonus: "30%",
//         team: "Development"
//     }
// ]

export default function WalletInfoTabs() {
    const user = useSelector(state=>state.auth.user)
    // const users = useSelector(state=>state.users)
    // const user = users.filter(p => p.id === authedUser.id) 
    return (
        <Tabs className="mt-14">
            <TabList className="flex border-b-[1px] border-gray-300 overflow-auto">
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">Deposits</Tab>
                <Tab className="px-10 py-3 cursor-pointer text-[16px]">Payouts</Tab>
            </TabList>
            <TabPanel>
                <BonusHistoryTable user={user} />
            </TabPanel>
            <TabPanel>
                <BonusHistoryTable user={user} withTeam />
            </TabPanel>
        </Tabs>
    )
}
