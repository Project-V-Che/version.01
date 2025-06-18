import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { PROFILE_MENU_ITEMS } from './constants';

const NavBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('explore');
  const [showModal, setShowModal] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const path = location.pathname.split('/')[1] || 'explore';
    setActiveTab(path);
  }, [location.pathname]);

  const updateNavVisibility = useCallback(() => {
    const currentY = window.scrollY;
    const deltaY = currentY - lastScrollY.current;
    lastScrollY.current = currentY;
    
    setTimeout(() => {
      if (window.scrollY <= 10) {
        setHideNav(false);
      } else {
        setHideNav(deltaY > 0);
      }
    }, 150);
    
    ticking.current = false;
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(updateNavVisibility);
      ticking.current = true;
    }
  }, [updateNavVisibility]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
  }, [showModal]);

  const handleTabClick = useCallback((tabId) => {
    if (tabId === 'profile') {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <NavBarMobile activeTab={activeTab} onTabClick={handleTabClick} hideNav={hideNav} />
      
      {/* Desktop Sidebar Navigation */}
      <NavBarDesktop activeTab={activeTab} onTabClick={handleTabClick} />
      
      {/* Modal for Profile */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setShowModal(false)}>
          <div className="w-full max-w-sm bg-gray-900/70 backdrop-blur-xl rounded-2xl text-white p-6 relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-white/60 hover:text-white transition">
              <XMarkIcon className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-semibold mb-1">Profile</h2>
            <p className="text-sm text-white/70 mb-6">Log in to start planning your next vacation.</p>
            <button className="w-full bg-white text-black font-semibold py-2.5 rounded-lg text-sm hover:bg-gray-200 transition">
              Log in or sign up
            </button>
            <div className="mt-6 space-y-2 text-sm">
              {PROFILE_MENU_ITEMS.map((item) => (
                <a href="#" key={item.id} className="flex items-center justify-between px-3 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-white/70" />
                    <span>{item.label}</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-white/50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
