import { BarChart3, MousePointer, Users, DollarSign } from 'lucide-react';

export function GoogleAds() {
  const metrics = [
    {
      title: "Impressions",
      value: "2.4M",
      change: 21,
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      lastMonth: "vs last month"
    },
    {
      title: "Clicks",
      value: "85.2K",
      change: 23,
      icon: <MousePointer className="w-6 h-6 text-primary" />,
      lastMonth: "vs last month"
    },
    {
      title: "Conversions",
      value: "12.5K",
      change: 21,
      icon: <Users className="w-6 h-6 text-primary" />,
      lastMonth: "vs last month"
    },
    {
      title: "Spend",
      value: "$45,678",
      change: 23,
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      lastMonth: "vs last month"
    }
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 w-full">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        Google Ads Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{metric.title}</p>
                <h3 className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">
                  {metric.value}
                </h3>
              </div>
              {metric.icon}
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm text-green-500">+{metric.change}%</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{metric.lastMonth}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Performance Over Time
        </h2>
        <div className="h-[400px]">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Chart will be rendered here
          </div>
        </div>
      </div>
    </div>
  );
}