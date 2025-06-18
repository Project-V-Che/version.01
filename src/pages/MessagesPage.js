import React, { useState } from 'react';
import { PaperAirplaneIcon, PaperClipIcon, DotsHorizontalIcon } from '@heroicons/react/outline';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'John Smith',
      avatar: '/avatars/john.jpg',
      lastMessage: 'Thanks for your booking! Here are the check-in instructions...',
      time: '2h ago',
      unread: 2,
      online: true,
      messages: [
        { id: 1, sender: 'them', text: 'Hi there!', time: '10:30 AM' },
        { id: 2, sender: 'me', text: 'Hello! I have a question about my booking.', time: '10:32 AM' },
        { id: 3, sender: 'them', text: 'Sure, what would you like to know?', time: '10:33 AM' },
      ],
    },
    // Additional conversation examples
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      lastMessage: 'Your reservation is confirmed!',
      time: '1d ago',
      unread: 0,
      online: false,
      messages: [
        { id: 1, sender: 'them', text: 'Hello! Your booking is confirmed.', time: 'Yesterday' },
      ],
    },
  ];

  const currentChat = conversations[selectedChat] || conversations[0];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, you would send the message to your backend here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedChat(index);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-100">
      {/* Sidebar */}
      <nav 
        className="w-full md:w-1/3 border-r border-gray-200 bg-white flex flex-col" 
        aria-label="Conversations"
      >
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((convo, index) => (
            <div
              key={convo.id}
              role="button"
              tabIndex={0}
              className={`flex items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedChat === index ? 'bg-blue-50' : ''
              }`}
              onClick={() => setSelectedChat(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-current={selectedChat === index ? 'true' : undefined}
            >
              <div className="relative">
                <img
                  src={convo.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full"
                  aria-hidden="true"
                />
                {convo.online && (
                  <span className="sr-only">Online</span>
                )}
                <div 
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    convo.online ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h2 className="font-medium text-gray-900 truncate">{convo.name}</h2>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{convo.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{convo.lastMessage}</p>
              </div>
              {convo.unread > 0 && (
                <span 
                  className="ml-2 bg-blue-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0"
                  aria-label={`${convo.unread} unread messages`}
                >
                  {convo.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Chat Area - Only show on medium screens and up */}
      <div className="hidden md:flex flex-1 flex-col">
        {currentChat && (
          <>
            {/* Chat Header */}
            <header className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={currentChat.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                  aria-hidden="true"
                />
                <div className="ml-3">
                  <h2 className="font-medium text-gray-900">{currentChat.name}</h2>
                  <p className="text-xs text-gray-500">
                    {currentChat.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <button 
                type="button"
                className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                aria-label="More options"
              >
                <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>

            {/* Messages */}
            <div 
              className="flex-1 p-4 overflow-y-auto bg-gray-50"
              aria-live="polite"
              aria-atomic="false"
            >
              <div className="space-y-4">
                {currentChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'me' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sender === 'me'
                          ? 'bg-blue-500 text-white rounded-br-none'
                          : 'bg-white text-gray-800 rounded-bl-none shadow'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <form 
              onSubmit={handleSendMessage}
              className="p-4 bg-white border-t border-gray-200"
              aria-label="Send a message"
            >
              <div className="flex items-center">
                <button 
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                  aria-label="Attach file"
                >
                  <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 mx-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Type a message"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Send message"
                >
                  <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* Mobile Chat View - Only show on small screens */}
      <div className="md:hidden fixed inset-0 bg-white z-10 flex flex-col" style={{ display: selectedChat !== null ? 'flex' : 'none' }}>
        {currentChat && (
          <>
            <header className="p-4 border-b border-gray-200 bg-white flex items-center">
              <button 
                type="button"
                onClick={() => setSelectedChat(null)}
                className="mr-2 text-gray-500"
                aria-label="Back to conversations"
              >
                ←
              </button>
              <img
                src={currentChat.avatar}
                alt=""
                className="w-10 h-10 rounded-full"
                aria-hidden="true"
              />
              <div className="ml-3">
                <h2 className="font-medium">{currentChat.name}</h2>
                <p className="text-xs text-gray-500">
                  {currentChat.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </header>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {currentChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'me' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.sender === 'me'
                          ? 'bg-blue-500 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form 
              onSubmit={handleSendMessage}
              className="p-4 border-t border-gray-200 bg-white"
              aria-label="Send a message"
            >
              <div className="flex items-center">
                <button 
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-700"
                  aria-label="Attach file"
                >
                  <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 mx-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Type a message"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Send message"
                >
                  <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;