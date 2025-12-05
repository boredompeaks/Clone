import React from 'react';
import { ArrowLeft, Code, Database, Lightbulb, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Grade8ICSE() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Grade 8 ICSE Computer Science
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Master the fundamentals of programming and computer science concepts
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Basics */}
          <Link to="/programming-8" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Programming Basics</h3>
                  <p className="text-gray-600 dark:text-gray-300">Learn fundamental programming concepts</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop" 
                alt="Programming" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Introduction to Programming</li>
                <li>• Algorithms and Flowcharts</li>
                <li>• Problem Solving Techniques</li>
                <li>• Programming Languages Overview</li>
              </ul>
            </div>
          </Link>

          {/* Data Types */}
          <Link to="/data-types-8" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <Database className="w-12 h-12 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Types</h3>
                  <p className="text-gray-600 dark:text-gray-300">Understanding different types of data</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop" 
                alt="Data Types" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Numeric Data Types</li>
                <li>• Character and String Types</li>
                <li>• Boolean Data Type</li>
                <li>• Type Conversion</li>
              </ul>
            </div>
          </Link>

          {/* Projects */}
          <Link to="/projects-8" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-12 h-12 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300">Hands-on programming projects</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop" 
                alt="Projects" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Simple Calculator</li>
                <li>• Number Guessing Game</li>
                <li>• Basic Quiz Application</li>
                <li>• Pattern Programs</li>
              </ul>
            </div>
          </Link>

          {/* Practice Problems */}
          <Link to="/practice-problems" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <BookOpen className="w-12 h-12 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Practice Problems</h3>
                  <p className="text-gray-600 dark:text-gray-300">Solve coding challenges</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop" 
                alt="Practice" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Beginner Level Problems</li>
                <li>• Logic Building Exercises</li>
                <li>• Step-by-step Solutions</li>
                <li>• Code Examples</li>
              </ul>
            </div>
          </Link>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Study Tips for Grade 8 ICSE</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Programming Fundamentals</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Start with understanding problem statements</li>
                <li>• Practice writing algorithms before coding</li>
                <li>• Draw flowcharts for complex problems</li>
                <li>• Test your programs with different inputs</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Exam Preparation</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Review data types and their uses</li>
                <li>• Practice variable declarations</li>
                <li>• Understand operator precedence</li>
                <li>• Work on logical reasoning problems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}