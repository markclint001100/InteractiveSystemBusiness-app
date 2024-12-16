import React from 'react';

export function WelcomeHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Welcome to Interactive Business System Dashboard
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Select a platform to view detailed analytics and performance metrics
      </p>
    </div>
  );
}