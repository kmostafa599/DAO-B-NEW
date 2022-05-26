import Container from '../../elements/Container';
import TopTitle from '../../elements/TopTitle';
import wallet from '../../assets/wallet.png';
import Button from '../../elements/Button';
import PersonInfo from '../../components/PersonInfo';

const info = {
    business: "SaaS Supreme",
    position: "CEO",
    team: "Development",
    email: "alma.lawson@example.com",
    phone: "(44) 555-0115-0202",
    city: "Swansea",
    address: "32 Swansea road, Swansea, SA1 4774",
}

export default function NextBonus() {
    return (
        <section className='pt-4 pb-14 font-light'>
            <Container>
                <TopTitle title="Cameron Calder" />
                <div className="flex flex-wrap justify-between sm:mt-4 mt-8 pb-4">
                    <div className='flex items-start flex-wrap gap-6 sm:mt-8 mt-2 pb-6 border-b-[1px] border-gray-500'>
                        <img src={wallet} alt="wallet" width={40} />
                        <div>
                            <h3 className='capitalize text-lg opacity-40 pb-2'>Next bonus</h3>
                            <h1 className='sm:text-6xl text-4xl'>20%</h1>
                        </div>
                        <div className='flex items-end sm:mt-14 mt-0 gap-4'>
                            <Button>
                                <i className="fa-solid fa-xmark mr-2"></i> <span className='sm:block hidden'>No</span>
                            </Button>
                            <Button>
                                <i className="fa-solid fa-check-double mr-2"></i> <span className='sm:block hidden'>Yes</span>
                            </Button>
                        </div>
                    </div>
                    <p className='text-md sm:mt-0 mt-8'>
                        Total votes: <b>4</b>
                    </p>
                </div>
                <PersonInfo info={info} />
            </Container>
        </section>
    )
}
