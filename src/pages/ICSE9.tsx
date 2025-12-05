import React from 'react';
import { Code, BookOpen, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: 'Java Basics',
    icon: Code,
    description: 'Learn fundamental Java concepts and syntax',
    href: '/icse-9/java-basics',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  },
  {
    title: 'Object-Oriented Programming',
    icon: Terminal,
    description: 'Master classes, objects, inheritance, and polymorphism',
    href: '/icse-9/oop',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  },
  {
    title: 'Practice Problems',
    icon: BookOpen,
    description: 'Hands-on coding exercises and solutions',
    href: '/icse-9/practice',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  },
];

export default function ICSE9() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Standard 9 ICSE Computer Applications</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link 
              key={topic.title}
              to={topic.href}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
              </div>
              <div className="relative p-8 h-full min-h-[320px] flex flex-col justify-end">
                <topic.icon className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                <p className="text-gray-200">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}