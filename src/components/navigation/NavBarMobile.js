import React from 'react';
import { NAV_TABS } from './constants';
import { Link } from 'react-router-dom';

const NavBarMobile = ({ activeTab, onTabClick, hideNav }) => {
  const renderTabButton = (tab) => {
    const Icon = activeTab === tab.id ? tab.iconSolid : tab.icon;
    const isActive = activeTab === tab.id;
    const color = isActive ? 'text-white' : 'text-white/70 hover:text-white';
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
          <Icon className="h-6 w-6 transition-transform duration-200 ease-in-out" aria-hidden="true" />
          {tab.id === 'messages' && <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />}
        </div>
        <span className="text-xs mt-1">{tab.label}</span>
      </Link>
    );
  };

  return (
    <nav className={`fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-around items-start bg-black/80 backdrop-blur-md border-t border-white/10 pt-2 pb-4 w-full transition-transform duration-300 ease-in-out ${hideNav ? 'translate-y-full' : 'translate-y-0'}`}>
      {NAV_TABS.map(renderTabButton)}
    </nav>
  );
};

export default NavBarMobile;
