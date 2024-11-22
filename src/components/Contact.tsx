import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
  
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    const formData = new FormData(formRef.current);
  
    try {
      await emailjs.send(
        'service_90dx9gm', // Service ID
        'template_tz6aet6', // Template ID
        {
          to_name: 'Recipient Name', // Replace with recipient logic if dynamic
          from_name: formData.get('name'),
          message: formData.get('message'),
        },
        'GfshVEA4WAM5Q6nn2' // Public Key
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-600" />
                <a href="mailto:tharuunmohan@gmail.com" className="hover:text-blue-600">
                  tharuunmohan@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-600" />
                <a href="tel:+919841124455" className="hover:text-blue-600">
                  +91 98411 24455
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                    focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                    focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                    focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                  disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}