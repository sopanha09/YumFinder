import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFieldErrors({ username: '', password: '' });

    let hasError = false;

    if (!username) {
      setFieldErrors((prev) => ({ ...prev, username: 'Username is required' }));
      hasError = true;
    }

    if (!password) {
      setFieldErrors((prev) => ({ ...prev, password: 'Password is required' }));
      hasError = true;
    }

    if (hasError) return;

    if (username === 'admin' && password === '1111') {
      login();
      navigate('/');
    } else {
      setFieldErrors({
        username: 'Invalid username',
        password: 'Invalid password',
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1
        className="text-3xl font-bold mb-2 bg-clip-text text-transparent animate-gradient font-rubik"
        style={{
          backgroundImage:
            'linear-gradient(270deg, var(--secondary), var(--primary), var(--secondary))',
          backgroundSize: '200% auto',
        }}
      >
        Login here
      </h1>
      <p className="text-gray-800 mb-6">Welcom back you're been missed!</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-100 p-5 rounded-xl shadow w-full max-w-sm"
      >
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full px-3 py-2 rounded focus:outline-none focus:ring-2 ${
              fieldErrors.username
                ? 'border border-red-500 focus:ring-red-500'
                : 'bg-[#E8F0FE] focus:ring-[color:var(--neutral)]/20'
            }`}
            placeholder="Enter your username"
          />
          {fieldErrors.username && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 rounded  focus:outline-none focus:ring-2 ${
              fieldErrors.password
                ? ' border border-red-500 focus:ring-red-500'
                : 'bg-[#E8F0FE] focus:ring-[color:var(--neutral)]/20'
            }`}
            placeholder="Enter your password"
          />
          {fieldErrors.password && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white font-bold py-2 px-4 rounded animate-gradient"
          style={{
            backgroundImage:
              'linear-gradient(270deg, var(--secondary), var(--primary), var(--secondary))',
            backgroundSize: '200% auto',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
