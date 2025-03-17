import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
const logo = '/Logo/YumBoxLogo.png';

export default function TopNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <nav className='border-gray-200'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          {/* Logo Button - No Need for Dropdown Toggle Here */}
          <a href="#" className='flex items-center space-x-3'>
            <img src={logo} alt="Logo Icon" className='h-10 w-10' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-primaryText'>YumBox</span>
          </a>

          {/* User Profile Dropdown */}
          <div className='relative flex gap-2'>
            <button
              type='button'
              className='flex text-sm bg-background rounded-full  bg-red-900'
              id='user-menu-button'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              <span className='sr-only'>Open user menu</span>
              <img src={logo} alt="User profile" className='w-10 h-10' />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className='absolute right-0 mt-10 w-48 bg-Background divide-y divide-gray-200 rounded-lg shadow-lg border-primaryText border-2'>
                <div className='px-4 py-3'>
                  <span className='block text-sm text-primaryText font-semibold'>Nhi Bui</span>
                  <span className='block text-sm text-secondaryText'>nhibui0302@gmail.com</span>
                </div>
                <ul className="py-2 text-primaryText">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm primaryText hover:bg-containerBackground text-primaryText">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm primaryText hover:bg-containerBackground ">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm primaryText hover:bg-containerBackground">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm primaryText hover:bg-containerBackground">Sign out</a>
                  </li>
                </ul>
                
              </div>
            )}
            <ThemeToggle/>
          </div>
        </div>
      </nav>
    </div>
  );
}
