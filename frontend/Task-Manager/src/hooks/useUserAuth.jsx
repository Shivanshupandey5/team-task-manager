import {useContext, useEffect} from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export const useUserAuth = () => {
    const {user, loading, clearUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) return; // Wait for loading to finish
        if(user) return; // User is authenticated, no need to redirect
        if(!user){
            clearUser(); // Clear any stale user data
            navigate("/login"); // Redirect to login if not authenticated
        }
    }, [user, loading, navigate, clearUser]);
};