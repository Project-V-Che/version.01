import {
  UserCircleIcon,
  KeyIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('personal_info');

  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    bio: 'Travel enthusiast and adventure seeker.',
    joinDate: 'Joined March 2022',
    avatar: '/avatars/alex.jpg',
  });

  const [formData, setFormData] = useState({ ...userData });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = e => {
    e.preventDefault();
    setUserData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  const menuItems = [
    { id: 'personal_info', label: 'Personal info', icon: UserCircleIcon },
    { id: 'security', label: 'Login & security', icon: KeyIcon },
    { id: 'notifications', label: 'Notifications', icon: BellIcon },
  ];

  return (
    <div className="bg-black text-white min-h-full">
      <main className="max-w-7xl mx-auto py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          <aside className="lg:col-span-3 xl:col-span-2 mb-8 lg:mb-0">
            <nav className="space-y-1">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-9 xl:col-span-10">
            {activeSection === 'personal_info' && (
              <div>
                <div className="md:flex items-center justify-between mb-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img
                      className="h-20 w-20 rounded-full object-cover bg-gray-800"
                      src={userData.avatar}
                      alt="User avatar"
                    />
                    <div className="ml-5">
                      <h1 className="text-2xl font-bold text-white">{userData.name}</h1>
                      <p className="text-sm text-white/60">{userData.joinDate}</p>
                    </div>
                  </div>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold hover:bg-white/20 transition"
                    >
                      Edit profile
                    </button>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-white/10 rounded-lg text-sm font-semibold hover:bg-white/20 transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition"
                      >
                        Save changes
                      </button>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSave} className="space-y-8">
                  <div className="p-6 bg-white/5 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                      />
                    ) : (
                      <p className="text-white/80">{userData.bio}</p>
                    )}
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-1">
                          Full Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                          />
                        ) : (
                          <p className="text-white/80">{userData.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-1">
                          Email Address
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                          />
                        ) : (
                          <p className="text-white/80">{userData.email}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Identity Verification</h3>
                      <p className="text-sm text-white/60 mt-1">
                        Show others you’re really you with the identity verification badge.
                      </p>
                    </div>
                    <button className="px-4 py-2 border border-white/30 rounded-lg text-sm font-semibold hover:bg-white/10 transition">
                      Get the Badge
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeSection === 'security' && (
              <div className="p-6 bg-white/5 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Login & Security</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1">Password</label>
                    <button className="px-4 py-2 border border-white/30 rounded-lg text-sm font-semibold hover:bg-white/10 transition">
                      Update Password
                    </button>
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80">Two-factor authentication</h4>
                    <p className="text-sm text-white/60 mt-1">
                      Add an extra layer of security to your account.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'notifications' && (
              <div className="p-6 bg-white/5 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                <p className="text-white/60">Manage your notification preferences here.</p>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-white/10">
              <button className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors text-red-400 hover:bg-red-500/10">
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
