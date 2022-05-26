import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Anchor from '../../elements/Anchor'
import { useParams, useLocation } from 'react-router-dom'

export const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [plusBox, setPlusBox] = useState(false);

    return (
        <header className="py-1 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Dao-b" width={140} />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/admin/dashboard">
                                <Anchor bgBlack
                                    routeBorderActive={location.pathname === "/admin/dashboard"
                                        || location.pathname === "/admin/dashboard/"
                                    }
                                >
                                    Dashboard
                                </Anchor>
                            </Link>
                            <Link to="/admin/teams">
                                <Anchor bgBlack
                                    routeBorderActive={location.pathname === "/admin/teams"
                                        || location.pathname.startsWith("/admin/team")
                                    }
                                >
                                    Teams
                                </Anchor>
                            </Link>
                            <Link to="/admin/settings">
                                <Anchor bgBlack
                                    routeBorderActive={location.pathname === "/admin/settings"
                                        || location.pathname.startsWith("/admin/settings")
                                    }
                                >
                                    Settings
                                </Anchor>
                            </Link>
                            <Link to="/admin/wallet">
                                <Anchor bgBlack
                                    routeBorderActive={location.pathname === "/admin/wallet"
                                        || location.pathname.startsWith("/admin/wallet")
                                    }
                                >
                                    Wallet
                                </Anchor>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-6">
                        <Link to="/">
                            <i className="fa fa-life-ring hover:text-gray-600 text-lg text-white"></i>
                        </Link>
                        <Link to="/user/dashboard/notifications">
                            <i className="fa-solid hover:text-gray-600 fa-bell text-lg text-white"></i>
                        </Link>
                        <div className='flex items-center flex-wrap'>
                            <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="broken" className="shadow border-none object-cover" />
                            </div>
                        </div>
                        <div
                            className='rounded-full h-10 w-10 bg-white flex items-center justify-center cursor-pointer relative'
                            onClick={() => setPlusBox(!plusBox)}
                        >
                            <i className='fa fa-solid fa-plus text-black'></i>
                            {
                                plusBox && <div className='absolute flex flex-col select-none text-center w-32 h-40 top-12 right-0 bg-[#F1F4F8] rounded-lg shadow-lg z-40'>
                                    <Link to="/admin/invite" className='text-black py-2 hover:text-red-500'>Invite User</Link>
                                    <Link to="/admin/addfunds" className='text-black py-2 hover:text-red-500'>Add Funds</Link>
                                    <Link to="/admin/dashboard/user/create" className='text-black py-2 hover:text-red-500'>Create User</Link>
                                    <Link to="/admin/team/create" className='text-black py-2 hover:text-red-500'>Create Team</Link>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center px-2 py-1 rounded-md focus:outline-none hover:border hover:border-gray-500 transition-all"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <i className="fa-solid hover:text-white fa-bars text-xl"></i>
                        </button>
                    </div>
                    <div
                        className='md:hidden rounded-full h-10 w-10 bg-white flex items-center justify-center cursor-pointer relative'
                        onClick={() => setPlusBox(!plusBox)}
                    >
                        <i className='fa fa-solid fa-plus text-black'></i>
                        {
                            plusBox && <div className='absolute flex flex-col select-none text-center w-32 h-40 top-12 right-0 bg-[#F1F4F8] rounded-lg shadow-lg z-40'>
                                <Link to="/" className='text-black py-2 hover:text-red-500'>Invite User</Link>
                                <Link to="/" className='text-black py-2 hover:text-red-500'>Add Funds</Link>
                                <Link to="/admin/dashboard/user/create" className='text-black py-2 hover:text-red-500'>Create User</Link>
                                <Link to="/" className='text-black py-2 hover:text-red-500'>Create Team</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden transition-all" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <Link to="/admin/dashboard">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Dashboard
                            </button>
                        </Link>
                        <Link to="/admin/teams">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Teams
                            </button>
                        </Link>
                        <Link to="/admin/settings">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Settings
                            </button>
                        </Link>
                        <Link to="/admin/wallets">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-white hover:text-black transition-colors'>
                                Wallets
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-6 pl-6 pb-4">
                        <Link to="/">
                            <i className="fa fa-life-ring hover:text-white text-lg text-gray-400"></i>
                        </Link>
                        <Link to="/user/dashboard/notifications">
                            <i className="fa-solid fa-bell text-lg text-gray-400 hover:text-white"></i>
                        </Link>
                        <div className='flex items-center flex-wrap'>
                            <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="broken" className="shadow border-none object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}
