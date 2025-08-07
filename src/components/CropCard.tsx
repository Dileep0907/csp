import React from 'react';
import { Clock, DollarSign, Droplets, Sprout, TrendingUp } from 'lucide-react';
import { Crop } from '../types/crop';

interface CropCardProps {
  crop: Crop;
  compact?: boolean;
  expanded?: boolean;
}

const CropCard: React.FC<CropCardProps> = ({ crop, compact = false, expanded = false }) => {
  const formatCurrency = (amount: number) => `₹${amount.toLocaleString()}`;
  const formatNumber = (num: number) => num.toLocaleString();

  if (compact) {
    return (
      <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-green-100 flex-shrink-0">
            {crop.image ? (
              <img 
                src={crop.image} 
                alt={crop.name} 
                className="w-full h-full object-cover" 
                loading="eager"
                onError={(e) => {
                  console.log('Image failed to load:', crop.image);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : null}
            <div className="w-full h-full flex items-center justify-center">
              <Sprout className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{crop.name}</h3>
            <p className="text-sm text-gray-600">{crop.localName}</p>
          </div>
          <div className="ml-auto">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              {crop.season}
            </span>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
              <Clock className="w-3 h-3 text-blue-600" />
              <span className="font-medium text-blue-700">{crop.growthPeriod} days</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="font-medium text-green-700">{formatCurrency(crop.profit)}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
              <DollarSign className="w-3 h-3 text-yellow-600" />
              <span className="font-medium text-yellow-700">{formatCurrency(crop.totalCost)}</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
              <Droplets className="w-3 h-3 text-blue-600" />
              <span className="font-medium text-blue-700">{formatNumber(crop.waterRequirement)}L</span>
            </div>
          </div>
          <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
            <div className="flex justify-between mb-1">
              <span>ROI:</span>
              <span className="font-medium">{Math.round((crop.profit/crop.totalCost)*100)}%</span>
            </div>
            <div className="flex justify-between">
              <span>Yield:</span>
              <span className="font-medium">{formatNumber(crop.expectedYield)} kg/acre</span>
            </div>
          </div>
        </div>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">{crop.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-sm">Growing Tips:</h4>
              <ul className="space-y-1">
                {crop.tips.slice(0, 2).map((tip, index) => (
                  <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm flex-shrink-0">
            {crop.image ? (
              <img 
                src={crop.image} 
                alt={crop.name} 
                className="w-full h-full object-cover" 
                loading="eager"
                onError={(e) => {
                  console.log('Image failed to load:', crop.image);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : null}
            <div className="w-full h-full flex items-center justify-center">
              <Sprout className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{crop.name}</h2>
            <p className="text-green-100">{crop.localName}</p>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm mt-2 font-medium">
              {crop.season}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">{crop.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-800">Growth Period</p>
              <p className="text-blue-600">{crop.growthPeriod} days</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <DollarSign className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-semibold text-gray-800">Total Investment</p>
              <p className="text-green-600">{formatCurrency(crop.totalCost)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Droplets className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-800">Water (L/day/acre)</p>
              <p className="text-blue-600">{formatNumber(crop.waterRequirement)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <Sprout className="w-6 h-6 text-yellow-600" />
            <div>
              <p className="font-semibold text-gray-800">Seed Cost</p>
              <p className="text-yellow-600">{formatCurrency(crop.seedCost)}/kg</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Revenue Breakdown (per acre)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Expected Yield</p>
              <p className="font-semibold text-green-600">{formatNumber(crop.expectedYield)} kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Market Price</p>
              <p className="font-semibold text-blue-600">{formatCurrency(crop.marketPrice)}/kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="font-semibold text-green-600">{formatCurrency(crop.revenue)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Net Profit</p>
              <p className="font-semibold text-green-700 text-lg">{formatCurrency(crop.profit)}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Growing Tips</h3>
          <ul className="space-y-1">
            {crop.tips.map((tip, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CropCard;