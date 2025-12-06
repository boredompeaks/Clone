import React from 'react';
import { Database, Server, Network, FileText, Code, Image, Activity } from 'lucide-react';

export default function MScIT() {
  const notes = [
    { title: 'Advance Computer Network', icon: Network, description: 'PPT Notes' },
    { title: 'Data Warehouse & Mining', icon: Database, description: 'PPT Notes' },
    { title: 'Digital Image Processing', icon: Image, description: 'PPT Notes' },
    { title: 'Simulation', icon: Activity, description: 'Notes' },
    { title: 'Java', icon: Code, description: 'PPT Notes' },
    { title: 'Advance DBMS', icon: Database, description: 'Notes' },
  ];

  const practicals = [
    { title: 'Artificial Intelligence', icon: Brain, description: 'Practical Book' },
    { title: 'Distributed Computing', icon: Server, description: 'JNI Practical' },
    { title: 'Java Practical', icon: Code, description: 'Practical Book' },
    { title: 'Multimedia', icon: Image, description: 'Practical Book' },
    { title: 'Parallel Processing', icon: Server, description: 'Practical Book' },
  ];

  // Imported Brain icon manually as it was missing in imports above
  function Brain(props: any) {
    return <Activity {...props} />; 
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">MSc IT Resources</h1>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I have completed Master in Information Technology and would like to share my notes and information which I have collected during my education.
            The syllabus is related to the portion from 2012 to 2014 (Mumbai University).
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              To get these notes, email me at: <a href="mailto:badar.1024@gmail.com" className="underline">badar.1024@gmail.com</a>
              <br/>
              Subject: Name of the notes you want.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Lecture Notes (PPTs)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {notes.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <t.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practical Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practicals.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <t.icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}