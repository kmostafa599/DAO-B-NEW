import logo from '../../assets/logo.png';

export default function RightSection() {
    return (
        <div className="hidden bg-black text-white md:h-screen lg:w-[35%] md:w-[45%] px-4 py-14 w-full sm:flex flex-col lg:items-start xl:items-center justify-end">
            <h2 className="font-light text-[55px] leading-[4rem] pb-14">Decentralised<br /> Autonomous<br /> Organisation<br /> Bonuses<br /> </h2>
            <div>
                <img src={logo} alt="Dao-b" width={320} />
            </div>
        </div>
    )
}
