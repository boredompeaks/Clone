import { Terminal, Calculator, GitBranch, Repeat, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  {
    title: 'If Else Condition',
    icon: GitBranch,
    description: 'Learn decision making in Java',
    href: '/blog/if-else-condtion',
  },
  {
    title: 'If Else If Ladder',
    icon: GitBranch,
    description: 'Multiple condition checking',
    href: '/blog/if-else-if',
  },
  {
    title: 'Switch Case',
    icon: Terminal,
    description: 'Menu driven programming',
    href: '/blog/switch-case',
  },
  {
    title: 'Math Class',
    icon: Calculator,
    description: 'Mathematical functions in Java',
    href: '/blog/math-class',
  },
  {
    title: 'While Loop',
    icon: Repeat,
    description: 'Entry controlled loops',
    href: '/blog/while-loop',
  },
  {
    title: 'For Loop',
    icon: Repeat,
    description: 'Entry controlled loop with fixed iterations',
    href: '/blog/for-loop',
  },
  {
    title: 'Nested For Loop',
    icon: Layers,
    description: 'Loops inside loops',
    href: '/blog/nested-for-loop',
  },
];

export default function ICSE9() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 z-10" />
          <img
            src="/images/banners/icse-banner.png"
            alt="ICSE Computer Applications Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent z-20 flex items-end p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-0 text-shadow">Standard 9 ICSE</h1>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Practical codes and tutorials for BlueJ Java programming.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              to={topic.href}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                  <topic.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{topic.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{topic.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Visual Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <img src="/images/posts/for-loop_img_17654504837290.jpg" alt="For Loop" className="rounded-lg w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold text-lg dark:text-white">Loop Mechanics</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <img src="/images/posts/if-else-if_img_17654503432918.jpg" alt="If Else" className="rounded-lg w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold text-lg dark:text-white">Branching Logic</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <img src="/images/posts/switch-case_img_17654503306300.jpg" alt="Switch Case" className="rounded-lg w-full h-48 object-cover mb-4" />
              <h3 className="font-semibold text-lg dark:text-white">Case Selection</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
