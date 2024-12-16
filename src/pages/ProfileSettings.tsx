import { useState } from 'react';
import { ProfileDetails } from '../components/profile/ProfileDetails';
import { PasswordChange } from '../components/profile/PasswordChange';

export function ProfileSettings() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Profile Settings</h1>
      
      <div className="space-y-6">
        <ProfileDetails />
        <PasswordChange />
      </div>
    </div>
  );
}