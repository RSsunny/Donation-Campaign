import { NavLink } from "react-router-dom";
import { AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
    const [show,setShow]=useState(false)
   
    const handleShow=()=>{
        setShow(!show)
    }
    return (
        <div>
            <div className='flex justify-between items-center px-5 pt-5'>
            <div className='flex  items-center gap-3'>
                <div className="w-12 md:w-full">
                 <img className="w-full" src='/logo.png' alt="" />
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl font-bold  text-[#FF444A]'>Donation</h1>
                    <h2 className='text-base md:text-lg font-medium tracking-[3px] md:tracking-[9px]'>Campaign</h2>
                </div>
            </div>
            <ul className='hidden md:flex gap-10 text-xl font-bold '>
                   
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                    }
                    >
                    Home
                </NavLink>   
                <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                    }
                    >
                    Donation
                </NavLink>   
                <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                    }
                    >
                    Statistics
                </NavLink>    
            </ul>
            <div className="md:hidden text-3xl  " onClick={handleShow}>
               <div>
                {
                    show? <RiMenu3Fill></RiMenu3Fill>:<AiOutlineMenu></AiOutlineMenu>
                }
               </div>
                {
                   show? <div className="text-base absolute flex gap-5  p-5 top-18 left-2  duration-1000 delay-200 ">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                        }
                        >
                        Home
                        </NavLink>   
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                            }
                            >
                            Donation
                        </NavLink>   
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                            }
                            >
                            Statistics
                        </NavLink> 
                    </div>
                    :
                    <div className="text-base absolute flex gap-5  p-5 top-18 -left-64  duration-1000 delay-200 ">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                        }
                        >
                        Home
                        </NavLink>   
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                            }
                            >
                            Donation
                        </NavLink>   
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 border-b border-red-500 pb-1" : ""
                            }
                            >
                            Statistics
                        </NavLink> 
                    </div>
                    
                }

                
            </div>
        </div>
            
            
        </div>
    );
};

export default Header;