import BonusApproval from '../../components/Admin/AdminDashboard/BonusApproval';
import Container from '../../elements/Container';
import PersonInfo from '../../components/PersonInfo';
import TopWithButtons from '../../components/Admin/AdminDashboard/TopWithButtons';
import BonusHistoryTable from '../../components/BonusHistoryTable'

const info = {
    business: "SaaS Supreme",
    position: "CEO",
    team: "Development",
    email: "alma.lawson@example.com",
    phone: "(44) 555-0115-0202",
    city: "Swansea",
    address: "32 Swansea road, Swansea, SA1 4774",
}

const people = [
    {
        id: 1,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 2,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 3,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 4,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 5,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    }
]

export default function UserInfo() {
    return (
        <section className='pt-8 mb-24 font-light'>
            <Container>
                <TopWithButtons title="Mike Middleston" />
                <BonusApproval ifApproved={true} />
                <PersonInfo info={info} />
                <BonusHistoryTable people={people} title="bonus history" />
            </Container>
        </section>
    )
}
