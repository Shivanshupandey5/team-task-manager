import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';


const Dashboard = () => {

  useUserAuth(); // Custom hook to check user authentication

  const { user } = useContext(UserContext); // Custom hook to check user authentication

  return <DashboardLayout>Dashboard</DashboardLayout>;
}

export default Dashboard