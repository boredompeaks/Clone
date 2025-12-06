import React from 'react';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-10"></div>
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4 relative z-10">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight gradient-text sm:text-6xl">
                Unlock Educational Excellence with Badar Bawani
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Comprehensive learning materials for computer science and information technology students.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/msc-it"
                  className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                >
                  Explore IT Notes
                </a>
                <a
                  href="/icse-9"
                  className="rounded-md bg-white dark:bg-gray-800 px-5 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 shadow-lg ring-1 ring-inset ring-indigo-200 dark:ring-indigo-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Start Learning Java
                </a>
                <a
                  href="/cyber-awareness"
                  className="rounded-md bg-white dark:bg-gray-800 px-5 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 shadow-lg ring-1 ring-inset ring-indigo-200 dark:ring-indigo-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Access Cybersecurity Tips
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen relative z-10">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-2xl">
            <div className="overflow-hidden rounded-xl bg-gray-900">
              <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                  <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                    Example.jsx
                  </div>
                </div>
              </div>
              <div className="px-6 pb-14 pt-6">
                <pre className="text-[0.8125rem] leading-6 text-gray-300">
                  <code>
                    {`function Welcome() {
  return (
    <div className="p-4">
      <h2 className="text-xl">
        Start Learning Today!
      </h2>
    </div>
  )
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}