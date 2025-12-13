import { BlogPost } from '../types';

const postFiles = import.meta.glob('../posts/*.ts', { eager: true });

export const getAllPosts = (): BlogPost[] => {
  const posts = Object.values(postFiles).map((mod: any) => mod.post);
  // Sort by date, assuming standard Date format parsing works, otherwise basic string sort or custom parser needed
  // The current dates are "at December 18, 2023", which need parsing.
  // Simple parsing: remove "at " and parse
  return posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPosts().find(post => post.slug === slug);
};
