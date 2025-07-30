import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Globe } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Building high-performance mobile applications using Flutter and React Native with seamless user experiences.',
      features: ['Flutter Development', 'React Native', 'Cross-platform', 'App Store Publishing']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Creating modern, responsive web applications using cutting-edge technologies and frameworks.',
      features: ['Flutter Web', 'ASP.NET', 'Next.js', 'React.js']
    },
    {
      icon: Globe,
      title: 'Backend Development',
      description: 'Developing robust and scalable backend systems with efficient APIs and database management.',
      features: ['ServerPod (Flutter)', 'Node.js', 'ASP.NET', 'API Development']
    },
    // {
    //   icon: Globe,
    //   title: 'Web Design',
    //   description: 'Creating stunning websites that represent your brand and convert visitors into customers.',
    //   features: ['Landing Pages', 'E-commerce', 'Corporate Sites', 'Portfolio Sites']
    // }
  ]

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
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive design and development services to help bring your digital vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how I can help bring your ideas to life with beautiful, functional design.
            </p>
            <motion.button
               onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
              whileHover={{ scale: 1.05 }}
              
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
