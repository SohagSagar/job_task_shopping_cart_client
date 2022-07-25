import React from 'react';
import '../../Styles/Navbar.css';
import logo from '../../resources/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';
import Loading from './Loading';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Cart from '../Cart/Cart';



const Navbar = ({cartItems,setCartItems}) => {
    const [user, loading] = useAuthState(auth);
    const [cartOffsetStatus,setCartOffsetStatus]=useState(true);
    const navigate = useNavigate();


    //sign out user
    const signout = () => {
        signOut(auth);
        toast.success('Signout successfully');
        navigate('/login');

    }
    if (loading) {
        return <Loading />
    }
    const menu = <>
        {
            user && <li className='px-10 text-accent italic'> Welcome {user?.displayName} </li>
        }
        
        <label onClick={()=>setCartOffsetStatus(true)} for="my-modal-6" className="cursor-pointer">Cart <sup className='p-1 text-primary font-bold'>{cartItems?.length}</sup> </label>
        {
            !user ? <Link className='px-5 ' to="/login">Login</Link> :
                <Link className='px-5 ' to="/dashboard">Dashboard</Link>
        }

        {
            user ? <li><button onClick={() => signout()} className="btn btn-sm text-secondary rounded-full bg-primary border-0 normal-case px-7 pt-2">Sign out</button></li> :
                <li><button className="btn btn-sm text-secondary rounded-full bg-primary border-0 normal-case px-7 pt-2"><Link to="/signup">Signup</Link></button></li>
        }


    </>
    return (
        <div className="lg:px-12 navbar bg-secondary shadow-sm font-semibold ">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {menu}
                    </ul>
                </div>

                <Link to={'/'} className=" text-xl"><img className='w-28' src={logo} alt="" srcset="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal pl-4">
                    {menu}
                </ul>
            </div>
            
            {
                cartOffsetStatus && <Cart cartItems={cartItems} setCartItems={setCartItems} setCartOffsetStatus={setCartOffsetStatus}/>
            }

        </div>
    );
};

export default Navbar;