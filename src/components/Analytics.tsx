import React from 'react';
import { TrendingUp, DollarSign, Clock, Droplets, PieChart, BarChart3 } from 'lucide-react';
import { crops } from '../data/crops';

const Analytics: React.FC = () => {
  const totalCrops = crops.length;
  const avgProfit = crops.reduce((sum, crop) => sum + crop.profit, 0) / totalCrops;
  const avgGrowthPeriod = crops.reduce((sum, crop) => sum + crop.growthPeriod, 0) / totalCrops;
  const avgWaterRequirement = crops.reduce((sum, crop) => sum + crop.waterRequirement, 0) / totalCrops;

  const mostProfitable = crops.sort((a, b) => b.profit - a.profit).slice(0, 3);
  const quickestGrowing = crops.sort((a, b) => a.growthPeriod - b.growthPeriod).slice(0, 3);
  const seasonalDistribution = crops.reduce((acc, crop) => {
    acc[crop.season] = (acc[crop.season] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Total Crops</p>
              <p className="text-2xl font-bold text-gray-900">{totalCrops}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Avg. Profit/Acre</p>
              <p className="text-2xl font-bold text-green-600">₹{avgProfit.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Avg. Growth Period</p>
              <p className="text-2xl font-bold text-blue-600">{Math.round(avgGrowthPeriod)} days</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <Droplets className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Avg. Water Req.</p>
              <p className="text-2xl font-bold text-blue-600">{avgWaterRequirement.toLocaleString()}L</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Profitable Crops */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">Most Profitable Crops</h2>
          </div>
          <div className="space-y-3">
            {mostProfitable.map((crop, index) => (
              <div key={crop.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{crop.name}</p>
                    <p className="text-sm text-gray-600">{crop.localName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">₹{crop.profit.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{crop.growthPeriod} days</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quickest Growing Crops */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Quickest Growing Crops</h2>
          </div>
          <div className="space-y-3">
            {quickestGrowing.map((crop, index) => (
              <div key={crop.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{crop.name}</p>
                    <p className="text-sm text-gray-600">{crop.localName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">{crop.growthPeriod} days</p>
                  <p className="text-sm text-gray-600">₹{crop.profit.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <PieChart className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Seasonal Distribution</h2>
          </div>
          <div className="space-y-3">
            {Object.entries(seasonalDistribution).map(([season, count]) => (
              <div key={season} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-800">{season}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-yellow-600 h-3 rounded-full"
                      style={{ width: `${(count / totalCrops) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{count} crops</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment vs Profit Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">Investment vs Profit</h2>
          </div>
          <div className="space-y-3">
            {crops.sort((a, b) => b.profit - a.profit).slice(0, 5).map((crop) => (
              <div key={crop.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{crop.name}</span>
                  <span className="text-sm text-gray-600">
                    ROI: {Math.round((crop.profit / crop.totalCost) * 100)}%
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${(crop.totalCost / crop.revenue) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(crop.profit / crop.revenue) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Investment: ₹{crop.totalCost.toLocaleString()}</span>
                  <span>Profit: ₹{crop.profit.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;