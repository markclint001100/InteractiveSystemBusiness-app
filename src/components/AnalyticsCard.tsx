import React from 'react';
import { TrendingUp } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon?: React.ReactNode;
}

export function AnalyticsCard({ title, value, change, icon }: AnalyticsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">
            {value}
          </h3>
        </div>
        {icon}
      </div>
      <div className="flex items-center mt-4">
        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
        <span className="text-sm text-green-500">+{change}%</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
      </div>
    </div>
  );
}