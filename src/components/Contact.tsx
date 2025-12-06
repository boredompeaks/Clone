import React from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Get in Touch</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <form className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Name
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 sm:text-sm sm:leading-6"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Email
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Message
              </label>
              <div className="relative mt-2.5">
                <div className="absolute top-3 left-0 flex items-start pl-4 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-10 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 sm:text-sm sm:leading-6"
                  placeholder="Your message..."
                />
              </div>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
