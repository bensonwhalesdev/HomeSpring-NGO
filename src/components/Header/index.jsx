import { useState } from 'react';
import Button from '../Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-200 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex justify-between items-center p-4 w-[90%] mx-auto">

        <div className="flex items-center gap-4">
          <img className="w-10 h-10" src="/logo.png" alt="logo" />

          <ul className="hidden md:flex gap-6 items-center font-medium text-sm">
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Our Work</li>
            <li className="hover:text-green-600 cursor-pointer">Our Impact</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Button
            text={'Donate Now'}
            classStyle="bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-[10px] transition-all duration-300"
          />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-200">
          <ul className="flex flex-col gap-2 font-medium text-sm">
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Our Work</li>
            <li className="hover:text-green-600 cursor-pointer">Our Impact</li>
            <Button
              text={'Donate Now'}
              classStyle="bg-green-500 mt-2 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-[10px] transition-all duration-300 cursor-pointer"
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
