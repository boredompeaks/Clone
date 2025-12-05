import React from 'react';
import { Download, Monitor, Terminal, HardDrive } from 'lucide-react';
import ExpandableSection from '../components/ExpandableSection';

export default function Downloads() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Software Downloads</h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Development Tools */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Terminal className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Development Tools</h2>
            </div>

            <ExpandableSection title="1. BlueJ IDE">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BlueJ Development Environment</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Version: 5.1.0</li>
                  <li>System Requirements: Windows 7/8/10/11, macOS 10.14+</li>
                  <li>Java Development Kit (JDK) included</li>
                  <li>Perfect for ICSE Computer Applications</li>
                </ul>
                <div className="mt-4">
                  <a href="https://www.bluej.org" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                    <Download className="h-4 w-4 mr-2" />
                    Download BlueJ
                  </a>
                </div>
              </div>
            </ExpandableSection>

            <ExpandableSection title="2. Visual Studio Code">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">VS Code Editor</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Latest stable version</li>
                  <li>Lightweight and powerful</li>
                  <li>Supports multiple programming languages</li>
                  <li>Rich extension ecosystem</li>
                </ul>
                <div className="mt-4">
                  <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                    <Download className="h-4 w-4 mr-2" />
                    Download VS Code
                  </a>
                </div>
              </div>
            </ExpandableSection>
          </div>

          {/* Utility Software */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Monitor className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Utility Software</h2>
            </div>

            <ExpandableSection title="1. Antivirus Software">
              <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Windows Defender (Built into Windows)</li>
                  <li>Avast Free Antivirus</li>
                  <li>AVG Free Antivirus</li>
                </ul>
              </div>
            </ExpandableSection>

            <ExpandableSection title="2. Compression Tools">
              <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>7-Zip File Manager</li>
                  <li>WinRAR (Trial version)</li>
                  <li>WinZip (Trial version)</li>
                </ul>
              </div>
            </ExpandableSection>
          </div>

          {/* Installation Guides */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <HardDrive className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Installation Guides</h2>
            </div>

            <ExpandableSection title="BlueJ Installation Guide">
              <div className="space-y-4">
                <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Download the installer from the official website</li>
                  <li>Run the installer with administrator privileges</li>
                  <li>Follow the installation wizard steps</li>
                  <li>Verify the installation by creating a new project</li>
                </ol>
              </div>
            </ExpandableSection>

            <ExpandableSection title="VS Code Installation Guide">
              <div className="space-y-4">
                <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Download VS Code for your operating system</li>
                  <li>Run the installer</li>
                  <li>Select additional tasks during installation (context menu integration recommended)</li>
                  <li>Install recommended extensions for your development needs</li>
                </ol>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </div>
    </div>
  );
}