import React, { useState } from 'react'
import { navLinks } from '../util/ItemRender'
import { harmBurgerMenu } from '../util/Icons'

const NavComponent: React.FC = () => {
    const [ showDropdown,setShowDropdown ] = useState<boolean>(false);
    const handleDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    }
  return (
    <nav className="flex py-8 justify-between 
    px-10
    verySmall:px-5
    midLaptop:px-20
    lg:px-40">

        {/* nav Title */}
        <div className="flex items-center">
            <h1 className="font-bold tracking-wide 

            text-2xl 
            md:text-4xl">
                <span className="navTitleColor">UNWIND</span>CABINS
            </h1>
        </div>

        {/* nav Links */}
        <div className="flex items-center hidden 
        lg:flex">
            <ul className="flex poppins space-x-10 items-center">
                {
                    navLinks.map ((link, index) => {
                        return <li key={index} className="navLinks text-md">
                            {link}
                        </li>
                    })
                } 
            </ul>
        </div>

        {/* nav Links Mobile */}
        <div className="flex justify-center relative items-center flex-col lg:hidden">
            <p 
            onClick={handleDropdown}
            className="text-3xl font-bold hover:cursor-pointer">
                {
                    harmBurgerMenu
                }
            </p>

            {/* dropdown Menu */}
            <div style={{listStyleType: "none",zIndex: 10}} 
            className={`bg-gray-50 shadow-xl min-h-[40vh] py-10 ${showDropdown ? "flex flex-col space-y-10 absolute w-64 right-4 justify-between top-16" : "hidden"}`}>
                {
                    navLinks.map ((link, index) => {
                        return <li key={index} className="hover:cursor-pointer mobileLinks poppins w-full py-4 px-10">
                            {link}
                        </li>
                    })
                } 
            </div>
        </div>
    </nav>
  )
}

export default NavComponent