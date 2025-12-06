import React from 'react';
import { getAllPosts } from '../lib/posts';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Badar Bawani Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Latest updates and tutorials</p>
        </div>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              to={`/blog/${post.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.content.replace(/<[^>]+>/g, '').substring(0, 200)}...
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Read Article
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}