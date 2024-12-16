import React from 'react';
import { PlatformCard } from './PlatformCard';
import { PLATFORM_LIST } from '../../utils/platformData';

export function PlatformGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
      {PLATFORM_LIST.map((platform) => (
        <PlatformCard key={platform.id} {...platform} />
      ))}
    </div>
  );
}