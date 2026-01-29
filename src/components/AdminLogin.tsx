import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import { X, Lock, Mail, Eye, EyeOff, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, login } = useAuth();

  // Close modal if user is already logged in
  React.useEffect(() => {
    if (user && isOpen) {
      onClose();
    }
  }, [user, isOpen, onClose]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const userData = {
        id: '1',
        email: 'admin@korporate.co.za',
        password: 'password123',
        name: 'Admin User',
        role: 'admin',
        token: 'test'
      };

      if (email === userData.email && password === userData.password) {
        toast.success('Login successful!');
        onClose();
        setEmail('admin@korporate.co.za');
        setPassword('password123');
        login(userData);
        navigate('/inbox'); //
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthError = (error: any) => {
    if (error.message?.includes('Invalid login credentials')) {
      toast.error('Invalid email or password');
    } else if (error.message?.includes('Email not confirmed')) {
      toast.error('Please verify your email first');
    } else if (error.status === 400) {
      toast.error('Authentication service error. Please try again later.');
    } else {
      toast.error('Login failed. Please check your connection and try again.');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#00CFC1] to-teal-500 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Admin Portal</h2>
                <p className="text-sm text-gray-500">Secure access required</p>
              </div>
            </div>
            <button
              onClick={onClose}
              disabled={isLoading}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center py-4">
          <div className="bg-wgurw rounded-xl p-4 ">
            <img
              src={'./assets/images/korporatelogo.jpg'}
              alt={'Korporate Logo'}
              className="w-40 h-20 object-contain transition-all duration-200 hover:opacity-90"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@korporate.co.za"
                className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00CFC1] focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                required
                disabled={isLoading}
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00CFC1] focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                required
                disabled={isLoading}
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

         

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#00CFC1] to-teal-500 text-white p-3 rounded-xl font-semibold hover:from-teal-500 hover:to-[#00CFC1] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Authenticating...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Access Admin Portal</span>
              </div>
            )}
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="w-full p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-200 disabled:opacity-50 font-medium"
          >
            Cancel
          </button>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
          <p className="text-xs text-gray-500 text-center">
            Secure admin access • Korporate Management System
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;