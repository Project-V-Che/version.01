import { MagnifyingGlassIcon as MagnifyingGlassIconSolid } from '@heroicons/react/24/solid';
import React from 'react';

const SearchBarDesktop = ({ hideNav }) => (
  <div
    className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-0 md:pr-6 py-3 bg-black/60 backdrop-blur-md border-b border-white/10 transition-transform duration-500 ease-in-out md:ml-48 md:translate-y-0 ${hideNav ? 'translate-y-[-100%]' : 'translate-y-0'} hidden md:block`}
  >
    <div className="flex items-center justify-between px-6 gap-4">
      {/* Back Button */}
      <button className="text-white/80 hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Search Bar Button */}
      <button className="flex flex-1 items-center gap-4 px-4 py-2 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20">
        <MagnifyingGlassIconSolid className="w-5 h-5" />
        <span className="text-white/70">Search</span>
      </button>

      {/* Add Button */}
      <button className="text-white/80 hover:text-white p-1 border border-white/20 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  </div>
);

export default SearchBarDesktop;
