import React from 'react';

export default function OOP() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Object-Oriented Programming</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Master the principles of OOP in Java</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Classes and Objects</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Understanding the building blocks of OOP:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <pre className="text-sm">
{`class Student {
    // Instance variables
    private String name;
    private int age;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Methods
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Inheritance</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Extending class functionality:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <pre className="text-sm">
{`class Person {
    protected String name;
    
    public void setName(String name) {
        this.name = name;
    }
}

class Student extends Person {
    private int studentId;
    
    public void setStudentId(int id) {
        this.studentId = id;
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Polymorphism</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Method overriding and overloading:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <pre className="text-sm">
{`class Shape {
    public double getArea() {
        return 0.0;
    }
}

class Circle extends Shape {
    private double radius;
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Encapsulation</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Data hiding and access control:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
                <pre className="text-sm">
{`class BankAccount {
    private double balance;
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
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