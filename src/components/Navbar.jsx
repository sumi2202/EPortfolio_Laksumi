import React, {useEffect, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };
    return(
        <div className ="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#fbf5f3] font-bold">
            <h1 className="w-full text-3xl font-bold text-[#f72585]">Laksumi Soma.</h1>
            <ul className="hidden md:flex">
                <li className ="p-4">Home</li>
                <li className ="p-4">About</li>
                <li className ="p-4">Projects</li>
                <li className ="p-4">Contact</li>
                <li><button className="px-4 text-[#fbf5f3] font-md rounded-md bg-[#7209b7]">My Resume</button></li>
            </ul>
            <div onClick={handleNav} className="md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#7209b7] bg-[#02020a] ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-[#f72585] m-4">Laksumi Soma.</h1>
                <ul className="uppercase p-4">
                    <li className ="p-4 text-[#fbf5f3] font-bold border-b border-[#f72585]">Home</li>
                    <li className ="p-4 text-[#fbf5f3] font-bold border-b border-[#f72585]">About</li>
                    <li className ="p-4 text-[#fbf5f3] font-bold border-b border-[#f72585]">Projects</li>
                    <li className ="p-4 text-[#fbf5f3] font-bold border-b border-[#f72585]">Contact</li>
                    <li className ="p-4 text-[#f72585] font-bold border-b border-[#f72585]">My Resume</li>

                </ul>
            </div>
        </div>
        
    );
};

export default Navbar;