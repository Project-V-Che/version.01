import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';

// Lazy load pages for better performance
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const WishlistPage = lazy(() => import('./pages/WishlistPage'));
const BookingsPage = lazy(() => import('./pages/BookingsPage'));
const MessagesPage = lazy(() => import('./pages/MessagesPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <Router basename="/travel-app">
      <Suspense fallback={<LoadingFallback />}>
        <div className="App min-h-screen bg-black text-white font-sans">
          <NavBar />
          <main className="md:pl-48 pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<ExplorePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
