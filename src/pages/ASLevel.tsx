import React from 'react';
import { Code, Brain, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ASLevel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">AS Level Computer Science</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/blog/communication-and-network" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover block group border border-transparent dark:border-gray-700">
            <Network className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Communication and Network</h2>
            <p className="text-gray-600 dark:text-gray-300">Chapter 2: Communication and network technologies. Bit streaming, IP addresses, Client-Server model.</p>
          </Link>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover opacity-75 border border-transparent dark:border-gray-700">
            <Code className="h-8 w-8 text-gray-400 dark:text-gray-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-400">Programming</h2>
            <p className="text-gray-500 dark:text-gray-400">Coming soon: Advanced programming concepts and practice.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 card-hover opacity-75 border border-transparent dark:border-gray-700">
            <Brain className="h-8 w-8 text-gray-400 dark:text-gray-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-400">Theory</h2>
            <p className="text-gray-500 dark:text-gray-400">Coming soon: Computer science theory and concepts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
