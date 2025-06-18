import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeftIcon, 
  PaperAirplaneIcon, 
  PaperClipIcon, 
  EllipsisHorizontalIcon,
  CheckIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

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
      { id: 3, sender: 'them', text: 'Sure, I\'d be happy to help! What would you like to know?', time: '10:33 AM' },
      { id: 4, sender: 'me', text: 'What time is check-in and check-out?', time: '10:35 AM' },
      { id: 5, sender: 'them', text: 'Check-in is at 3 PM and check-out is at 11 AM.', time: '10:40 AM' },
      { id: 6, sender: 'them', text: 'Thanks for your booking! Here are the check-in instructions...', time: '2h ago' },
    ]
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    avatar: '/avatars/sarah.jpg',
    lastMessage: 'The apartment is available for your selected dates.',
    time: '1d ago',
    unread: 0,
    online: false,
    messages: []
  },
  {
    id: 3,
    name: 'Michael Brown',
    avatar: '/avatars/michael.jpg',
    lastMessage: 'We offer a 10% discount for weekly stays.',
    time: '3d ago',
    unread: 0,
    online: true,
    messages: []
  },
];

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [message, setMessage] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [selectedChat]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className={`w-full md:w-96 border-r border-white/10 bg-black ${selectedChat ? 'hidden md:flex' : 'flex'} flex-col`}>
        <div className="p-4 border-b border-white/10 sticky top-0 bg-black z-10">
          <h1 className="text-xl font-bold text-white">Messages</h1>
          <div className="relative mt-4">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input type="text" placeholder="Search messages..." className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 transition" />
          </div>
        </div>
        <div className="overflow-y-auto flex-1">
          {conversations.map((conv) => (
            <div 
              key={conv.id}
              className={`flex items-center p-4 border-b border-white/10 cursor-pointer transition-colors ${
                selectedChat?.id === conv.id ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
              onClick={() => setSelectedChat(conv)}
            >
              <div className="relative">
                <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full object-cover bg-gray-700" />
                {conv.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>}
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold truncate text-white">{conv.name}</h3>
                  <span className="text-xs text-white/60 flex-shrink-0">{conv.time}</span>
                </div>
                <p className={`text-sm truncate ${conv.unread > 0 ? 'text-white font-medium' : 'text-white/60'}`}>
                  {conv.lastMessage}
                </p>
              </div>
              {conv.unread > 0 && (
                <div className="ml-2 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {conv.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col bg-gray-900/50">
          <div className="p-3 border-b border-white/10 flex items-center sticky top-0 bg-gray-900/50 z-10">
            <button className="md:hidden mr-2 p-2 rounded-full hover:bg-white/10" onClick={() => setSelectedChat(null)}>
              <ArrowLeftIcon className="w-5 h-5 text-white" />
            </button>
            <div className="relative">
              <img src={selectedChat.avatar} alt={selectedChat.name} className="w-10 h-10 rounded-full object-cover bg-gray-700" />
              {selectedChat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900/50"></div>}
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-white">{selectedChat.name}</h2>
              <p className="text-xs text-green-400">{selectedChat.online ? 'Online' : ''}</p>
            </div>
            <div className="ml-auto">
              <button className="p-2 rounded-full text-white/80 hover:bg-white/10">
                <EllipsisHorizontalIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto space-y-4">
            {selectedChat.messages.length > 0 ? (
              selectedChat.messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2.5 rounded-2xl ${msg.sender === 'me' ? 'bg-blue-600 text-white rounded-br-lg' : 'bg-white/10 text-white rounded-bl-lg'}`}>
                    <p>{msg.text}</p>
                    <div className={`text-xs mt-1.5 flex items-center ${msg.sender === 'me' ? 'text-blue-200 justify-end' : 'text-white/50'}`}>
                      {msg.time}
                      {msg.sender === 'me' && <CheckIcon className="w-4 h-4 inline ml-1" />}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-white/60">No messages yet.</div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-gray-900/50">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <button type="button" className="p-3 rounded-full text-white/80 hover:bg-white/10 transition">
                <PaperClipIcon className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-white/60 transition"
              />
              <button type="submit" className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:bg-blue-600/50 disabled:cursor-not-allowed" disabled={!message.trim()}>
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-900/50">
          <div className="text-center">
            <h2 className="text-xl font-medium text-white">Select a conversation</h2>
            <p className="text-white/60 mt-1">Choose from your existing conversations to start chatting.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
