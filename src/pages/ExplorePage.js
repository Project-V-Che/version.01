import React from 'react';

const colorPalette = [
  'bg-pink-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-red-500',
  'bg-teal-500',
  'bg-indigo-500',
  'bg-emerald-500',
];

const destinations = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Destination ${i + 1}`,
  color: colorPalette[i % colorPalette.length],
}));

const ExplorePage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-x-hidden max-w-full">
      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(destination => (
          <div
            key={destination.id}
            className={`group relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:scale-[1.02] ${destination.color}`}
            style={{ minHeight: '20rem' }}
          >
            <div className="absolute inset-0 opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">{destination.name}</h3>
              <p className="text-base text-white/80 mt-2">Starting from $120</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
