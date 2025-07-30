import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of UX Design: AI and Human-Centered Design',
      excerpt: 'Exploring how artificial intelligence is reshaping the design landscape while keeping humans at the center of the experience.',
      image: '🤖',
      category: 'UX Design',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['AI', 'UX', 'Future', 'Design Trends'],
      featured: true
    },
    {
      id: 2,
      title: '10 Design System Mistakes That Could Cost You Time',
      excerpt: 'Common pitfalls when building design systems and how to avoid them to create more efficient and scalable solutions.',
      image: '🎨',
      category: 'Design Systems',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['Design Systems', 'Productivity', 'Best Practices'],
      featured: false
    },
    {
      id: 3,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Understanding the importance of mobile-first approach in today\'s multi-device world and how to implement it effectively.',
      image: '📱',
      category: 'Mobile Design',
      date: '2024-01-01',
      readTime: '5 min read',
      tags: ['Mobile', 'Responsive', 'Strategy'],
      featured: false
    },
    {
      id: 4,
      title: 'Color Psychology in Digital Products',
      excerpt: 'How color choices impact user behavior and emotions, with practical tips for choosing the right palette for your product.',
      image: '🌈',
      category: 'Design Theory',
      date: '2023-12-25',
      readTime: '7 min read',
      tags: ['Color', 'Psychology', 'Branding'],
      featured: false
    },
    {
      id: 5,
      title: 'Accessibility in Design: A Complete Guide',
      excerpt: 'Creating inclusive designs that work for everyone, including users with disabilities. Tools, techniques, and best practices.',
      image: '♿',
      category: 'Accessibility',
      date: '2023-12-18',
      readTime: '10 min read',
      tags: ['Accessibility', 'Inclusive Design', 'WCAG'],
      featured: false
    },
    {
      id: 6,
      title: 'User Research Methods Every Designer Should Know',
      excerpt: 'A comprehensive overview of user research methods, when to use them, and how to get the most valuable insights.',
      image: '🔍',
      category: 'User Research',
      date: '2023-12-11',
      readTime: '9 min read',
      tags: ['Research', 'Methods', 'User Insights'],
      featured: false
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

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights, tips, and thoughts on design, technology, and the creative process
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.article
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center p-12">
                  <span className="text-8xl">{featuredPost.image}</span>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
                      Featured Post
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{formatDate(featuredPost.date)}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.readTime}</span>
                    <Tag className="w-4 h-4 mr-2" />
                    <span>{featuredPost.category}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              {/* Post Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors flex items-center gap-1"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Design Insights
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest articles, design tips, and industry insights delivered straight to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* View All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
