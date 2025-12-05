import React from 'react';
import { ArrowLeft, Code, Play, BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programming8() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/grade-8" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grade 8 ICSE
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Programming Fundamentals
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Master the basics of programming logic and problem-solving
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What is Programming?</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Programming is the process of creating instructions for computers to follow. It involves breaking down complex problems into smaller, manageable steps that a computer can execute.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Concepts</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Algorithms and Logic</li>
                <li>• Problem Decomposition</li>
                <li>• Sequential Thinking</li>
                <li>• Pattern Recognition</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Skills Developed</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Logical Reasoning</li>
                <li>• Critical Thinking</li>
                <li>• Problem Solving</li>
                <li>• Attention to Detail</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Algorithms */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Understanding Algorithms</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            An algorithm is a step-by-step procedure for solving a problem or completing a task.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Example: Making Tea Algorithm</h3>
            <ol className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>1. Boil water in a kettle</li>
              <li>2. Put tea bag in cup</li>
              <li>3. Pour hot water into cup</li>
              <li>4. Let it steep for 3-5 minutes</li>
              <li>5. Remove tea bag</li>
              <li>6. Add sugar/milk if desired</li>
              <li>7. Stir and serve</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Algorithm Properties</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>Clear:</strong> Each step must be unambiguous</li>
                <li><strong>Finite:</strong> Must have a definite end</li>
                <li><strong>Effective:</strong> Steps must be doable</li>
                <li><strong>Input/Output:</strong> Takes input, produces output</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Types of Algorithms</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>Sequential:</strong> Steps in order</li>
                <li><strong>Conditional:</strong> If-then decisions</li>
                <li><strong>Iterative:</strong> Repeating steps</li>
                <li><strong>Recursive:</strong> Self-calling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Flowcharts */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flowcharts</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Flowcharts are visual representations of algorithms using standard symbols.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Flowchart Symbols</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-12 h-8 bg-green-200 dark:bg-green-700 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-xs font-bold">○</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Start/End (Terminal)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-8 bg-blue-200 dark:bg-blue-700 mr-3 flex items-center justify-center">
                    <span className="text-xs font-bold">□</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Process</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-8 bg-yellow-200 dark:bg-yellow-700 mr-3 flex items-center justify-center transform rotate-45">
                    <span className="text-xs font-bold transform -rotate-45">◊</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Decision</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-8 bg-purple-200 dark:bg-purple-700 mr-3 flex items-center justify-center transform skew-x-12">
                    <span className="text-xs font-bold transform -skew-x-12">⬟</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Input/Output</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Flowchart Rules</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Start with a terminal symbol</li>
                <li>• Use arrows to show flow direction</li>
                <li>• Each symbol should have one entry point</li>
                <li>• Decision symbols have two exit points</li>
                <li>• End with a terminal symbol</li>
                <li>• Keep it simple and readable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Play className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Practice Problems</h2>
          </div>

          <div className="space-y-6">
            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                Problem 1: Find the Largest of Three Numbers
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Write an algorithm to find the largest among three given numbers.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Algorithm:</h4>
                  <ol className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>1. Start</li>
                    <li>2. Input three numbers: A, B, C</li>
                    <li>3. If A &gt; B and A &gt; C, then A is largest</li>
                    <li>4. Else if B &gt; A and B &gt; C, then B is largest</li>
                    <li>5. Else C is largest</li>
                    <li>6. Display the largest number</li>
                    <li>7. Stop</li>
                  </ol>
                </div>
              </div>
            </details>

            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                Problem 2: Calculate Simple Interest
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Write an algorithm to calculate simple interest given principal, rate, and time.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Algorithm:</h4>
                  <ol className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>1. Start</li>
                    <li>2. Input Principal (P), Rate (R), Time (T)</li>
                    <li>3. Calculate SI = (P × R × T) / 100</li>
                    <li>4. Calculate Amount = P + SI</li>
                    <li>5. Display Simple Interest and Amount</li>
                    <li>6. Stop</li>
                  </ol>
                </div>
              </div>
            </details>

            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                Problem 3: Check Even or Odd Number
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Write an algorithm to check if a given number is even or odd.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Algorithm:</h4>
                  <ol className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>1. Start</li>
                    <li>2. Input a number N</li>
                    <li>3. Calculate remainder = N % 2</li>
                    <li>4. If remainder = 0, then N is even</li>
                    <li>5. Else N is odd</li>
                    <li>6. Display the result</li>
                    <li>7. Stop</li>
                  </ol>
                </div>
              </div>
            </details>

            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                Problem 4: Sum of First N Natural Numbers
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Write an algorithm to find the sum of first N natural numbers.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Algorithm:</h4>
                  <ol className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>1. Start</li>
                    <li>2. Input N</li>
                    <li>3. Initialize sum = 0, i = 1</li>
                    <li>4. While i ≤ N do:</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;a. sum = sum + i</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;b. i = i + 1</li>
                    <li>5. Display sum</li>
                    <li>6. Stop</li>
                  </ol>
                </div>
              </div>
            </details>

            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                Problem 5: Factorial of a Number
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Write an algorithm to find the factorial of a given number.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Algorithm:</h4>
                  <ol className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>1. Start</li>
                    <li>2. Input N</li>
                    <li>3. Initialize factorial = 1, i = 1</li>
                    <li>4. While i ≤ N do:</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;a. factorial = factorial × i</li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;b. i = i + 1</li>
                    <li>5. Display factorial</li>
                    <li>6. Stop</li>
                  </ol>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}