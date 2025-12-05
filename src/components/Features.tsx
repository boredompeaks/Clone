import React from 'react';
import { BookOpen, Download, Shield, GraduationCap, Code, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'SYJC IT Practice',
    description: 'Comprehensive practice materials for Second Year Junior College IT students.',
    icon: BookOpen,
    href: '/syjc-it',
  },
  {
    name: 'Software Downloads',
    description: 'Essential software tools for FYJC/SYJC students with installation guides.',
    icon: Download,
    href: '/downloads',
  },
  {
    name: 'Cyber Awareness',
    description: 'Learn about cybersecurity best practices and safe internet usage.',
    icon: Shield,
    href: '/cyber-awareness',
  },
  {
    name: 'M.Sc IT Notes',
    description: 'Advanced notes covering postgraduate IT curriculum.',
    icon: GraduationCap,
    href: '/msc-it',
  },
  {
    name: 'ICSE Computer Applications',
    description: 'BlueJ and Java programming resources for ICSE students.',
    icon: Code,
    href: '/icse-9',
  },
  {
    name: 'Web Development',
    description: 'HTML tutorials and exercises for Grade 7 ICSE students.',
    icon: Layout,
    href: '/icse-7',
  },
];

export default function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Comprehensive Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to excel in your studies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Access carefully curated educational materials designed to help you master computer science and IT concepts.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link to={feature.href} className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}