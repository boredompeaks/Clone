import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug } from '../lib/posts';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams(); // id here is actually the slug based on route /blog/:id, but we should rename param in App.tsx to :slug ideally, but keeping :id works if we treat it as slug
  const navigate = useNavigate();
  
  const post = getPostBySlug(id || '');

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
        <button 
          onClick={() => navigate('/blog')}
          className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8 sm:p-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>
          </header>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:text-indigo-600 dark:prose-headings:text-indigo-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}