import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filters = ['All', 'Web Development', 'Mobile App', 'Backend', 'Full Stack']

  const projects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      category: 'Mobile App',
      description: 'Full-featured e-commerce mobile application built with Flutter, featuring real-time inventory and secure payments.',
      image: '🛒',
      tags: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
      metrics: ['Cross-platform deployment', 'Real-time sync', '5-star user experience'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 2,
      title: 'Task Management Web App',
      category: 'Web Development',
      description: 'Modern task management web application built with Next.js and ASP.NET backend with real-time collaboration.',
      image: '�',
      tags: ['Next.js', 'ASP.NET', 'SignalR', 'PostgreSQL'],
      metrics: ['Real-time updates', 'Team collaboration', 'Advanced analytics'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 3,
      title: 'Fitness Tracker App',
      category: 'Mobile App',
      description: 'Cross-platform fitness tracking app with React Native, featuring workout plans and progress analytics.',
      image: '💪',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Health APIs'],
      metrics: ['10K+ active users', 'Health kit integration', '4.8 App Store rating'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      category: 'Web Development',
      description: 'Full-stack restaurant management system with ASP.NET backend and React frontend for order processing.',
      image: '🍽️',
      tags: ['ASP.NET', 'React', 'Entity Framework', 'SQL Server'],
      metrics: ['Multi-location support', 'Real-time orders', 'Inventory management'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 5,
      title: 'Chat Application',
      category: 'Mobile App',
      description: 'Real-time chat application built with Flutter and ServerPod backend for seamless communication.',
      image: '💬',
      tags: ['Flutter', 'ServerPod', 'WebSocket', 'Firebase'],
      metrics: ['Real-time messaging', 'File sharing', 'Group chats'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'Modern portfolio website built with Next.js featuring responsive design and smooth animations.',
      image: '�',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      metrics: ['100% Lighthouse score', 'SEO optimized', 'Mobile responsive'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and the impact they've made for clients and users
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                  
                  {/* Overlay on Hover */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.links.live}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ delay: 0.1 }}
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-700" />
                        </motion.a>
                        <motion.a
                          href={project.links.github}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ delay: 0.2 }}
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-700" />
                        </motion.a>
                        <motion.a
                          href={project.links.case}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ delay: 0.3 }}
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-gray-700" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <span className="text-xs text-primary-600 font-medium bg-primary-100 px-2 py-1 rounded text-center">
                        {project.category}
                        </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-1">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Want to see more of my work or discuss a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View All Projects
            </motion.button>
            <motion.button
               onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
