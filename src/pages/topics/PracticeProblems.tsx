import React from 'react';
import { Terminal } from 'lucide-react';

export default function PracticeProblems() {
  const problems = [
    { title: 'Factorial Calculation', difficulty: 'Easy', desc: 'Write a program to find the factorial of a number.' },
    { title: 'Palindrome Check', difficulty: 'Medium', desc: 'Check if a string or number is a palindrome.' },
    { title: 'Prime Number Generator', difficulty: 'Medium', desc: 'Generate prime numbers up to N.' },
    { title: 'Matrix Multiplication', difficulty: 'Hard', desc: 'Multiply two 2D arrays.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Practice Problems</h1>
        <div className="space-y-4">
          {problems.map((p) => (
            <div key={p.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Terminal className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{p.desc}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                p.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                p.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {p.difficulty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
