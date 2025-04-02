import React from 'react';
import { Home, Plus, Info } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img 
              src="src/assets/image.png" 
              alt="Troll Face"
              className="w-16"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              MemeGen
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-10">
            <NavLink
              to="/"
              className={({isActive})=> `flex items-center space-x-2 text-gray-300 hover:text-purple-400 ${isActive?"text-purple-400":"text-gray-300"} transition-colors duration-200 text-lg`}
            >
              <Home size={22} />
              <span className="font-medium">Home</span>
            </NavLink>
            
            <NavLink
              to="/create"
              className={({isActive})=> `flex items-center space-x-2 text-gray-300 hover:text-purple-400 ${isActive?"text-purple-400":"text-gray-300"} transition-colors duration-200 text-lg`}
            >
              <Plus size={22} />
              <span className="font-medium">Create Meme</span>
            </NavLink>
            
            <NavLink
              to="/about"
              className={({isActive})=> `flex items-center space-x-2 text-gray-300 hover:text-purple-400 ${isActive?"text-purple-400":"text-gray-300"} transition-colors duration-200 text-lg`}
            >
              <Info size={22} />
              <span className="font-medium">About</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;