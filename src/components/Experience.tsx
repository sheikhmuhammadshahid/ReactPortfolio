import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Webrange Solutions',
      position: 'Full Stack Developer',
      location: 'Islamabad, Pakistan',
      period: 'Jun 2024 - Present',
      description: 'Developing end-to-end solutions using Flutter, React, and ASP.NET. Leading mobile app development and backend architecture for multiple client projects.',
      achievements: [
        'Built 20+ mobile applications using Flutter, Supabase, Firebase and Rest APIs',
        'Developed scalable backend systems with ASP.NET and Node.js',
        'Improved app performance by 50% through optimization'
      ],
      technologies: ['Flutter', 'Supabase', 'Firebase', 'Node.js']
    },
    {
      company: 'KNS Technologies',
      position: 'Full Stack Developer',
      location: 'Islamabad, Pakistan',
      period: 'Sep 2023 - Jun 2024',
      description: 'Specialized in cross-platform mobile development with focus on Flutter and React Native applications for various industries.',
      achievements: [
        'Delivered 4+ mobile apps with 4+ store ratings',
        'Implemented real-time features using WebSocket and Firebase',
        'Trained team of 2 developers in Flutter best practices'
      ],
      technologies: ['Flutter', 'Supabase', 'Firebase', 'MongoDB', 'Php Laravel']
    },
    {
      company: 'FIT Computer Institute',
      position: 'Flutter Developer & Trainer',
      location: 'Rawalpindi, Pakistan',
      period: 'May 2022 - Sep 2023',
      description: 'Focused on training and mentoring junior developers in Flutter and Dart. Developed educational apps and provided hands-on training sessions.',
      achievements: [
        'Built 3+ applications',
        'Implemented RESTful APIs and microservices',
        'Reduced loading times by 40% through optimization'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    },
   
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in full-stack development, building innovative solutions across mobile and web platforms
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-primary-600 rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Flutter', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-6 h-6 mr-2" /> },
                { name: 'Dart', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" className="w-6 h-6 mr-2" /> },
                { name: 'Firebase', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-6 h-6 mr-2" /> },
                { name: 'REST APIs', icon: <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /></svg> },
                { name: 'Supabase', icon: <img src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="Supabase" className="w-6 h-6 mr-2" /> },
                { name: 'Git', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6 mr-2" /> },
                { name: 'CI/CD', icon: <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
                { name: 'React Js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 mr-2" /> },
                { name: 'React Native', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-6 h-6 mr-2" /> },
                { name: 'Figma', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-6 h-6 mr-2" /> },
                { name: 'ASP.Net', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="ASP.Net" className="w-6 h-6 mr-2" /> },
                { name: 'Desktop applications', icon: <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /></svg> },
                { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 mr-2" /> },
                { name: 'Java', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-6 h-6 mr-2" /> },
                { name: 'Laravel', icon: <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="Laravel" className="w-6 h-6 mr-2" /> },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row gap-2 items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-0 py-6 rounded-lg text-sm font-bold border border-gray-200 shadow box-border"
                  style={{ aspectRatio: '1 / .4', minHeight: 70 }}
                >
                  <div className="mb-2">{skill.icon}</div>
                  <span className="text-xs text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
