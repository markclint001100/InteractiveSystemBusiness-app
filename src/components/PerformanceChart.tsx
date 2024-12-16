import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { formatYAxisValue } from '../utils/formatters';
import { useChartTheme } from '../hooks/useChartTheme';

export function PerformanceChart() {
  const data = useMemo(() => generatePerformanceData(), []);
  const { tooltipStyle, chartClasses } = useChartTheme();

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Performance Over Time
        </h2>
      </div>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className={chartClasses.grid} />
            <XAxis dataKey="date" className={chartClasses.axis} />
            <YAxis 
              tickFormatter={(value: number) => formatYAxisValue(value)}
              className={chartClasses.axis}
            />
            <Tooltip 
              contentStyle={tooltipStyle}
              formatter={(value: number) => formatYAxisValue(value)}
            />
            <Legend />
            <Bar dataKey="value" fill="#ff7c00" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function generatePerformanceData() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    date: month,
    value: Math.floor(Math.random() * 100000) + 20000,
  }));
}