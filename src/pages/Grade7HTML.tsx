import React from 'react';
import { Code, Layout, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: 'HTML Basics',
    icon: Code,
    description: 'Introduction to Web Pages',
    href: '/grade-7-html/basics',
  },
  {
    title: 'HTML Tags',
    icon: Layout,
    description: 'Common Tags and Attributes',
    href: '/grade-7-html/tags',
  },
  {
    title: 'Projects',
    icon: Globe,
    description: 'Build your first website',
    href: '/grade-7-html/projects',
  },
];

export default function Grade7HTML() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Grade 7 HTML</h1>
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
