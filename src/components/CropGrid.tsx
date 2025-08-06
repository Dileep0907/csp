import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { andhrapradeShCrops } from '../data/crops';
import CropCard from './CropCard';

const CropGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');

  const filteredCrops = andhrapradeShCrops.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.localName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeason = selectedSeason === 'All' || crop.season === selectedSeason;
    return matchesSearch && matchesSeason;
  });

  const seasons = ['All', 'Kharif', 'Rabi', 'Perennial'];

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search crops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
          >
            {seasons.map(season => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="text-gray-600">
        Showing {filteredCrops.length} crop{filteredCrops.length !== 1 ? 's' : ''}
      </div>

      {/* Crop Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCrops.map(crop => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>

      {filteredCrops.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No crops found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CropGrid;