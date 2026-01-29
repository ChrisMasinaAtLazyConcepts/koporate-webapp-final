// components/SignedInBadge.tsx
import React from 'react';
import { User, Mail, CheckCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SignedInBadgeProps {
  showLogout?: boolean;
  className?: string;
}

const SignedInBadge: React.FC<SignedInBadgeProps> = ({ 
  showLogout = true, 
  className = '' 
}) => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const getColorClass = (email: string) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-pink-500 to-pink-600',
    ];
    const index = email.length % colors.length;
    return colors[index];
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Badge */}
      <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
        {/* Avatar */}
       
        
        {/* User Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Uploads:</span>
          </div>
          <div className="flex items-center gap-2">
             <h4 className="text-sm font-semibold text-gray-700 mb-3"> <span className='text-grey'>info@korporate.co.za</span></h4>
           
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default SignedInBadge;