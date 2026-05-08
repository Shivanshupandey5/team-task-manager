import React, { useContext } from 'react'
import SideMenu from './SideMenu';
import Navbar from './Navbar';
import { UserContext } from '../../context/userContext';

const DashboardLayout = ({ children , activeMenu}) => {
    const { user } = useContext(UserContext); // Custom hook to check user authentication
    return (
        <div className='flex h-screen w-full'>
            <Navbar activeMenu={activeMenu} />
            {user && (
                <div className='flex'>
                    <div className='max-[1080px]:hidden'>
                        <SideMenu activeMenu={activeMenu} />
                    </div>

                    <div className='grow mx-5'>{children}</div>
                </div>
            )}
        </div>
    )
}

export default DashboardLayout;