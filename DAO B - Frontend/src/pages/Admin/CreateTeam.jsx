import Container from '../../elements/Container';
import Button from '../../elements/Button';
import TopTitle from '../../elements/TopTitle';
import Input from '../../elements/Input';
import CreateTeamTable from '../../components/Admin/Teams/CreateTeamTable';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTeam } from '../../store/actions/teamActions';


const team = [
    {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "30%",
        amount: 512

    },
    {
        id: 2,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "30%",
        amount: 512
    },
    {
        id: 3,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        amount: 512
    },
    {
        id: 4,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        amount: 512
    },
    {
        id: 5,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        amount: 512
    }
]

export default function CreateTeam() {
    const dispatch = useDispatch()
    const initialState = {
        
    };
        const [teamData, setTeamData] = useState(initialState);

    const handleChange = (event) => {
            const { name, value } = event.target;
            console.log({name,value})
            setTeamData({ ...teamData, [name]: value });
        };
     const handleSubmit = (e) => {
            e.preventDefault();
            console.log(teamData);
            dispatch(createTeam(teamData))
        }
    return (
        <section className='py-10'>
            <Container>
                <div className='flex items-center justify-between'>
                    <TopTitle title="Create Team" />
                    <div className='action_buttons flex gap-2'>
                        <Button>
                            <i className="fa fa-solid fa-trash"></i>
                            <span className="md:inline-block hidden">Delete</span>
                        </Button>
                        <Link to="/admin/user/create">
                            <Button>
                                <i className="fa fa-solid fa-pencil-alt"></i>
                                <span className="md:inline-block hidden">Add Users</span>
                            </Button>
                        </Link>
                        <Button>
                            <i className="fa fa-solid fa-xmark"></i>
                            <span className="md:inline-block hidden">Cancel</span>
                        </Button>
                        <Button handleSubmit={handleSubmit}>
                            <i className="fa fa-solid fa-check"></i>
                            <span className="md:inline-block hidden">Save</span>
                        </Button>
                    </div>
                </div>
                <div className='flex items-center gap-4 flex-wrap my-14'>
                    <Input label="Team Name" type="text" name="teamName" icons="fa fa-solid fa-trash" placeholder="Sales" onChange={handleChange} />
                    <Input label="Set Team Budget (%)" type="text" name="budget" icons="fa fa-solid fa-euro" placeholder="Budget (%)" onChange={handleChange} />
                </div>
                <CreateTeamTable team={team} />
            </Container>
        </section >
    )
}
