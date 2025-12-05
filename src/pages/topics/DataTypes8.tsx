import React from 'react';
import { ArrowLeft, Database, Hash, Type, ToggleLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataTypes8() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/grade-8" 
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grade 8 ICSE
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Types in Programming
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Understanding different types of data and how computers store them
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What are Data Types?</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Data types specify the kind of data that can be stored and manipulated within a program. They tell the computer how to interpret and work with different values.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Why Data Types Matter</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Memory allocation efficiency</li>
                <li>• Prevents data corruption</li>
                <li>• Enables proper operations</li>
                <li>• Error detection and prevention</li>
              </ul>
            </div>
            <div className="bg-pink-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Categories</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• <strong>Primitive:</strong> Basic types</li>
                <li>• <strong>Composite:</strong> Complex types</li>
                <li>• <strong>User-defined:</strong> Custom types</li>
                <li>• <strong>Abstract:</strong> Conceptual types</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Numeric Data Types */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Hash className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Numeric Data Types</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Integer (int)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Whole numbers without decimal points
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Examples:</p>
                <code className="text-blue-600 dark:text-blue-400">
                  42, -17, 0, 1000, -999
                </code>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Range: -2,147,483,648 to 2,147,483,647
              </div>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Float/Double</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Numbers with decimal points
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Examples:</p>
                <code className="text-green-600 dark:text-green-400">
                  3.14, -2.5, 0.001, 99.99
                </code>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Float: 7 digits precision, Double: 15 digits
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Numeric Operations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Arithmetic Operators</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li><code>+</code> Addition</li>
                  <li><code>-</code> Subtraction</li>
                  <li><code>*</code> Multiplication</li>
                  <li><code>/</code> Division</li>
                  <li><code>%</code> Modulus (remainder)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Comparison Operators</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li><code>==</code> Equal to</li>
                  <li><code>!=</code> Not equal to</li>
                  <li><code>&gt;</code> Greater than</li>
                  <li><code>&lt;</code> Less than</li>
                  <li><code>&gt;=</code> Greater than or equal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Character and String Data Types */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Type className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Character and String Types</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Character (char)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Single character enclosed in single quotes
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Examples:</p>
                <code className="text-green-600 dark:text-green-400">
                  'A', 'z', '5', '@', ' '
                </code>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Stores: Letters, digits, symbols, spaces
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">String</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Sequence of characters enclosed in double quotes
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Examples:</p>
                <code className="text-yellow-600 dark:text-yellow-400">
                  "Hello", "123", "Grade 8", ""
                </code>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Can contain: Text, numbers, symbols, spaces
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">String Operations</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Concatenation</h4>
                <code className="text-sm text-gray-600 dark:text-gray-300">
                  "Hello" + " World" = "Hello World"
                </code>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Length</h4>
                <code className="text-sm text-gray-600 dark:text-gray-300">
                  length("Hello") = 5
                </code>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Substring</h4>
                <code className="text-sm text-gray-600 dark:text-gray-300">
                  substring("Hello", 1, 3) = "ell"
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Boolean Data Type */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <ToggleLeft className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Boolean Data Type</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Boolean (bool)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Represents logical values - either true or false
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Values:</p>
                <code className="text-red-600 dark:text-red-400">
                  true, false
                </code>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Used in: Conditions, flags, switches
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Logical Operators</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li><code>AND (&&)</code> - Both must be true</li>
                <li><code>OR (||)</code> - At least one must be true</li>
                <li><code>NOT (!)</code> - Reverses the value</li>
              </ul>
              <div className="mt-3 bg-white dark:bg-gray-800 p-3 rounded border">
                <code className="text-sm text-orange-600 dark:text-orange-400">
                  true && false = false<br/>
                  true || false = true<br/>
                  !true = false
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practice Problems</h2>

          <div className="space-y-6">
            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400">
                Problem 1: Data Type Identification
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Identify the data type for each of the following values:
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Values:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                        <li>1. 42</li>
                        <li>2. "Hello World"</li>
                        <li>3. 3.14159</li>
                        <li>4. 'A'</li>
                        <li>5. true</li>
                        <li>6. -17</li>
                        <li>7. "123"</li>
                        <li>8. false</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Answers:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                        <li>1. Integer</li>
                        <li>2. String</li>
                        <li>3. Float/Double</li>
                        <li>4. Character</li>
                        <li>5. Boolean</li>
                        <li>6. Integer</li>
                        <li>7. String</li>
                        <li>8. Boolean</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400">
                Problem 2: Variable Declaration
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Declare variables with appropriate data types for storing:
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">1. A student's age</p>
                      <code className="text-blue-600 dark:text-blue-400">int age = 14;</code>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">2. A student's name</p>
                      <code className="text-blue-600 dark:text-blue-400">string name = "John Doe";</code>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">3. A test score percentage</p>
                      <code className="text-blue-600 dark:text-blue-400">float score = 85.5;</code>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">4. Whether a student passed</p>
                      <code className="text-blue-600 dark:text-blue-400">bool passed = true;</code>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">5. A grade letter</p>
                      <code className="text-blue-600 dark:text-blue-400">char grade = 'A';</code>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400">
                Problem 3: Type Conversion
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Convert between different data types:
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">1. Convert string "25" to integer</p>
                      <code className="text-green-600 dark:text-green-400">int num = parseInt("25"); // Result: 25</code>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">2. Convert integer 42 to string</p>
                      <code className="text-green-600 dark:text-green-400">string text = toString(42); // Result: "42"</code>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">3. Convert float 3.7 to integer</p>
                      <code className="text-green-600 dark:text-green-400">int whole = (int)3.7; // Result: 3</code>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400">
                Problem 4: Boolean Logic
              </summary>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Evaluate the following boolean expressions:
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-red-500">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expressions:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                        <li>{"1. true && false"}</li>
                        <li>{"2. true || false"}</li>
                        <li>{"3. !true"}</li>
                        <li>{"4. (5 > 3) && (2 < 4)"}</li>
                        <li>{"5. (10 == 10) || (5 > 8)"}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                        <li>1. false</li>
                        <li>2. true</li>
                        <li>3. false</li>
                        <li>4. true</li>
                        <li>5. true</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}