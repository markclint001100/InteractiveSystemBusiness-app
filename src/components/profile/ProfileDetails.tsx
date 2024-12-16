import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../db';
import { Button } from '../common/Button';

export function ProfileDetails() {
  const { user: authUser } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (authUser?.id) {
      loadUserData(authUser.id);
    }
  }, [authUser]);

  const loadUserData = async (userId: number) => {
    try {
      const userData = await db.users.get(userId);
      if (userData) {
        setFormData({
          name: userData.name,
          email: userData.email,
          title: userData.title || '',
          company: userData.company || '',
        });
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authUser?.id) return;

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      await db.users.update(authUser.id, formData);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Profile Details</h2>

      {message.text && (
        <div className={`p-4 mb-6 rounded-lg ${
          message.type === 'error' 
            ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' 
            : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
        }`}>
          {message.text}
        </div>
      )}

      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-10 h-10 text-primary" />
        </div>
        <div>
          <button 
            className="text-sm text-primary hover:text-primary/80 font-medium"
            onClick={() => document.getElementById('avatar-input')?.click()}
          >
            Change Avatar
          </button>
          <input 
            id="avatar-input"
            type="file"
            accept="image/*"
            className="hidden"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            JPG, GIF or PNG. Max size 2MB
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Job Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}