import React, { useState } from 'react';
import { Search, Filter, Grid, List, SortAsc, SortDesc } from 'lucide-react';
import { crops } from '../data/crops';
import CropCard from './CropCard';

const CropSelector: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  const seasons = ['All', 'Kharif', 'Rabi', 'Perennial'];
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'profit', label: 'Profit' },
    { value: 'growthPeriod', label: 'Growth Period' },
    { value: 'totalCost', label: 'Investment' },
    { value: 'waterRequirement', label: 'Water Requirement' }
  ];

  const filteredAndSortedCrops = crops
    .filter(crop => {
      const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           crop.localName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSeason = selectedSeason === 'All' || crop.season === selectedSeason;
      return matchesSearch && matchesSeason;
    })
    .sort((a, b) => {
      let aValue = a[sortBy as keyof typeof a];
      let bValue = b[sortBy as keyof typeof b];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
          Crop Database
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore comprehensive information about various crops. 
          Select, compare, and analyze crop data to make informed farming decisions.
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search crops by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Season Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
            >
              {seasons.map(season => (
                <option key={season} value={season}>{season} Season</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>Sort by {option.label}</option>
              ))}
            </select>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            Showing {filteredAndSortedCrops.length} of {crops.length} crops
          </span>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
              {selectedSeason} Season
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              {viewMode === 'grid' ? 'Grid View' : 'List View'}
            </span>
          </div>
        </div>
      </div>

      {/* Crop Grid/List */}
      {filteredAndSortedCrops.length > 0 ? (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' 
          : 'space-y-4'
        }>
          {filteredAndSortedCrops.map(crop => (
            <div
              key={crop.id}
              onClick={() => setSelectedCrop(selectedCrop === crop.id ? null : crop.id)}
              className="cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <CropCard 
                crop={crop} 
                compact={viewMode === 'list'} 
                expanded={selectedCrop === crop.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No crops found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Quick Stats */}
      {filteredAndSortedCrops.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                ₹{Math.round(filteredAndSortedCrops.reduce((sum, crop) => sum + crop.profit, 0) / filteredAndSortedCrops.length).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Avg. Profit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(filteredAndSortedCrops.reduce((sum, crop) => sum + crop.growthPeriod, 0) / filteredAndSortedCrops.length)} days
              </div>
              <div className="text-sm text-gray-600">Avg. Growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                ₹{Math.round(filteredAndSortedCrops.reduce((sum, crop) => sum + crop.totalCost, 0) / filteredAndSortedCrops.length).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Avg. Investment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(filteredAndSortedCrops.reduce((sum, crop) => sum + crop.waterRequirement, 0) / filteredAndSortedCrops.length).toLocaleString()}L
              </div>
              <div className="text-sm text-gray-600">Avg. Water</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropSelector;