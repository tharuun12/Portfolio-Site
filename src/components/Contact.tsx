import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';
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
        'service_90dx9gm', 
        'template_tz6aet6', 
        {
          to_name: 'Recipient Name',
          from_name: formData.get('name'),
          message: formData.get('message'),
        },
        'GfshVEA4WAM5Q6nn2'
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
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <h4 className="text-gray-600 dark:text-gray-300 mb-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              I'm always open to discussing <span className="text-blue-500 font-bold">job opportunities</span>, projects, creative ideas to be part of your visions.
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-14 h-14 mr-4 text-blue-600" />
                <a href="mailto:tharuunmohan@gmail.com" className="hover:text-blue-600">
                  tharuunmohan@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-14 h-14 mr-4 text-blue-600" />
                <a href="tel:+919841124455" className="hover:text-blue-600">
                  +91 98411 24455
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'message'].map((field, index) => (
                <motion.div key={field} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * index }}>
                  <label htmlFor={field} className="block text-sm font-medium mb-2 capitalize">
                    {field}
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field}
                      id={field}
                      name={field}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                        focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 focus:scale-105 transition-transform"
                    />
                  ) : (
                    <textarea
                      id={field}
                      name={field}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                        focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 focus:scale-105 transition-transform"
                    />
                  )}
                </motion.div>
              ))}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                  disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 scale-105">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-semibold text-blue-600">Message sent successfully!</h3>
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => setSubmitStatus('idle')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-center text-lg text-gray-700 mb-6">
                      I will get in touch with you shortly. Thank you for reaching out!
                    </p>
                    <button
                      className="w-full py-2 px-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transform transition-all duration-300"
                      onClick={() => setSubmitStatus('idle')}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
