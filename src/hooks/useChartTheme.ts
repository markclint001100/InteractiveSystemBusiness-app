import { useMemo } from 'react';

export function useChartTheme() {
  const tooltipStyle = useMemo(() => ({
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  }), []);

  const chartClasses = useMemo(() => ({
    grid: 'stroke-gray-200 dark:stroke-gray-700',
    axis: 'text-gray-600 dark:text-gray-400 text-sm',
  }), []);

  return { tooltipStyle, chartClasses };
}