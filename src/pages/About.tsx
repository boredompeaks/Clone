import React from 'react';
import { GraduationCap, Award, Mail, Briefcase, Calendar, Star } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      title: 'Computer Science & Application Teacher',
      organization: 'Christ Church School at Clare Road',
      period: 'June 2022 - Present',
      description: 'Teaching Computer Science and Applications to students.'
    },
    {
      title: 'ICT and Computer Science Teacher',
      organization: 'HVB Global Academy',
      period: 'January 2021 - 2022',
      description: 'Worked as an ICT and Computer Science teacher.'
    },
    {
      title: 'ICT and IT Teacher',
      organization: 'Lilavati Lalji Dayal High School & College',
      period: 'June 2015 - 2021',
      description: 'Recognized as the "Best Teacher" for the year 2018-19.'
    },
    {
      title: 'Visiting Faculty (B.Com, BMS, BCA)',
      organization: 'Navneet College & Global Education (MMK College)',
      period: 'Various',
      description: 'Visiting faculty for IT subjects in degree college and full-time faculty for junior college.'
    },
    {
      title: 'Technical Trainer',
      organization: 'Creative Computers',
      period: 'Mid-career',
      description: 'Trained navy officers and sailors on computers and technologies.'
    },
    {
      title: 'Senior Trainer',
      organization: 'ThinkLABS Technosolutions Pvt. Ltd. (IIT Bombay)',
      period: 'Career Start',
      description: 'Development, demonstration, and coaching of robotic kits and activities for school students across India.'
    }
  ];

  const achievements = [
    'Judge at YUGMA 3.0 for Game Crafter Sr. Jr. Competition (2024)',
    'Received Prize For Best Toy Design organized by HBCSE & TIFR at Vissanji Academy.',
    'Awarded "Digital Innovator" in individual category at TEACH.ERAT.HON (Lilavatibai Podar School).',
    'Judge at DAAS Competition (PowerPoint Presentation), Nitin Godiwala Junior College (2019).',
    'Judge at Synergy Competition (Dance), Lilavati Lalji Dayal High School (2019).',
    'Guest Lecturer at Sitaram Deora Institute of Management Studies (2019).',
    'Guest of Honour/Judge at Tech-Tris, RD and SH National College (2014).',
    'Judge at Roboliga (Robotic Competition), IITB (2010).'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <GraduationCap className="h-20 w-20 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
              <Award className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Badar Bawani</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A self-directed, action-oriented professional with over 7 years of experience in education. Dedicated to the social and academic growth of every student.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Experience Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-indigo-100 dark:border-gray-700 last:border-0 hover:border-indigo-500 transition-colors duration-300 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />
                  <div className="mb-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2 flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 font-medium mb-2">{exp.organization}</div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements & Awards</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-200">
                  <Award className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 opacity-50 backdrop-blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <a
                href="mailto:badar.bawani@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                badar.bawani@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
