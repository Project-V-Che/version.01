import React from 'react';
import { Link } from 'react-router-dom';

import { NAV_TABS } from '../constants';

const NavBarMobile = ({ activeTab, onTabClick, hideNav }) => {
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
              className="h-7 w-7 text-white"
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
        className={`flex flex-col items-center justify-center flex-1 ${color} transition-colors`}
        aria-current={isActive ? 'page' : undefined}
        aria-label={tab.label}
      >
        <div className="relative">
          <Icon
            className="h-6 w-6 transition-transform duration-200 ease-in-out"
            aria-hidden="true"
          />
          {tab.id === 'messages' && (
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
          )}
        </div>
        <span className="text-xs mt-1">{tab.label}</span>
      </Link>
    );
  };

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-around items-start bg-black/80 backdrop-blur-md border-t border-white/10 pt-2 pb-4 w-full transition-transform duration-300 ease-in-out ${hideNav ? 'translate-y-full' : 'translate-y-0'}`}
    >
      {NAV_TABS.map(renderTabButton)}
    </nav>
  );
};

export default NavBarMobile;
