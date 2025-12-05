import React from 'react';
import { ArrowLeft, Rocket, Code, Calculator, Gamepad as GamepadIcon, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects8() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/grade-8" 
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grade 8 ICSE
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Programming Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hands-on projects to practice programming concepts
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Rocket className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project-Based Learning</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            These projects will help you apply programming concepts in real-world scenarios. Each project builds upon previous knowledge and introduces new challenges.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <Code className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Practice</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Apply concepts through coding</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Develop logical thinking</p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <GamepadIcon className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Creativity</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Build interactive programs</p>
            </div>
          </div>
        </div>

        {/* Project 1: Calculator */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project 1: Simple Calculator</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Project Description</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create a simple calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.
              </p>
              <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features to Include:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Input two numbers</li>
                  <li>• Choose operation (+, -, *, /)</li>
                  <li>• Display result</li>
                  <li>• Handle division by zero</li>
                  <li>• Option to perform multiple calculations</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Sample Code Structure</h3>
              <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`// Simple Calculator Algorithm
1. Start
2. Display menu of operations
3. Input choice (1-4)
4. Input two numbers
5. Switch based on choice:
   Case 1: result = num1 + num2
   Case 2: result = num1 - num2
   Case 3: result = num1 * num2
   Case 4: if num2 != 0
           result = num1 / num2
           else display "Error"
6. Display result
7. Ask if user wants to continue
8. If yes, go to step 2
9. Stop`}
                </pre>
              </div>
            </div>
          </div>

          <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
              View Complete Solution
            </summary>
            <div className="mt-4">
              <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`#include <iostream>
using namespace std;

int main() {
    char operation;
    double num1, num2, result;
    char continueCalc = 'y';
    
    while(continueCalc == 'y' || continueCalc == 'Y') {
        cout << "\\n=== Simple Calculator ===\\n";
        cout << "Choose operation:\\n";
        cout << "1. Addition (+)\\n";
        cout << "2. Subtraction (-)\\n";
        cout << "3. Multiplication (*)\\n";
        cout << "4. Division (/)\\n";
        cout << "Enter choice (1-4): ";
        cin >> operation;
        
        cout << "Enter first number: ";
        cin >> num1;
        cout << "Enter second number: ";
        cin >> num2;
        
        switch(operation) {
            case '1':
            case '+':
                result = num1 + num2;
                cout << num1 << " + " << num2 << " = " << result;
                break;
            case '2':
            case '-':
                result = num1 - num2;
                cout << num1 << " - " << num2 << " = " << result;
                break;
            case '3':
            case '*':
                result = num1 * num2;
                cout << num1 << " * " << num2 << " = " << result;
                break;
            case '4':
            case '/':
                if(num2 != 0) {
                    result = num1 / num2;
                    cout << num1 << " / " << num2 << " = " << result;
                } else {
                    cout << "Error: Division by zero!";
                }
                break;
            default:
                cout << "Invalid operation!";
        }
        
        cout << "\\n\\nDo you want to continue? (y/n): ";
        cin >> continueCalc;
    }
    
    cout << "Thank you for using the calculator!\\n";
    return 0;
}`}
                </pre>
              </div>
            </div>
          </details>
        </div>

        {/* Project 2: Number Guessing Game */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <GamepadIcon className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project 2: Number Guessing Game</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Project Description</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create a fun number guessing game where the computer generates a random number and the player tries to guess it.
              </p>
              <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Game Features:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Random number generation (1-100)</li>
                  <li>• User input validation</li>
                  <li>• Hints (too high/too low)</li>
                  <li>• Attempt counter</li>
                  <li>• Play again option</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Game Flow</h3>
              <div className="bg-gray-900 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`// Number Guessing Game Algorithm
1. Start
2. Generate random number (1-100)
3. Initialize attempts = 0
4. Display welcome message
5. Repeat:
   a. Ask user for guess
   b. Increment attempts
   c. If guess == number:
      Display "Correct!" and attempts
      Break
   d. Else if guess < number:
      Display "Too low!"
   e. Else:
      Display "Too high!"
6. Ask if user wants to play again
7. If yes, go to step 2
8. Stop`}
                </pre>
              </div>
            </div>
          </div>

          <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400">
              View Complete Solution
            </summary>
            <div className="mt-4">
              <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0)); // Seed random number generator
    char playAgain = 'y';
    
    cout << "=== Welcome to Number Guessing Game ===\\n";
    
    while(playAgain == 'y' || playAgain == 'Y') {
        int secretNumber = rand() % 100 + 1; // Random 1-100
        int guess, attempts = 0;
        bool hasWon = false;
        
        cout << "\\nI'm thinking of a number between 1 and 100.\\n";
        cout << "Can you guess it?\\n\\n";
        
        while(!hasWon) {
            cout << "Enter your guess: ";
            cin >> guess;
            attempts++;
            
            if(guess == secretNumber) {
                cout << "🎉 Congratulations! You guessed it!\\n";
                cout << "The number was " << secretNumber << "\\n";
                cout << "You took " << attempts << " attempts.\\n";
                hasWon = true;
            }
            else if(guess < secretNumber) {
                cout << "📈 Too low! Try a higher number.\\n";
            }
            else {
                cout << "📉 Too high! Try a lower number.\\n";
            }
            
            // Give encouragement based on attempts
            if(!hasWon) {
                if(attempts == 1) {
                    cout << "Good start! Keep trying.\\n\\n";
                }
                else if(attempts <= 5) {
                    cout << "You're doing well!\\n\\n";
                }
                else if(attempts <= 10) {
                    cout << "Don't give up!\\n\\n";
                }
                else {
                    cout << "Hint: The number is " 
                         << (secretNumber > 50 ? "greater" : "less") 
                         << " than 50.\\n\\n";
                }
            }
        }
        
        cout << "\\nDo you want to play again? (y/n): ";
        cin >> playAgain;
    }
    
    cout << "Thanks for playing! Goodbye!\\n";
    return 0;
}`}
                </pre>
              </div>
            </div>
          </details>
        </div>

        {/* Project 3: Grade Calculator */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Brain className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project 3: Student Grade Calculator</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Project Description</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create a program that calculates student grades based on multiple test scores and assignments.
              </p>
              <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Input multiple test scores</li>
                  <li>• Calculate average</li>
                  <li>• Determine letter grade</li>
                  <li>• Display grade statistics</li>
                  <li>• Handle multiple students</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Grading Scale</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 text-gray-900 dark:text-white">Grade</th>
                      <th className="text-left py-2 text-gray-900 dark:text-white">Range</th>
                      <th className="text-left py-2 text-gray-900 dark:text-white">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr><td className="py-1">A</td><td>90-100</td><td>Excellent</td></tr>
                    <tr><td className="py-1">B</td><td>80-89</td><td>Good</td></tr>
                    <tr><td className="py-1">C</td><td>70-79</td><td>Average</td></tr>
                    <tr><td className="py-1">D</td><td>60-69</td><td>Below Average</td></tr>
                    <tr><td className="py-1">F</td><td>0-59</td><td>Fail</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <details className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-green-600 dark:hover:text-green-400">
              View Complete Solution
            </summary>
            <div className="mt-4">
              <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

char getLetterGrade(double average) {
    if(average >= 90) return 'A';
    else if(average >= 80) return 'B';
    else if(average >= 70) return 'C';
    else if(average >= 60) return 'D';
    else return 'F';
}

string getGradeStatus(char grade) {
    switch(grade) {
        case 'A': return "Excellent";
        case 'B': return "Good";
        case 'C': return "Average";
        case 'D': return "Below Average";
        case 'F': return "Fail";
        default: return "Unknown";
    }
}

int main() {
    string studentName;
    int numTests;
    double total = 0, score, average;
    char continueProgram = 'y';
    
    cout << "=== Student Grade Calculator ===\\n\\n";
    
    while(continueProgram == 'y' || continueProgram == 'Y') {
        cout << "Enter student name: ";
        getline(cin, studentName);
        
        cout << "Enter number of tests: ";
        cin >> numTests;
        
        if(numTests <= 0) {
            cout << "Invalid number of tests!\\n\\n";
            continue;
        }
        
        total = 0;
        cout << "\\nEnter test scores:\\n";
        
        for(int i = 1; i <= numTests; i++) {
            do {
                cout << "Test " << i << " score (0-100): ";
                cin >> score;
                
                if(score < 0 || score > 100) {
                    cout << "Invalid score! Please enter 0-100.\\n";
                }
            } while(score < 0 || score > 100);
            
            total += score;
        }
        
        average = total / numTests;
        char letterGrade = getLetterGrade(average);
        string status = getGradeStatus(letterGrade);
        
        // Display results
        cout << "\\n" << string(40, '=') << "\\n";
        cout << "GRADE REPORT FOR: " << studentName << "\\n";
        cout << string(40, '=') << "\\n";
        cout << fixed << setprecision(2);
        cout << "Number of tests: " << numTests << "\\n";
        cout << "Total points: " << total << "\\n";
        cout << "Average score: " << average << "%\\n";
        cout << "Letter grade: " << letterGrade << "\\n";
        cout << "Status: " << status << "\\n";
        
        if(letterGrade == 'F') {
            cout << "\\n⚠️  Student needs improvement!\\n";
        } else if(letterGrade == 'A') {
            cout << "\\n🎉 Excellent performance!\\n";
        }
        
        cout << string(40, '=') << "\\n\\n";
        
        cout << "Calculate another student's grade? (y/n): ";
        cin >> continueProgram;
        cin.ignore(); // Clear input buffer
        cout << "\\n";
    }
    
    cout << "Thank you for using Grade Calculator!\\n";
    return 0;
}`}
                </pre>
              </div>
            </div>
          </details>
        </div>

        {/* Additional Project Ideas */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Project Ideas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Beginner Projects</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>• Temperature Converter</li>
                  <li>• Simple Interest Calculator</li>
                  <li>• Age Calculator</li>
                  <li>• Unit Converter (length, weight)</li>
                  <li>• Password Generator</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Intermediate Projects</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>• Rock Paper Scissors Game</li>
                  <li>• Simple Banking System</li>
                  <li>• Text-based Adventure Game</li>
                  <li>• Student Management System</li>
                  <li>• Basic Inventory System</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Tips for Success</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>• Start with simple projects</li>
                  <li>• Plan before coding</li>
                  <li>• Test frequently</li>
                  <li>• Add features gradually</li>
                  <li>• Don't be afraid to experiment</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔧 Enhancement Ideas</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  <li>• Add input validation</li>
                  <li>• Improve user interface</li>
                  <li>• Add error handling</li>
                  <li>• Include help/instructions</li>
                  <li>• Save data to files</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}