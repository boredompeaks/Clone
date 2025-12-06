import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Computer Science Student',
    content: 'The Java tutorials made complex concepts so easy to understand. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Grade 10 Student',
    content: 'The practice problems helped me ace my ICSE exams. Thank you!',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'IT Professional',
    content: 'Great resource for brushing up on fundamentals. The examples are practical and clear.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Students and Educators
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl bg-white dark:bg-gray-900 p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote className="text-gray-900 dark:text-gray-300">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-x-1 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
