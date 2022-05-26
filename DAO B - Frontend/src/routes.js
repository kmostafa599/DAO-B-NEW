import { useLocation, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import UserDashboard from './pages/User/UserDashboard'
import Admin from './pages/Admin/Admin';
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserInfo from './pages/Admin/UserInfo';
import Teams from './pages/Admin/Teams';
import PrivateRoute from "./PrivateRoute";
import Restore from './pages/Auth/Restore'
import Success from "./pages/Auth/Success";
import NewPassword from "./pages/Auth/NewPassword";
import User from './pages/User/User';
import Profile from "./pages/User/Profile";
import NextBonus from "./pages/User/NextBonus";
import EditProfile from "./pages/User/EditProfile";
import Notifications from "./pages/User/Notifications";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CreateUser from "./pages/Admin/CreateUser";
import CreateTeam from "./pages/Admin/CreateTeam";
import Wallet from "./pages/Admin/Wallet";
import AddFunds from "./pages/Admin/AddFunds";
import Settings from "./pages/Admin/Settings";
import InviteUser from "./pages/Admin/InviteUser";
import SuggestBonus from "./pages/User/SuggestBonus";
import Accounts from "./pages/Admin/Accounts";
import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions";


export default function MyRoutes() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadUser())
      },[])
    return (
        // <TransitionGroup>
        // <CSSTransition key={location.key} classNames="slide" timeout={500}>

        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />

                {/* User Routes */}
                <Route path="user" element={<User />}>
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="profile/bonus" element={<NextBonus />} />
                    <Route path="profile/edit" element={<EditProfile />} />
                    <Route path="profile/notifications" element={<Notifications />} />
                    <Route path="profile/suggest" element={<SuggestBonus />} />
                </Route>

                
            </Route>
            {/* Admin Routes */}
            <Route path="admin" element={<Admin />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path=":userId" element={<UserInfo />} />
                    <Route path="user/create" element={<CreateUser />} />
                    <Route path="teams" element={<Teams />} />
                    <Route path="team/create" element={<CreateTeam />} />
                    <Route path="wallet" element={<Wallet />} />
                    <Route path="addfunds" element={<AddFunds />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="invite" element={<InviteUser />} />
                    <Route path="accounts" element={<Accounts />} />
                </Route>
            {/* Auth Routes */}
            <Route path="auth">
                <Route path="login" element={<Login />} />
                <Route path="restore" element={<Restore />} />
                <Route path="success" element={<Success />} />
                <Route path="newpass" element={<NewPassword />} />
                <Route path="register" element={<Register />} />


            </Route>
            {/* <Route path="*" element={<Home/>}/>
            <Route path="/dashboard" element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route> */}
        </Routes>
        // </CSSTransition>
        // </TransitionGroup>
    )
}
