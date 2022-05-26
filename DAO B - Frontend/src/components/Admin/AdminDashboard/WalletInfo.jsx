import wallet from '../../../assets/wallet.png';

export default function WalletInfo() {
    return (
        <div className="flex items-center gap-8 mt-4">
            <div className="sm:flex hidden justify-center items-start gap-4 border-b-[1px] border-b-black">
                <img src={wallet} alt="wallet" width={40} height={40} />
                <div>
                    <h3 className="text-[#7D7D83] capitalize md:text-lg text-[14px] opacity-80 mb-1">SaaS Supreme Total - Wallet</h3>
                    {/* <h1 className="md:text-6xl text-[34px]">£1200.00</h1> */}
                    <h4 className="md:text-[36px] text-[24px] pb-3">0x22bD...BA4B</h4>
                </div>
            </div>
        </div>
    )
}
