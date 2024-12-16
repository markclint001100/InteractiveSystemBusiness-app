import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PlatformCardProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  metrics: {
    label: string;
    value: string;
  }[];
}

export function PlatformCard({ id, name, description, icon: Icon, metrics }: PlatformCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/platform/${id}`)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 cursor-pointer
        transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {metric.label}
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}