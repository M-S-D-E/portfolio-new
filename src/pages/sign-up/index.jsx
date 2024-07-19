import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

import loginImage from '../../assets/images/login.jpg';
import { apiCheckUsernameExists, apiLogin, apiSignUp } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { debounce } from 'lodash';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);

  const navigate = useNavigate();

  const { register: registerSignUp, handleSubmit: handleSubmitSignUp, watch, formState: { errors: errorsSignUp } } = useForm();
  const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin } } = useForm();

  const [isLoginForm, setIsLoginForm] = useState(false);

  const userNameWatch = watch("username");

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const checkUsername = async (username) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExists(username);
      console.log(res.data);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.error('Error checking username:', error);
      toast.error("An error occured!");
    } finally {
      setIsUsernameLoading(false);
    }
  };

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUsername(userNameWatch);
      }
    }, 1000)
    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    }

  }, [userNameWatch]);

  const handleSignUpSubmit = async (data) => {
    if (!usernameAvailable) {
      toast.error('Username is already taken. Please choose another one.');
      return;
    }

    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.username,
      password: data.password,
      confirmedPassword: data.password,
      email: data.email,
    };
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }
    try {
      const res = await apiSignUp(payload);
      toast.success("Signup successful!");
      setSignupSuccess(true);
      setTimeout(() => {
        setSignupSuccess(false);
        setIsLoginForm(true);
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data === 'User has already signed up') {
          toast.error('User already exists. Please log in.');
        } else {
          toast.error('Unauthorized. Please check your credentials.');
        }
      } else {
        console.error('Signup error:', error);
        toast.error("An error occured!");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        email: data.emailOrUsername,
        password: data.password,
      });
      console.log("Response: ", res.data);
      localStorage.setItem("accessToken", res.data.acessToken);

      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error('Login error:', error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 relative overflow-hidden">
      <img
        src={loginImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative w-full max-w-4xl mx-auto flex items-center">
        <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4 w-full max-w-md mx-auto overflow-y-auto max-h-full">
          <div className="flex justify-end mb-4">
            <button
              className={`py-2 px-4 mr-2 font-bold ${isLoginForm ? 'text-gray-500' : 'text-blue-500'} bg-white bg-opacity-75 border border-gray-300 rounded hover:bg-opacity-100 transition duration-200`}
              onClick={handleToggleForm}
            >
              Sign Up
            </button>
            <button
              className={`py-2 px-4 font-bold ${isLoginForm ? 'text-blue-500' : 'text-gray-500'} bg-white bg-opacity-75 border border-gray-300 rounded hover:bg-opacity-100 transition duration-200`}
              onClick={handleToggleForm}
            >
              Login
            </button>
          </div>

          <AnimatePresence>
            {isSubmitting && (
              <div className="flex justify-center mb-4">
                <Loader />
              </div>
            )}
            {signupSuccess && (
              <div className="flex justify-center mb-4 text-green-500 font-bold">
                Signup Successful!
              </div>
            )}
            {isLoginForm ? (
              <motion.div
                key="login"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                <form onSubmit={handleSubmitLogin(handleLoginSubmit)} className="space-y-2">
                  <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">Email or Username</label>
                    <input
                      type="text"
                      {...registerLogin('emailOrUsername', { required: true })}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                    {errorsLogin.emailOrUsername && <span className="text-red-500">This field is required</span>}
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">Password</label>
                    <input
                      type="password"
                      {...registerLogin('password', { required: true })}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                    {errorsLogin.password && <span className="text-red-500">This field is required</span>}
                  </motion.div>

                  <div className="flex justify-center">
                    <motion.button
                      type="submit"
                      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
                      variants={formVariants}
                    >
                      Login
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                <form onSubmit={handleSubmitSignUp(handleSignUpSubmit)} className="space-y-2">
                  <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">First Name</label>
                    <input
                      {...registerSignUp('firstName', { required: true })}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                    {errorsSignUp.firstName && <span className="text-red-500">This field is required</span>}
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">Last Name</label>
                    <input
                      {...registerSignUp('lastName', { required: true })}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                    {errorsSignUp.lastName && <span className="text-red-500">This field is required</span>}
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">Other Names</label>
                    <input
                      {...registerSignUp('otherNames')}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">Username</label>
                    <input
                      {...registerSignUp('username', { required: true })}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                    {errorsSignUp.username && <span className="text-red-500">This field is required</span>}
                    <div className='flex items-center gap-x-2'>
                      {isUsernameLoading && <Loader />}
                      {usernameNotAvailable && (
                        <p className='text-red-500'>Username is already taken</p>
                      )}
                      {usernameAvailable && (
                        <p className='text-green-500'>Username is available</p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">Email</label>
                    <input
                      type="email"
                      {...registerSignUp('email', { required: true })}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                    {errorsSignUp.email && <span className="text-red-500">This field is required</span>}
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label className="block mb-1 text-gray-700">Password</label>
                    <input
                      type="password"
                      {...registerSignUp('password', { required: true })}
                      className="w-full px-3 py-1 border border-gray-300 rounded bg-white bg-opacity-75"
                    />
                    {errorsSignUp.password && <span className="text-red-500">This field is required</span>}
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label className="flex items-center text-gray-700">
                      <input
                        type="checkbox"
                        {...registerSignUp('termsAndConditions', { required: true })}
                        className="mr-2"
                      />
                      I agree to the terms and conditions
                    </label>
                    {errorsSignUp.termsAndConditions && <span className="text-red-500">This field is required</span>}
                  </motion.div>

                  <div className="flex justify-center">
                    <motion.button
                      type="submit"
                      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
                      variants={formVariants}
                    >
                      {isSubmitting ? <Loader /> : "Sign Up"}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
