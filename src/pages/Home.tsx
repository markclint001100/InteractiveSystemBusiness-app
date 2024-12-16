import React from 'react';
import { WelcomeHeader } from '../components/home/WelcomeHeader';
import { PlatformGrid } from '../components/home/PlatformGrid';
import { OverviewCharts } from '../components/home/OverviewCharts';

export function Home() {
  return (
    <div className="p-4 md:p-6 lg:p-8 w-full">
      <WelcomeHeader />
      <PlatformGrid />
      <OverviewCharts />
    </div>
  );
}