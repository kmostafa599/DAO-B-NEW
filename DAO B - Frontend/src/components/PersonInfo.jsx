import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import EditIcon from "../elements/EditIcon"
import { addWallet } from "../store/actions";
import { v4 as uuidv4 } from 'uuid';


export default function PersonInfo({ user }) {
    const dispatch = useDispatch()
    const handleWallet = async () => {
        if (window.ethereum) {
            console.log("wallet detected")
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                const balance = await window.ethereum.request({
                    method: 'eth_getBalance',
                    params: [
                        accounts[0],
                        'latest'
                    ]
                });
                console.log(accounts)

                let walletInfo = { number: accounts[0], balance: balance[0], _id: uuidv4() }
                dispatch(addWallet(walletInfo, user._id))

            } catch (error) {
                console.log(error)
            }
        } else {
            alert('Please install Metamask')
        }
    }
    return (
        <div className='flex items-start gap-24 mt-10 sm:flex-nowrap flex-wrap sm:justify-start justify-center'>
            <div className='rounded-xl md:w-[320px] w-full overflow-hidden'>
                <img src={user?.image} alt='pp' />
            </div>
            <div>
                {
                    Object.keys(user).map((key, index) => {
                        if (key === 'password' || key === 'CreatedAt' || key === 'UpdatedAt' || key === '__v' || key === 'image' || key === '_id' || key === 'votes' || key === 'wallets' || key === 'userBonus' || key==='lastName') {
                            return null
                        }
                        return (
                            <p key={index} className='text-sm sm:text-base text-gray-700'>
                                <b className='inline-block w-[80px] capitalize font-bold sm:mr-24 mr-0 mb-4'>{key}:</b>
                                {key==='name'?<span>{`${user[key]} ${user['lastName']}`}</span>:<span>{user[key]}</span>}
                                {key === 'wallet' ?<span className="inline-block">{ user['wallets']?.filter(w => w._id === user[key])[0]?.walletNumber }</span>:null} {key === 'wallet' ? <i className="inline-block cursor-pointer" onClick={handleWallet}><EditIcon /></i> : null}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
