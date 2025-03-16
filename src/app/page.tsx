'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UserCard from '@/components/UserCard';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(1);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
      // Prepare for next fetch
      setUserId((prevId) => (prevId % 10) + 1); // Cycle through users 1-10
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial user data when component mounts
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-primary mb-2">User Data App</h1>
        <p className="text-xl text-gray-300">Fetching data from JSONPlaceholder API</p>
      </motion.div>

      <UserCard user={user} loading={loading} />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={fetchUser}
        disabled={loading}
        className="mt-8 px-6 py-3 bg-primary text-gray-900 font-medium rounded-lg shadow-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Fetch New User'}
      </motion.button>
    </main>
  );
}