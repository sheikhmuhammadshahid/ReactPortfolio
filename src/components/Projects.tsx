import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import flutterPortfolio from '../assets/flutter_portfolio.png';
import fatafat from '../assets/fatafat.jpg';
import cowrie from '../assets/cowrie.jpg';
import sastiKhareedari from '../assets/sastikhareedari.jpg';
import meego from '../assets/meego.jpg';
import biitSocial from '../assets/biit_social.jpg';
import osaAuction from '../assets/osa_auction.png'; 
import miyar from '../assets/miyar.jpg'; 
import miyarSeller from '../assets/miyar_seller.jpg';
import miyarDelivery from '../assets/miyar_delivery.png';
import miyarGhar from '../assets/miyarGhar.png';
import multivender from '../assets/multi_vender.jpg';
import myTsw from '../assets/mytsw.jpg';
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filters = ['All', 'Web Development', 'Mobile App', 'Backend', 'Full Stack']

  const projects = [
    {
      id: 10,
      title: 'Multi Vendor E-commerce',
      category: 'Mobile App',
      description: 'A multi-vendor marketplace app where users can explore and purchase products from multiple sellers, as well as submit bulk purchase requests to get the best deals directly from vendors.',
      image: multivender,
      tags: ['Flutter', 'Dart', 'Supabase', 'Stripe API'],
      metrics: ['User-friendly interface', 'Secure payments', 'Real-time notifications'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 1,
      title: 'Cowrie, a modern savings app',
      category: 'Mobile App',
      description: 'I developed Cowrie, a modern savings app inspired by traditional African savings circles. The app enables users to create or join a Circle, set a shared financial goal, and contribute together with trusted members. It’s designed to make community-based saving simple, transparent, and secure — without relying on banks, interest, or credit scores.',
      image: cowrie,
      tags: ['Flutter', 'Dart', 'Supabase', 'Stripe API'],
      metrics: ['Stripe', 'Push Notifications'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 11,
      title: 'MyTsw',
      category: 'Mobile App',
      description: 'A healthcare consultation app where users can describe their health concerns, connect with doctors, and receive professional advice anytime, anywhere.',
      image: myTsw,
      tags: ['Flutter', 'Dart', 'Supabase', ],
      metrics: ['Stripe', 'Push Notifications'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    
    {
      id: 2,
      title: 'Fatafat Delivery',
      category: 'Full Stack',
      description: "Fatafat Delivery makes getting your favorite food as quick and easy as a tap! 🍔🍕 Order from restaurants near you, and let our smart system calculate delivery charges based on your exact driving distance — so you only pay what’s fair.",
      image: fatafat,
      tags: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
      metrics: ['Real-time tracking', 'User-friendly interface', 'Secure payment gateway'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 3,
      title: 'Sasti Khareedari',
      category: 'Mobile App',
      description: 'I developed a complete ecommerce mobile app – Sasti Khareedari – with a powerful Laravel backend and a modern, user-friendly interface. The app allows users to browse products, add them to the cart, place orders, and track deliveries in real time. Location-based delivery fee calculation ensures fair pricing for customers.',
      image: sastiKhareedari,
      tags: ['Flutter', 'Php', 'MySql', 'Laravel'],
      metrics: ['Real-time tracking', 'User-friendly interface', 'Secure payment gateway'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 4,
      title: 'Miyar',
      category: 'Mobile App',
      description: 'I developed a complete ecommerce mobile app – Miyar – with a powerful Laravel backend and a modern, user-friendly interface. The app allows users to browse products, add them to the cart, place orders, and track deliveries in real time. Location-based delivery fee calculation ensures fair pricing for customers.',
      image: miyar,
      tags: ['Flutter', 'Php', 'MySql', 'Laravel'],
      metrics: ['Real-time tracking', 'User-friendly interface', 'Secure payment gateway'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
     {
      id: 4,
      title: 'Miyar-Seller',
      category: 'Mobile App',
      description: 'I developed a complete ecommerce mobile app – Miyar – with a powerful Laravel backend and a modern, user-friendly interface. The app allows users to browse products, add them to the cart, place orders, and track deliveries in real time. Location-based delivery fee calculation ensures fair pricing for customers.',
      image: miyarSeller,
      tags: ['Flutter', 'Php', 'MySql', 'Laravel'],
      metrics: ['Real-time tracking', 'User-friendly interface', 'Secure payment gateway'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
     {
      id: 4,
      title: 'Miyar-Delivery Man',
      category: 'Mobile App',
      description: 'I developed a complete ecommerce mobile app – Miyar – with a powerful Laravel backend and a modern, user-friendly interface. The app allows users to browse products, add them to the cart, place orders, and track deliveries in real time. Location-based delivery fee calculation ensures fair pricing for customers.',
      image: miyarDelivery,
      tags: ['Flutter', 'Php', 'MySql', 'Laravel'],
      metrics: ['Real-time tracking', 'User-friendly interface', 'Secure payment gateway'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 5,
      title: 'Meego-Service Booking',
      category: 'Mobile App',
      description: 'MEEGO is your go-to app for discovering and booking top-rated beauty, wellness, and personal care services — all in one place. 💆‍♀️✨ Browse exclusive deals from salons, spas, and service providers near you. View detailed service descriptions, staff profiles, ratings, and reviews before booking.',
      image: meego,
      tags: ['ASP.NET', 'Flutter', 'Entity Framework', 'SQL Server'],
      metrics: ['Multi-location support', 'Real-time orders', 'Inventory management'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 6,
      title: 'BIIT Social App',
      category: 'Mobile App',
      description: 'University Connect brings your campus community together in one smart app! 📚✨ Stay informed, engaged, and connected — whether you’re an admin, teacher, student, or parent.',
      image: biitSocial,
      tags: ['Flutter', 'Asp.Net', 'Websocket', 'Entity Framework', 'SQL Server'],
      metrics: ['Real-time messaging', 'Posts', 'Excel integration'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 7,
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'Modern portfolio website built with Flutter and Firebase.',
      image: flutterPortfolio,
      tags: ['Flutter', 'Firebase', 'Flutter Web'],
      metrics: ['Responsive design', 'Fast loading', 'SEO optimized'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 8,
      title: 'OSA Auction System',
      category: 'Web Development',
      description: 'OSA Auction System is a powerful online auction management platform designed for seamless product listing, bidding, and sales tracking. 🎯 From live auctions to real-time bid updates, it enables admins to manage products, monitor sales, and track collected amounts effortlessly. Telephonists can assist bidders, ensuring a smooth auction experience.',
      image: osaAuction,
      tags: ['Flutter', 'Firebase', 'Flutter Web'],
      metrics: ['Responsive design', 'Fast loading', 'SEO optimized'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 9,
      title: 'Miyar Ghar',
      category: 'Web Development',
      description: 'Miyar Ghar is a comprehensive property management platform that simplifies the process of renting and managing properties. 🏡✨ Landlords can easily list their properties, screen tenants, and manage leases, while tenants can browse listings, submit applications, and pay rent online. The platform aims to streamline communication and transactions between landlords and tenants, making property management hassle-free.',
      image: miyarGhar,
      tags: ['React', 'Node.js', 'MongoDB'],
      metrics: ['User-friendly interface', 'Secure payments', 'Real-time notifications'],
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    

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
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />

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
