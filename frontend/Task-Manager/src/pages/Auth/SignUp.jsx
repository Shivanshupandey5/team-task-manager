import React, { useContext, useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import Input from '../../components/Inputs/Input';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';
import uploadImage from '../../utils/uploadImage';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminInviteToken, setAdminInviteToken] =
    useState('');
  const [error, setError] = useState('');

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Handle Signup
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = '';

    // Validation
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Please enter your password.');
      return;
    }

    if (password.length < 6) {
      setError(
        'Password must be at least 6 characters.'
      );
      return;
    }

    setError('');

    try {
      // Upload image if selected
      if (profilePic) {
        const imgUploadRes =
          await uploadImage(profilePic);

        profileImageUrl =
          imgUploadRes?.imageUrl || '';
      }

      // Signup API
      const response =
        await axiosInstance.post(
          API_PATHS.Auth.REGISTER,
          {
            name: fullName,
            email,
            password,
            profileImageUrl,
            adminInviteToken,
          }
        );

      console.log(
        'SIGNUP RESPONSE:',
        response.data
      );

      const { token, role } = response.data;

      // Save token
      if (token) {
        localStorage.setItem('token', token);

        // Update context
        updateUser(response.data);

        // Redirect based on role
        if (
          role?.toLowerCase() === 'admin'
        ) {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/dashboard');
        }
      }
    } catch (err) {
      console.error(
        'Signup Error:',
        err.response?.data || err.message
      );

      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError(
          'Signup failed. Please try again.'
        );
      }
    }
  };

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        
        <h3 className='text-xl font-semibold text-black'>
          Create an Account
        </h3>

        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>
          
          <ProfilePhotoSelector
            image={profilePic}
            setImage={setProfilePic}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            
            <Input
              value={fullName}
              onChange={({ target }) =>
                setFullName(target.value)
              }
              label='Full Name'
              placeholder='Babubhiya'
              type='text'
            />

            <Input
              value={email}
              onChange={({ target }) =>
                setEmail(target.value)
              }
              label='Email Address'
              placeholder='email@example.com'
              type='email'
            />

            <Input
              value={password}
              onChange={({ target }) =>
                setPassword(target.value)
              }
              label='Password'
              placeholder='Minimum 6 characters'
              type='password'
            />

            <Input
              value={adminInviteToken}
              onChange={({ target }) =>
                setAdminInviteToken(target.value)
              }
              label='Admin Invite Token'
              placeholder='6 Digit Code (Optional)'
              type='text'
            />
          </div>

          {error && (
            <p className='text-red-500 text-xs pb-2.5 mt-2'>
              {error}
            </p>
          )}

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded mt-4 hover:bg-blue-700 transition-colors'
          >
            SIGN UP
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='font-medium text-primary underline'
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;