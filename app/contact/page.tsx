"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from "@/components/ui/spotlight";
import Navbar from "@/components/navbar";
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

interface ContactFormData {
  full_name: string;
  email: string;
  phone_number: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<ContactFormData>({
    full_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ status: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (formStatus) setFormStatus(null); // Clear status on new input
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const templateParams = { ...formData };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_itoxhuf', // Replace with your Service ID or use environment variables
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_grq579i',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'dMLU71QXgqS3PIRY-' // Replace with your Public Key or use environment variables
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        background: '#0a0b13',
        color: '#ffffff',
        confirmButtonColor: '#ef4444'
      });
      setFormData({ full_name: '', email: '', phone_number: '', subject: '', message: '' });
    }).catch((err) => {
      console.error('FAILED...', err);
      setFormStatus({ status: 'error', message: 'Failed to send the message. Please try again later.' });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  const telegramBotLink = "https://t.me/your_support_bot"; // Replace with your actual bot link

  // Reusable motion props for sections
  const sectionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-[#060312]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-white ">
      <Navbar
        scrollToAbout={() => router.push('/#about')}
        scrollToShopifyStores={() => router.push('/#shopify-stores')}
        scrollToFaq={() => router.push('/#faq')}
        scrollToPricing={() => router.push('/#pricing')}
        scrollToServices={() => router.push('/#services')}
      />
      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white"/>
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
          >
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            Contact Us
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg md:max-w-2xl lg:max-w-3xl text-center mx-auto px-4 md:px-0 ">
            Get in touch with our team. We&apos;re here to help and answer any questions you might have.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div {...sectionProps} className="lg:col-span-2">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg backdrop-blur-sm p-8 ">
                <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 mb-6">
                  Send us a message
                </h2> 
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-neutral-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition duration-200 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition duration-200 backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-neutral-300 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition duration-200 backdrop-blur-sm"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange} 
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition duration-200 backdrop-blur-sm"/>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition duration-200 resize-vertical backdrop-blur-sm"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Form Status Message */}
                  {formStatus && formStatus.status === 'error' && (
                    <div
                      className="text-sm text-center p-3 rounded-md bg-red-500/20 text-red-300"
                      role="alert"
                    >
                      {formStatus.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-neutral-800 border border-neutral-700 text-neutral-50 py-3 px-6 rounded-md hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <motion.div {...sectionProps}>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg backdrop-blur-sm p-6">
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 mb-4 ">
                    Contact Information
                  </h3>
                  <div className="space-y-4">

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-neutral-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-neutral-50">Email</p>
                        <p className="text-sm text-neutral-300">Digitalnerdconsult@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-neutral-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-neutral-50">Phone</p>
                        <p className="text-sm text-neutral-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Telegram Support */}
              <motion.div {...sectionProps}>
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-lg backdrop-blur-sm p-6 text-neutral-50">
                  <div className="flex items-center mb-4 ">
                    <svg className="w-8 h-8 mr-3 text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <h3 className="text-lg font-semibold">Instant Support</h3>
                  </div>
                  <p className="text-neutral-300 mb-4 text-sm">
                    Need immediate assistance? Chat with our support bot on Telegram for quick responses.
                  </p>
                  <a
                    href="https://t.me/Digitalnerdhqchat_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-neutral-50 text-neutral-900 px-4 py-2 rounded-md font-medium hover:bg-neutral-200 transition duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Chat on Telegram
                  </a>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div {...sectionProps}>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg backdrop-blur-sm p-6">
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 mb-4 ">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-300">Monday - Friday</span>
                      <span className="text-neutral-50">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-300">Saturday</span>
                      <span className="text-neutral-50">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-300">Sunday</span>
                      <span className="text-neutral-50">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;