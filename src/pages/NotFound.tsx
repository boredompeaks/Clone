import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50 dark:bg-gray-900">
      <div className="mb-8">
        <AlertCircle className="h-24 w-24 text-indigo-600 dark:text-indigo-400 mx-auto" />
      </div>
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
      >
        <Home className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}
