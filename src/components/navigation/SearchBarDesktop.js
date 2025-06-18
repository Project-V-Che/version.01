import React from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const SearchBarDesktop = () => (
  <div className="mb-8 sticky top-0 z-10 py-4 bg-black/70 backdrop-blur-xl w-full px-0 md:block hidden">
    <div className="max-w-2xl mx-auto flex items-center gap-4 w-full">
      <div className="relative flex-1 w-full">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
        />
      </div>
      <button className="p-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-white/10 transition">
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default SearchBarDesktop;
