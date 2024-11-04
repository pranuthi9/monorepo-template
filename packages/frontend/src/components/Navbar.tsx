import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, TimerIcon, Bell, User } from 'lucide-react';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-900/95 border-b border-dark-800 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <TimerIcon className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              TimeCapsule
            </span>
          </Link>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search memories..."
                className="w-full bg-dark-800 text-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-dark-700 transition-all placeholder-gray-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-dark-800 rounded-full transition-colors text-gray-400 hover:text-gray-200">
              <Bell className="h-6 w-6" />
            </button>
            <Link
              to="/profile"
              className="p-2 hover:bg-dark-800 rounded-full transition-colors text-gray-400 hover:text-gray-200"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};