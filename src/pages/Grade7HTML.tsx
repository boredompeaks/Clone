import React from 'react';
import { Code, Layout, BookOpen } from 'lucide-react';

export default function Grade7HTML() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Grade 7 ICSE HTML</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <Layout className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">HTML Basics</h2>
            <p className="text-gray-600">Coming soon: Introduction to HTML tags and structure.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <Code className="h-8 w-8 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Web Projects</h2>
            <p className="text-gray-600">Coming soon: Step-by-step web development projects.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <p className="text-gray-600">Coming soon: Additional learning materials and exercises.</p>
          </div>
        </div>
      </div>
    </div>
  );
}