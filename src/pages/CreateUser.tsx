import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserForm } from '../components/users/UserForm';
import { UserList } from '../components/users/UserList';

export function CreateUser() {
  const { user } = useAuth();
  const [refreshList, setRefreshList] = useState(0);

  if (user?.role !== 'super_admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">User Management</h1>
      
      <UserForm onSuccess={() => {
        // Increment refresh counter to trigger UserList reload
        setRefreshList(prev => prev + 1);
      }} />
      
      <UserList key={refreshList} />
    </div>
  );
}