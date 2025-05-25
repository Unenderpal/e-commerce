import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {user, setUser} = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Save the new user in localStorage
    const newUser = { email, password };  // Save user data securely (e.g., hashed password)
    localStorage.setItem('user', JSON.stringify(newUser));

    // Clear the form
    setUser({
      user: email,
      email: email,
      password: password,
    });
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h1 className="text-4xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
        <div className="text-2xl font-semibold">Username:</div>
        <input  
        type='text'
          placeholder="Enter your username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="border w-[400px] border-black rounded-md p-2 m-2"
        />
        <div className="text-2xl font-semibold">Email:</div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-[400px] border-black rounded-md p-2 m-2"
        />
        <div className="text-2xl font-semibold">Password:</div>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-[400px] border-black rounded-md p-2 m-2"
        />
        <div className="text-2xl font-semibold">Confirm Password:</div>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border w-[400px] border-black rounded-md p-2 m-2"
        />
        {error && <div className="text-red-500">{error}</div>}
        <button type="submit" className="bg-blue-600 text-white rounded-md p-2 m-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
