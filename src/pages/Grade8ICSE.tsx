import React from 'react';
import { Cpu, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: 'Programming Basics',
    icon: Cpu,
    description: 'Introduction to logic and algorithms',
    href: '/grade-8/programming',
  },
  {
    title: 'Data Types',
    icon: Database,
    description: 'Variables and constants',
    href: '/grade-8/data-types',
  },
  {
    title: 'Projects',
    icon: Layers,
    description: 'Simple Java programs',
    href: '/grade-8/projects',
  },
];

export default function Grade8ICSE() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Grade 8 ICSE</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((t) => (
            <Link key={t.title} to={t.href} className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <t.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
