import React from 'react';
import { GraduationCap, Award, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">About Me</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Badar Bawani</h2>
          <p className="text-gray-600 mb-6 text-center">
            Passionate educator specializing in computer science and IT education
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Award className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Teaching Philosophy</h3>
                <p className="text-gray-600">Coming soon: My approach to education and teaching methodology.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-gray-600">Coming soon: Details about my teaching experience and expertise.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Email: <a href="mailto:badar.bawani@gmail.com" className="text-indigo-600 hover:text-indigo-500">badar.bawani@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}