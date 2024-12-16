import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getTrendData } from '../../../utils/chartData';

export function TrendAnalysis() {
  const data = getTrendData();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Performance Trends
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis dataKey="date" className="text-gray-600 dark:text-gray-400" />
            <YAxis className="text-gray-600 dark:text-gray-400" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="googleAds" stroke="#ff7c00" name="Google Ads" />
            <Line type="monotone" dataKey="linkedInAds" stroke="#0a66c2" name="LinkedIn Ads" />
            <Line type="monotone" dataKey="bingAds" stroke="#00a4ef" name="Bing Ads" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}