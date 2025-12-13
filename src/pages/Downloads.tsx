import React from 'react';
import { Download } from 'lucide-react';

export default function Downloads() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img
            src="/images/banners/downloads-banner.png"
            alt="Software Downloads Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-20 flex items-end p-8">
            <h1 className="text-4xl font-bold text-white mb-0 text-shadow">Software Downloads</h1>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">LibreOffice</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Free and open source office suite</p>
              </div>
              <a
                href="https://www.libreoffice.org/download/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tally ERP 9</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Business management software</p>
              </div>
              <a
                href="https://tallysolutions.com/download/support-files/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
