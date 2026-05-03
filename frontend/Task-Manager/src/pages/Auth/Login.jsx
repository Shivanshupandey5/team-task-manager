import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { Link } from "react-router-dom";
import { validateEmail } from '../../utils/helper';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState(null);

  const{updateUser} = useContext(UserContext);

  const navigate = useNavigate();

  // Handle Login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }
    if(!password){
      setError("Please enter your password.");
      return;
    }

    setError("");

    //Login API Call 

    try{
      const response = await axiosInstance.post(API_PATHS.Auth.LOGIN,{
        email,
        password
      });
      const { token, role } = response.data;
      if(token){
        localStorage.setItem("token", token);
        updateUserRole(response.data);
      

          //Redirect based on role
          if(role === "Admin"){
            navigate("/admin/dashboard");
          }else{
            navigate("/user/dashboard");
          }
      }
    }catch(err){
      if(err.response && err.response.data.message){
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    }
  };
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in 
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="email@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded mt-2 hover:bg-blue-700 transition-colors'>
            LOG IN
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Don't have an account?{" "}
            <Link to="/signup" className='font-medium text-primary underline'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login