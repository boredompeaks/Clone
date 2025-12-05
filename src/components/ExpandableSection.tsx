import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ExpandableSection({ title, children }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border dark:border-gray-700 rounded-lg mb-4">
      <button
        className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-900 dark:text-white">{title}</span>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <div className="px-4 py-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700 transition-colors duration-200">
          {children}
        </div>
      )}
    </div>
  );
}