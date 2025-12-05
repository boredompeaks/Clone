import React from 'react';
import { Code, Brain, BookOpen } from 'lucide-react';

export default function ASLevel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">AS Level Computer Science</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <Code className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Programming</h2>
            <p className="text-gray-600">Coming soon: Advanced programming concepts and practice.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <Brain className="h-8 w-8 text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Theory</h2>
            <p className="text-gray-600">Coming soon: Computer science theory and concepts.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
            <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Exam Prep</h2>
            <p className="text-gray-600">Coming soon: Past papers and revision materials.</p>
          </div>
        </div>
      </div>
    </div>
  );
}