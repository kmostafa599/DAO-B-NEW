import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Button from '../../../../elements/Button'
import { setApproval, setDeclined, updateVote } from '../../../../store/actions'

export default function TableBody({ users }) {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    var votes = {

    }
    users?.map((person) => { // 
        if (person.votes) {
            const filteredVotes = person.votes?.filter((v, index) => v.vote === 1)
            votes[person._id] = [filteredVotes.length, person.votes]
            // votes[person.id].votes = person.votes
        }
    })
    console.log(votes)
    console.log(user._id)
    const handleApprove = (userId, status) => {

        console.log(status)
        dispatch(setApproval(userId, status))
    }
    const handleDecline = (userId, status) => {
        console.log(status)
        dispatch(setDeclined(userId, status))
    }
    const handleVote = (proposalId, vote, userVoted) => {
        dispatch(updateVote(proposalId, vote, userVoted))
    }
    return (
        <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {users?.length > 0 ? (users.map((person) => (
                <tr key={person?.id} className={` "font-light"}`}> {/**${person.suggestedProposal ? "font-bold" : */}
                    <td className="px-2 py-6 whitespace-nowrap">
                        {person?.id}
                    </td>
                    <td className="px-6 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={person?.image} alt="" />
                            </div>
                            <div className="ml-4">
                                <div className="text-gray-900">{`${person.name } ${person.lastName ?person.lastName:''} ` }</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 whitespace-nowrap ">
                        {person.team}
                    </td>
                    <td className="px-6 whitespace-nowrap">
                        <div className="text-gray-500">{person?.votes?.length}</div>
                    </td>
                    <td className="px-6 whitespace-nowrap text-gray-800 font-bold">£{person.userBonus?.bonus}</td>
                    <td className="px-6 whitespace-nowrap text-gray-800 font-medium">{person.bonus}</td>
                    <td className="px-0 py-5 whitespace-nowrap text-right font-medium flex items-center gap-2">
                        {
                            !person?.userBonus?.approved && !person?.userBonus?.declined &&
                            <>
                                <Button handleSubmit={() => handleDecline(person._id, { declined: true })}>
                                    <i className="fa-solid fa-xmark"></i><span className='sm:block hidden'>Decline</span>
                                </Button>
                                <Button handleSubmit={() => handleApprove(person._id, { approved: true })}>
                                    <i className="fa-solid fa-check"></i> <span className='sm:block hidden'>Approve</span>
                                </Button>
                            </>
                        }
                        {
                            person?.votes?.length < users.length && person.userBonus?.approved && //voting
                            
                                
                                    <>
                                        {/* {console.log(v.user, user._id)} */}
                                        <Button 
                                        disabled={votes[person._id][1].map((v, index) => (v.user === user._id))}
                                        handleSubmit={votes[person._id][1].map((v, index) => (v.user === user._id)) ? () => handleVote(person._id, 0, user?._id) : ()=>console.log('hello')}
                                        >
                                        <span className={
                                            `${votes[person._id][1].map((v, index) => (v.user === user._id)) ?
                                            'px-3 py-1 bg-black text-white rounded-full':
                                            'fa-solid fa-check'}`
                                        }>
                                            {votes[person._id][1].map((v, index) => (v.user === user._id)) ?person?.votes?.filter(v => v.vote === 0)?.length:null}
                                        </span>
                                        <span className='sm:block hidden'>No</span>
                                        </Button>

                                        <Button disabled={votes[person._id][1].map((v, index) => (v.user === user._id))} handleSubmit={votes[person._id][1].map((v, index) => (v.user === user._id))? () => handleVote(person._id, 1, user?._id) : ()=>console.log('hello')}>
                                                <span className={`${votes[person._id][1].map((v, index) => (v.user === user._id)) ?'px-3 py-1 bg-black text-white rounded-full':'fa-solid fa-check'}`}>{votes[person._id][1].map((v, index) => (v.user === user._id)).length>0 ?person?.votes?.filter(v => v.vote === 1)?.length:null}</span><span className='sm:block hidden'>Yes</span>
                                        </Button>
                                    </>
                                
                        
                        }     
                                    
                        {
                            person?.userBonus?.declined &&
                            <>
                                <Button disabled>
                                    <i className="fa-solid fa-xmark"></i> <span className=' font-bold'>Declined</span>
                                </Button>
                            </>
                        }
                    </td>
                </tr>
            ))) : (
                <tr>
                    <td colSpan="6" className="px-6 py-4 text-center">
                        <div className="text-gray-500">Nothing to show</div>
                    </td>
                </tr>
            )}
        </tbody>
    )
}
