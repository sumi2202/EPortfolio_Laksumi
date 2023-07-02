import React from "react";
import Typed from "react-typed";

const MainPageHero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h2 className="md:text-7x1 sm:text-6xl text-4xl text-white font-bold md:py-6">Welcome to My E-Portfolio</h2>
            <div>
                <h1 className="text-[#00df9a] md:text-4xl sm:tex-3xl text-xl font-bold">Get to know me. I am:</h1>
                <Typed 
                strings={['Creative', 'Inquisitive', 'Ambitious']} 
                typeSpeed={120} 
                backspeed={140} 
                loop
                />
            </div>
            </div>
        </div>
    );
};

export default MainPageHero