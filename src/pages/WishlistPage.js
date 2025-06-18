import React from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid';

const WishlistPage = () => {
  const wishlistItems = [
    { id: 1, name: 'Luxury Villa in Bali', location: 'Ubud, Indonesia', price: 320, rating: 4.9, image: '/images/bali-villa.jpg' },
    { id: 2, name: 'Beachfront Resort', location: 'Phuket, Thailand', price: 280, rating: 4.7, image: '/images/phuket-resort.jpg' },
    { id: 3, name: 'Mountain Cabin', location: 'Swiss Alps, Switzerland', price: 420, rating: 4.8, image: '/images/swiss-cabin.jpg' },
  ];

  return (
    <div className="bg-black text-white min-h-full">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white">Wishlist</h1>
          <p className="mt-2 text-sm text-white/60">
            {wishlistItems.length} saved {wishlistItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white/5 rounded-2xl overflow-hidden group">
                <div className="relative h-56 bg-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <HeartIcon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold text-sm">{item.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-white truncate">{item.name}</h3>
                  <p className="text-sm text-white/60 truncate">{item.location}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white">${item.price}</span>
                      <span className="text-sm text-white/60"> / night</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <HeartIcon className="w-10 h-10 text-white/40" />
            </div>
            <h3 className="text-xl font-semibold text-white">Your wishlist is empty</h3>
            <p className="mt-2 text-white/60">Save your favorite places to stay by clicking the heart icon.</p>
            <div className="mt-8">
              <a
                href="/explore"
                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
              >
                Explore Stays
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WishlistPage;
