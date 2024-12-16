import React from 'react';
import { PerformanceOverview } from './charts/PerformanceOverview';
import { PlatformComparison } from './charts/PlatformComparison';
import { TrendAnalysis } from './charts/TrendAnalysis';

export function OverviewCharts() {
  return (
    <div className="mt-8 space-y-6 w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 w-full">
          <PerformanceOverview />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 w-full">
          <PlatformComparison />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 md:p-6 w-full">
        <TrendAnalysis />
      </div>
    </div>
  );
}