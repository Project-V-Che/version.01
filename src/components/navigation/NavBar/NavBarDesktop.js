import React from 'react';
import { Link } from 'react-router-dom';

import { NAV_TABS } from '../constants';

const NavBarDesktop = ({ activeTab, onTabClick }) => {
  const renderTabButton = tab => {
    const isActive = activeTab === tab.id;
    const color = isActive ? 'text-white' : 'text-white/70 hover:text-white';
    const Icon =
      tab.id === 'explore' && isActive
        ? props => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
              aria-hidden="true"
              {...props}
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          )
        : isActive
          ? tab.iconSolid
          : tab.icon;
    return (
      <Link
        to={tab.href}
        key={tab.id}
        onClick={() => onTabClick(tab.id)}
        className={`flex items-center gap-3 px-5 py-3 rounded-xl w-full text-left hover:bg-white/5 ${color} transition-colors`}
        aria-current={isActive ? 'page' : undefined}
        aria-label={tab.label}
      >
        <div className="relative">
          <Icon
            className="h-5 w-5 transition-transform duration-200 ease-in-out"
            aria-hidden="true"
          />
          {tab.id === 'messages' && (
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
          )}
        </div>
        <span className="text-sm">{tab.label}</span>
      </Link>
    );
  };

  return (
    <aside className="hidden md:flex md:flex-col md:fixed md:top-0 md:left-0 md:h-full md:w-48 bg-black border-r border-white/10 p-4">
      <div className="text-white text-xl font-bold px-1 py-4">LOGO</div>
      <nav className="flex flex-col gap-2">{NAV_TABS.map(renderTabButton)}</nav>
    </aside>
  );
};

export default NavBarDesktop;
