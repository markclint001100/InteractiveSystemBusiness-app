import { useState } from 'react';
import { UserList } from '../components/admin/UserList';
import { AddUserForm } from '../components/admin/AddUserForm';
import { AdminMenu } from '../components/admin/AdminMenu';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('users');
  const { user } = useAuth();

  if (user?.role !== 'super_admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          System Administration
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage users and system settings
        </p>
      </div>

      <AdminMenu 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {activeSection === 'users' && <UserList />}
      {activeSection === 'add-user' && <AddUserForm onClose={() => setActiveSection('users')} />}
      {activeSection === 'settings' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            System Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            System settings configuration will be available here.
          </p>
        </div>
      )}
    </div>
  );
}