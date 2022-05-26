import Container from '../../elements/Container';
import wallet from '../../assets/wallet.png';
import Button from '../../elements/Button';
import WalletInfoTabs from '../../components/Admin/Wallet/WalletInfoTabs';
import { Link } from 'react-router-dom';

export default function Wallet() {
    return (
        <main className='py-10'>
            <Container>
                <div>
                    <h1 className='md:text-5xl text-3xl'>Overall SaaS Supreme - Wallet
                        <span className='px-4 md:text-3xl text-xl text-[#7D7D83]'>0x22bD...BA4B</span>
                        <span><i className='fa fa-solid fa-pencil text-sm' /></span>
                    </h1>
                    <div className='flex sm:w-[500px] items-center border-b-2 my-12 gap-4 pb-5 flex-wrap'>
                        <img src={wallet} alt="wallet" width={30} />
                        <h1 className='sm:text-6xl text-3xl'>£12,000.00</h1>
                        <Link to="/admin/addfunds">
                            <Button>
                                <i className='fa fa-solid fa-plus' /><span className='sm:block hidden py-2'>Add funds</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <WalletInfoTabs />
            </Container>
        </main>
    )
}
