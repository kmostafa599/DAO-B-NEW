import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import useAuth from "../../../context/AuthContext"
import Button from "../../../elements/Button"
import { updateVote } from "../../../store/actions"

// const people = [
//     {
//         id: 1,
//         name: 'Jane Cooper',
//         title: 'Regional Paradigm Technician',
//         team: 'Optimization',
//         image:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//         bonus: "30%",
//         votes: "5",
//     },
//     {
//         id: 2,
//         name: 'Jane Cooper',
//         title: 'Regional Paradigm Technician',
//         team: 'Optimization',
//         image:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//         bonus: "30%",
//         votes: "5",
//     },
//     {
//         id: 3,
//         name: 'Jane Cooper',
//         title: 'Regional Paradigm Technician',
//         team: 'Optimization',
//         image:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//         bonus: "50%",
//         votes: "7",
//     },
//     {
//         id: 4,
//         name: 'Jane Cooper',
//         title: 'Regional Paradigm Technician',
//         team: 'Optimization',
//         image:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//         bonus: "50%",
//         votes: "7",
//     },
//     {
//         id: 5,
//         name: 'Jane Cooper',
//         title: 'Regional Paradigm Technician',
//         team: 'Optimization',
//         image:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//         bonus: "50%",
//         votes: "7",
//     }
// ]

export default function EmployeesTable() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    console.log(users)
    const user = useSelector(state => state.auth.user)
    const [loading, setLoading] = useState()
    //get votes
    var votes = {

    }
    console.log(users)
    users?.map((person) => { // 
        if (person.votes) {
            const filteredVotes = person.votes?.filter((v, index) => v.vote === 1)
            votes[person._id] = [filteredVotes.length, person.votes]
            // votes[person.id].votes = person.votes
        }
    })
    console.log(votes)
    // const users = data.users.filter(user=>data.bonuses.filter(bonus=>user.id===bonus.userCreatedBonus) )
    // console.log(users)

    const handleVote = (proposalId, vote, userVoted) => {
        // setVote(vote) //state
        //dispatch set bonus Vote //increment bonus value //add user who voted 
        setLoading(true)
        dispatch(updateVote(proposalId, vote, userVoted))
        setLoading(false)
        //dispatch(addVote(bonusId,userId)) add bonus to the *votes array* in *user object* && increment bonus vote by one 

        //    setVoted(true)
        //     console.log(vote)
    }
    // useEffect(() => {

    // }, [vote]);
    return (
        <div className="flex flex-col mt-8">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 sm:rounded-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Customer
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Team
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Votes
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Bonus%
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            {users?.map((person) => (
                                <tbody key={person.id} className="bg-white divide-y divide-gray-200 text-xs">
                                    {person.userBonus && person.userBonus.approved ?
                                        <tr key={person.id}>
                                            <td className="px-4 whitespace-nowrap">
                                                {person.id}
                                            </td>
                                            <td className="px-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{`${person.name } ${person.lastName ?person.lastName:''} ` }</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 whitespace-nowrap ">
                                                {person.team}
                                            </td>
                                            <td className="px-6 whitespace-nowrap">
                                                <div className="text-gray-500">{votes[person._id][0]}</div>
                                            </td>
                                            <td className="px-6 whitespace-nowrap text-gray-500">{person.userBonus?.bonus}</td>
                                            <td className="px-0 py-5 whitespace-nowrap text-right font-medium flex items-center gap-2">
                                                <Button handleSubmit={() => handleVote(person._id, 0, user?._id)} disabled={votes[person._id][1].map((v, index) => {
                                                    if (v.user === user._id) {
                                                        return true
                                                    }
                                                })} >
                                                    <i className="fa-solid fa-xmark mr-2"></i> <span className='sm:block hidden'>No</span>

                                                </Button>
                                                <Button handleSubmit={() => handleVote(person._id, 1, user?._id)} disabled={votes[person._id][1].map((v, index) => {
                                                    if (v.user === user._id) {
                                                        return true
                                                    }
                                                })}>
                                                    <i className="fa-solid fa-check-double mr-2"></i> <span className='sm:block hidden'>Yes</span>
                                                </Button>
                                            </td>
                                            {
                                                <td className="px-6 whitespace-nowrap">

                                                </td>
                                            }

                                        </tr>
                                        : null}

                                </tbody>

                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
