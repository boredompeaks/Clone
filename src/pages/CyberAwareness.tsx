import React from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function CyberAwareness() {
  const sections = [
    {
      title: 'Password Security',
      icon: Lock,
      content: [
        'Use at least 12 characters mixing uppercase, lowercase, numbers, and symbols.',
        'Enable Two-Factor Authentication (2FA) on all important accounts.',
        'Never reuse passwords across different sites.',
        'Use a reputable Password Manager to store your credentials securely.'
      ]
    },
    {
      title: 'Phishing Prevention',
      icon: AlertTriangle,
      content: [
        'Verify the sender\'s email address before clicking links.',
        'Check URL spellings very carefully (e.g., google.com vs gooogle.com).',
        'Be wary of urgent requests for money or sensitive information.',
        'Don\'t open attachments from unknown or unexpected senders.'
      ]
    },
    {
      title: 'Safe Browsing',
      icon: Eye,
      content: [
        'Ensure websites use HTTPS (look for the padlock icon).',
        'Avoid public Wi-Fi for banking or sensitive transactions.',
        'Use a VPN when connected to public networks.',
        'Keep your browser and plugins updated to the latest versions.'
      ]
    },
    {
      title: 'Device Protection',
      icon: Shield,
      content: [
        'Keep your operating system and antivirus software updated.',
        'Lock your device when leaving it unattended.',
        'Regularly back up important data to an external drive or cloud.',
        'Be careful with USB drives; they can carry malware.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Cyber Awareness</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protecting your digital footprint is essential in the modern world. Follow these guidelines to stay safe online and secure your personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <section.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
              </div>
              <ul className="space-y-4">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Stay Vigilant</h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
            Cybersecurity is an ongoing process. Stay informed about the latest threats and always double-check before you click.
          </p>
          <a
            href="https://www.cisa.gov/shields-up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
          >
            Learn More at CISA
          </a>
        </div>
      </div>
    </div>
  );
}
