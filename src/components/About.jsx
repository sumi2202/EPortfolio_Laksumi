import React from "react";
import Typed from "react-typed";

const MainPageHero = () => {
    return (
        <div className="text-[#fbf5f3]">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h2 className="md:text-7x1 sm:text-6xl text-4xl text-[#fbf5f3] font-bold md:py-6">Welcome to My E-Portfolio</h2>
            <div className="flex justify-center items-center">
                <h1 className="text-[#fbf5f3] md:text-4xl sm:tex-3xl text-xl font-bold py-4">Get to know me. I am</h1>
                <Typed 
                className="text-[#f72585] md:text-4xl sm:tex-3xl text-xl font-bold md:pl-4 pl-2"
                strings=
                {['adventurous.',
                'ambitious.',
                'charismatic.',
                'creative.',
                'dedicated.',
                'determined.',
                'empathetic.',
                'easy-going.',
                'imaginative.',
                'inquisitive.']} 
                typeSpeed={120} 
                backspeed={160} 
                loop
                />
            </div>
            </div>
        </div>
    );
};

export default MainPageHero