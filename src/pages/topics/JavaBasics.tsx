import React from 'react';
import { Code } from 'lucide-react';

export default function JavaBasics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Java Basics</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Master the fundamentals of Java programming</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Variables and Data Types</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Java supports various primitive data types:</p>
              <ul>
                <li>int: Whole numbers</li>
                <li>double: Decimal numbers</li>
                <li>char: Single characters</li>
                <li>boolean: True/false values</li>
              </ul>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <pre className="text-sm">
{`// Example of variable declarations
int age = 15;
double height = 5.8;
char grade = 'A';
boolean isStudent = true;`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Control Structures</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Learn about decision-making and loops:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <pre className="text-sm">
{`// If-else statement
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

// For loop
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Practice Example</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Here's a complete program that demonstrates these concepts:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <pre className="text-sm">
{`public class StudentGrade {
    public static void main(String[] args) {
        // Variables
        String name = "John";
        int marks = 85;
        char grade;
        
        // Decision making
        if (marks >= 90) {
            grade = 'A';
        } else if (marks >= 80) {
            grade = 'B';
        } else if (marks >= 70) {
            grade = 'C';
        } else {
            grade = 'D';
        }
        
        // Output
        System.out.println("Student: " + name);
        System.out.println("Marks: " + marks);
        System.out.println("Grade: " + grade);
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}