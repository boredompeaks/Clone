import React from 'react';
import { Database, Server, Network, FileText } from 'lucide-react';

export default function MScIT() {
  const topics = [
    { title: 'Advanced Database', icon: Database, description: 'NoSQL, Distributed DBs' },
    { title: 'Cloud Computing', icon: Server, description: 'AWS, Azure, Virtualization' },
    { title: 'Network Security', icon: Network, description: 'Cryptography, Protocols' },
    { title: 'Research Methodology', icon: FileText, description: 'Thesis writing, Analysis' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">MSc IT Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((t) => (
            <div key={t.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <t.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
