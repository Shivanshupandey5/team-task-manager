import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {

    const [openSideMenu, setOpenSideMenu] = useState(false);

    return (

        <div className='sticky top-0 z-50 bg-white border-b border-gray-200 px-5 py-4 flex items-center justify-between'>

            {/* Left */}
            <div className='flex items-center gap-4'>

                {/* Mobile Menu Button */}
                <button
                    className='block lg:hidden text-black'
                    onClick={() => setOpenSideMenu(!openSideMenu)}
                >
                    {openSideMenu ? (
                        <HiOutlineX className='text-2xl' />
                    ) : (
                        <HiOutlineMenu className='text-2xl' />
                    )}
                </button>

                {/* Logo */}
                <h2 className='text-xl font-semibold text-black'>
                    Task Manager
                </h2>

            </div>

            {/* Mobile Sidebar */}
            {openSideMenu && (
                <div className='fixed top-[72px] left-0 w-64 h-screen bg-white shadow-xl z-50 lg:hidden'>
                    <SideMenu activeMenu={activeMenu} />
                </div>
            )}

        </div>
    );
};

export default Navbar;