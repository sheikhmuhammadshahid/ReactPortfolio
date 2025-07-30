import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      avatar: '👩‍💼',
      rating: 5,
      text: "Jenny's design work exceeded our expectations. She transformed our complex platform into an intuitive experience that our users love. The attention to detail and user-centric approach is exceptional.",
      project: 'SaaS Platform Redesign'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'FinanceFlow',
      avatar: '👨‍💻',
      rating: 5,
      text: "Working with Jenny was a game-changer for our mobile app. Her research-driven approach and beautiful designs helped us achieve a 40% increase in user engagement. Highly recommended!",
      project: 'Mobile Banking App'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'Marketing Director',
      company: 'GreenEarth Co.',
      avatar: '👩‍🎨',
      rating: 5,
      text: "Jenny created a brand identity that perfectly captures our company's values. The logo, colors, and overall visual system have received amazing feedback from our customers and investors.",
      project: 'Brand Identity Design'
    },
    {
      id: 4,
      name: 'David Park',
      position: 'Founder',
      company: 'HealthTech Solutions',
      avatar: '👨‍⚕️',
      rating: 5,
      text: "The UX research Jenny conducted revealed insights we never considered. Her recommendations led to a 60% improvement in our user onboarding flow. Professional and thorough work.",
      project: 'Healthcare UX Research'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'CTO',
      company: 'DataViz Pro',
      avatar: '👩‍💻',
      rating: 5,
      text: "Jenny has an incredible ability to translate complex data into beautiful, understandable visualizations. Our dashboard is now both functional and stunning. Users can't stop praising it!",
      project: 'Analytics Dashboard'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'VP of Product',
      company: 'E-Shop Global',
      avatar: '👨‍💼',
      rating: 5,
      text: "The e-commerce redesign Jenny delivered resulted in our highest conversion rates ever. Her understanding of user psychology and conversion optimization is remarkable.",
      project: 'E-commerce Platform'
    }
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
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about working with me
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Project */}
              <div className="mb-4">
                <span className="text-xs text-primary-600 font-medium bg-primary-100 px-2 py-1 rounded">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  50+
                </motion.div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  100+
                </motion.div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  4.9
                </motion.div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  95%
                </motion.div>
                <div className="text-sm opacity-90">Client Retention</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join My Happy Clients?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your project and create something amazing together
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
            className="btn-primary"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
