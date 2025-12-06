import React from 'react';
import { Code, Monitor, Book } from 'lucide-react';

export default function SYJCITPractice() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">SYJC IT Practice</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Practical Slip Solutions</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Prepare for your board practicals with these solved examples.
          </p>
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                <span className="text-gray-900 dark:text-white font-medium">Slip {num}: HTML & JavaScript Form Validation</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
