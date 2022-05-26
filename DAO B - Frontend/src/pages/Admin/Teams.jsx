import Container from '../../elements/Container';
import TopTitle from '../../elements/TopTitle';
import Button from '../../elements/Button';
import TeamTable from '../../components/Admin/Teams/TeamTable';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const people = [
//     {
//         id: 1,
//         team: "development",
//         proposals: 3,
//         employees: 12,
//         totalFunds: "1,000",
//         fundAllocation: "30%",
//     },
    // {
    //     id: 2,
    //     team: "development",
    //     proposals: 3,
    //     employees: 12,
    //     totalFunds: "1,000",
    //     fundAllocation: "30%",
    // },
//     {
//         id: 3,
//         team: "development",
//         proposals: 3,
//         employees: 12,
//         totalFunds: "1,000",
//         fundAllocation: "30%",
//     },
//     {
//         id: 4,
//         team: "development",
//         proposals: 3,
//         employees: 12,
//         totalFunds: "1,000",
//         fundAllocation: "30%",
//     },
//     {
//         id: 5,
//         team: "development",
//         proposals: 3,
//         employees: 12,
//         totalFunds: "1,000",
//         fundAllocation: "30%",
//     },
//     {
//         id: 6,
//         team: "development",
//         proposals: 3,
//         employees: 12,
//         totalFunds: "1,000",
//         fundAllocation: "30%",
//     },
// ]

export default function Teams() {
    const teams = useSelector(state=>state.teams)
    return (
        <section className='py-10'>
            <Container>
                <div className='flex items-center justify-between'>
                    <TopTitle title="Teams" />
                    <div className='flex items-center gap-4'>
                        <Link to="/admin/team/create">
                            <Button>
                                <i className='fa fa-solid fa-user'></i><span className='md:block hidden'>Create Team</span>
                            </Button>
                        </Link>
                        <Button>
                            <i className="fa fa-solid fa-trash"></i>
                            <span className="md:inline-block hidden">Delete</span>
                        </Button>
                        <Button>
                            <i className="fa fa-solid fa-pencil-alt"></i>
                            <span className="md:inline-block hidden">Edit</span>
                        </Button>
                    </div>
                </div>
                <TeamTable team={teams} />
            </Container>
        </section >
    )
}
