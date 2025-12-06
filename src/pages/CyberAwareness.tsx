import React from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function CyberAwareness() {
  const tips = [
    { title: 'Strong Passwords', icon: Lock, description: 'Use complex passwords and 2FA.' },
    { title: 'Phishing Attacks', icon: AlertTriangle, description: 'Identify and report suspicious emails.' },
    { title: 'Data Privacy', icon: Eye, description: 'Control what you share online.' },
    { title: 'Secure Browsing', icon: Shield, description: 'Use HTTPS and VPNs when necessary.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Cyber Awareness</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((t) => (
            <div key={t.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <t.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
