import { motion } from 'framer-motion';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

interface UserCardProps {
  user: User | null;
  loading: boolean;
}

const UserCard = ({ user, loading }: UserCardProps) => {
  if (loading) {
    return (
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg">
        <p className="text-gray-400">No user data available. Click the button to fetch user data.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-6 rounded-lg bg-gray-800 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-primary mb-4">{user.name}</h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <p className="text-gray-300">{user.email}</p>
        </div>
        <div className="flex items-start">
          <svg className="w-5 h-5 text-secondary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <div>
            <p className="text-gray-300">{user.address.street}, {user.address.suite}</p>
            <p className="text-gray-300">{user.address.city}, {user.address.zipcode}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserCard;