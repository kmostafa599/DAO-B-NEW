import { useState } from 'react'
import logo_black from '../../assets/logo_black.png'
import { Link } from 'react-router-dom'
import Anchor from '../../elements/Anchor'
import { useParams, useLocation } from 'react-router-dom'
// import useAuth from '../../context/AuthContext'
import { useSelector } from 'react-redux'

export const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const authedUser = useSelector(state=>state.auth.user)
    return (
        <header className="py-2 border border-b-[#DADCDD]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img src={logo_black} alt="Dao-b" width={100} />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/user/dashboard" className='item-active'>
                                <Anchor
                                    active={location.pathname === "/user/dashboard"
                                        || location.pathname === "/user/dashboard/"
                                    }
                                >
                                    Dashboard
                                </Anchor>
                            </Link>
                            <Link to="/user/profile">
                                <Anchor
                                    active={location.pathname === "/user/profile"
                                        || location.pathname.startsWith("/user/profile")
                                    }
                                >
                                    Profile
                                </Anchor>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-6">
                        <Link to="/">
                            <i className="fa fa-life-ring hover:text-gray-800 text-lg text-gray-400"></i>
                        </Link>
                        <Link to="/user/profile/notifications">
                            <i className="fa-solid hover:text-gray-800 fa-bell text-lg text-gray-400"></i>
                        </Link>
                        <div className='flex items-center flex-wrap'>
                            <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                                <img src={authedUser?.image} alt="broken" className="shadow border-none object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center px-2 py-1 rounded-md text-gray-400 focus:outline-none hover:border hover:border-gray-500 transition-all"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <i className="fa-solid hover:text-gray-800 fa-bars text-gray-500 text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden transition-all" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        <Link to="/user/dashboard">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-black hover:text-white transition-colors'>
                                Dashboard
                            </button>
                        </Link>
                        <Link to="/user/profile">
                            <button className='flex w-full items-center justify-center text-md px-4 py-3 rounded-3xl hover:bg-black hover:text-white transition-colors'>
                                Profile
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-6 pl-6 pb-4">
                        <Link to="/">
                            <i className="fa fa-life-ring hover:text-gray-800 text-lg text-gray-400"></i>
                        </Link>
                        <Link to="/user/dashboard/notifications">
                            <i className="fa-solid fa-bell text-lg text-gray-400 hover:text-gray-800"></i>
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
