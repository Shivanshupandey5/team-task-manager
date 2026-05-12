import React, { useContext } from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import { UserContext } from '../../context/userContext';

const DashboardLayout = ({ children, activeMenu }) => {

    const { user } = useContext(UserContext);

    return (

        <div className='min-h-screen bg-gray-50'>

            {/* Navbar */}
            <Navbar activeMenu={activeMenu} />

            <div className='flex'>

                {/* Sidebar - Desktop Only */}
                {user && (
                    <div className='hidden lg:block w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-72px)]'>
                        <SideMenu activeMenu={activeMenu} />
                    </div>
                )}

                {/* Main Content */}
                <main className='flex-1 p-4 md:p-6 overflow-y-auto'>
                    {children}
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;