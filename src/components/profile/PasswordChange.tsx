import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../db';
import { hashPassword, verifyPassword } from '../../utils/auth';
import { Button } from '../common/Button';

export function PasswordChange() {
  const { user: authUser } = useAuth();
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authUser?.id) return;

    if (passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const user = await db.users.get(authUser.id);
      if (!user) {
        setMessage({ type: 'error', text: 'User not found' });
        return;
      }

      const isValid = await verifyPassword(passwords.current, user.password);
      if (!isValid) {
        setMessage({ type: 'error', text: 'Current password is incorrect' });
        return;
      }

      const hashedPassword = await hashPassword(passwords.new);
      await db.users.update(authUser.id, { password: hashedPassword });
      
      setMessage({ type: 'success', text: 'Password updated successfully' });
      setPasswords({ current: '', new: '', confirm: '' });
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage({ type: 'error', text: 'Failed to update password. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Change Password</h2>

      {message.text && (
        <div className={`p-4 mb-6 rounded-lg ${
          message.type === 'error' 
            ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' 
            : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Current Password
          </label>
          <input
            type="password"
            value={passwords.current}
            onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            New Password
          </label>
          <input
            type="password"
            value={passwords.new}
            onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            value={passwords.confirm}
            onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}