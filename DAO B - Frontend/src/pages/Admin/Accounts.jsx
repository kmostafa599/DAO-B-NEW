import BlackBgModal from '../../components/BlackBgModal';
import wallet from '../../assets/wallet.png';
import { Link } from 'react-router-dom';

export default function Accounts() {
    return (
        <BlackBgModal topTitle="Use Account from" cancelPath="/admin/dashboard">
            <div className='boxes grid sm:grid-cols-2 gap-4 grid-cols-1 mt-8 text-lg'>
                <div className='flex flex-col gap-2 items-center justify-center p-12 bg-[#F1F4F8] rounded-2xl'>
                    <img src={wallet} alt="wallet" width={40} height={40} />
                    <h1 className='mt-4'>Facebook</h1>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center p-12 bg-[#F1F4F8] rounded-2xl'>
                    <img src={wallet} alt="wallet" width={40} height={40} />
                    <h1 className='mt-4'>Facebook</h1>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center p-12 bg-[#F1F4F8] rounded-2xl'>
                    <img src={wallet} alt="wallet" width={40} height={40} />
                    <h1 className='mt-4'>Facebook</h1>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center p-12 bg-[#F1F4F8] rounded-2xl'>
                    <img src={wallet} alt="wallet" width={40} height={40} />
                    <h1 className='mt-4'>Facebook</h1>
                </div>
            </div>
            <div className='w-full text-center mt-8'>
                <Link to="/">Dont have an account?</Link>
            </div>
        </BlackBgModal>
    )
}
