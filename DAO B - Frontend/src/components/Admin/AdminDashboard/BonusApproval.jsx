import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import wallet from '../../../assets/wallet.png';
// import useAuth from '../../../context/AuthContext';
import Button from '../../../elements/Button';
// import { setApproved } from '../../../store/actions';
export default function BonusApproval({ ifApproved, totalVotes = 0 }) {
    const [status,setStatus] = useState()
    const authedUser = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)
    const handleSubmit = (e)=>{
        setStatus(e)
        // dispatch(setApproved(authedUser.id,status))
    }
    const person = users?.filter(p=>p.id===authedUser.id)
    return (
        <div className="flex flex-wrap items-center justify-between sm:mt-4 mt-8 pb-4">
            <div className={`flex items-start gap-6 sm:mt-8 mt-2 pb-6 ${!ifApproved && "border-b-[1px] border-gray-500"}`}>
                {!ifApproved && <img src={wallet} alt="wallet" width={40} />}
                {
                    ifApproved ? (
                        <div className='flex items-center gap-4'>
                            <h3 className='capitalize text-lg opacity-40'>Next bonus</h3>
                            <p className='text-4xl'>12-10-2022</p>
                        </div>
                    ) : (
                        <div>
                            <h3 className='capitalize text-lg opacity-40 pb-2'>Next bonus</h3>
                            <h1 className='sm:text-6xl text-4xl'>20%</h1>
                        </div>
                    )
                }
                {
                    !ifApproved && <div className='flex sm:mt-12 gap-4'>
                        <Button handleSubmit={()=>handleSubmit(false)}>
                            <i className="fa-solid fa-xmark"></i> <span className='md:block hidden'>Decline</span>
                        </Button>
                        <Button handleSubmit={()=>handleSubmit(true)}>
                            <i className="fa-solid fa-check"></i> <span className='md:block hidden'>Approve</span>
                        </Button>
                    </div>
                }
            </div>
            {
                !ifApproved && (
                    <p className='text-md sm:mt-0 mt-8'>
                        Total votes: <b>{person.suggestedProposal.votes.length}</b>
                    </p>
                )
            }
        </div>
    )
}
