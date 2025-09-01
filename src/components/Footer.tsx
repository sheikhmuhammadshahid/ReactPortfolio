import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Heart,
  ExternalLink,
  Code,
  Zap,
  X,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'

const Footer: React.FC = () => {
  const ref = useRef(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'fallback' | null>(null);
  const [showDevIndicator, setShowDevIndicator] = useState(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      console.log('🔧 EmailJS Configuration:', {
        serviceId: serviceId || 'Missing',
        templateId: templateId || 'Missing', 
        publicKey: publicKey ? 'Present' : 'Missing',
        emailjsLibrary: !!emailjs
      });
      
      // Check if EmailJS is properly configured
      if (serviceId && templateId && publicKey && emailjs) {
        console.log('📧 Sending email via EmailJS...');
        
        // Initialize EmailJS
        emailjs.init(publicKey);
        
        // Template parameters for EmailJS
        // IMPORTANT: to_email ensures email goes to company, reply_to allows company to respond to customer
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          service_interest: formData.service || 'General inquiry',
          message: formData.message,
          reply_to: formData.email,
          to_email: 'sheikhmuhammadshahid123@gmail.com', // Ensure email goes to you
          timestamp: new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
          })
        };

        console.log('📋 Template parameters:', templateParams);
        console.log('🎯 Email will be sent TO:', templateParams.to_email);
        console.log('🔄 Customer can be reached at:', templateParams.reply_to);

        // Send email via EmailJS
        const result = await emailjs.send(serviceId, templateId, templateParams);
        console.log('✅ EmailJS Success:', result);
        
        setSubmitStatus("success");
        
      } else {
        console.warn('⚠️ EmailJS not configured, using mailto fallback');
        console.log('Missing configuration:', {
          serviceId: !serviceId ? 'Missing VITE_EMAILJS_SERVICE_ID' : 'OK',
          templateId: !templateId ? 'Missing VITE_EMAILJS_TEMPLATE_ID' : 'OK',
          publicKey: !publicKey ? 'Missing VITE_EMAILJS_PUBLIC_KEY' : 'OK',
          emailjsLibrary: !emailjs ? 'EmailJS library not loaded' : 'OK'
        });
        
        // Simple mailto fallback (only used when EmailJS is not configured)
        const subject = `New Contact: ${formData.name} - ${formData.service || 'General Inquiry'}`;
        const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service || 'General inquiry'}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}`;
        
        const mailtoLink = `mailto:sheikhmuhammadshahid123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitStatus("fallback");
      }
      
      // Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      
      if (error && typeof error === 'object' && 'text' in error) {
        console.error('Error details:', error.text);
      }
      
      setSubmitStatus("error");
      
      // Emergency fallback - simple mailto
      const subject = `URGENT: Contact Form Error - ${formData.name}`;
      const emailBody = `EmailJS failed to send this message:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service || 'General inquiry'}
Message: ${formData.message}`;
      
      const mailtoLink = `mailto:sheikhmuhammadshahid123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink, '_blank');
      
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 8000);
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/m-shahid-3051sk/', label: 'LinkedIn' },
    
    { icon: Github, href: 'https://github.com/sheikhmuhammadshahid', label: 'GitHub' },
   
  ]

  const quickLinks = [
    { name: 'About', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' }
  ]

  const services = [
    'Mobile Apps',
    'Web Development',
    'Backend Development',
    'Flutter Development',
    'React Native',
    'ASP.NET'
  ]

  return (
    <>
      {/* Floating Development Indicator */}
      {showDevIndicator && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-1/2 right-4 z-50 transform -translate-y-1/2"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 p-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm max-w-xs relative overflow-hidden"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-primary-400/20 animate-pulse"></div>
            
            {/* Close button */}
            <motion.button
              onClick={() => setShowDevIndicator(false)}
              // whileHover={{ scale: 1.1, rotate: 90 }}
              // whileTap={{ scale: 0.9 }}
              className="absolute top-2 right-2 w-9 h-9 p-2 z-20 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 focus:outline-none transition-colors duration-200 cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                >
                  <Code className="w-4 h-4 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-sm">In Development</h3>
                  <div className="flex items-center space-x-1">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Zap className="w-3 h-3 text-yellow-300" />
                    </motion.div>
                    <span className="text-white/80 text-xs">Beta Version</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white/90 text-xs leading-relaxed mb-3">
                🚧 This portfolio is actively being developed. New features and improvements are coming soon!
              </p>
              
              {/* Progress bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-white/80 mb-1">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Status dots */}
              <div className="flex items-center justify-center space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.3 
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <footer id="contact" className="bg-gray-900 text-white">
      {/* Contact Form Section */}
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">sheikhmuhammadshahid123@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+923401062704</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              ref={ref}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg flex items-center space-x-2 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                        : submitStatus === 'fallback'
                        ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                    {submitStatus === 'fallback' && <ExternalLink className="w-5 h-5" />}
                    {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                    <span className="text-sm">
                      {submitStatus === 'success' && 'Message sent successfully! I\'ll get back to you soon.'}
                      {submitStatus === 'fallback' && 'Opening your email client to send the message.'}
                      {submitStatus === 'error' && 'There was an issue sending your message. Please try again or use the email client.'}
                    </span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service</option>
                      <option value="Mobile Apps">Mobile Apps</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Backend Development">Backend Development</option>
                      <option value="Flutter Development">Flutter Development</option>
                      <option value="React Native">React Native</option>
                      <option value="ASP.NET">ASP.NET</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <span className="text-xl font-bold">Muhammad Shahid</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building digital solutions that drive business growth. Specializing in mobile apps, 
                web development, and backend systems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe for design tips and updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-600 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center mb-4 md:mb-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Muhammad Shahid
            </div>
            <div>
              © 2025 Muhammad Shahid. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
