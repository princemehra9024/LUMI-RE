import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-gold font-inter text-sm tracking-widest uppercase">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream">
            Contact Us
          </h1>
          <p className="text-cream/70 font-inter text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, or private events.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal p-8 md:p-12"
          >
            <h2 className="font-display text-3xl font-bold text-gold mb-8">Send a Message</h2>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                />

                <select
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                  required
                >
                  <option value="">Subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="private">Private Event</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">General Inquiry</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  required
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors resize-none"
                />

                <motion.button
                  type="submit"
                  className="w-full bg-gold text-black font-inter font-semibold py-4 flex items-center justify-center space-x-2 hover:bg-gold/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>SEND MESSAGE</span>
                </motion.button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="text-gold text-6xl">✓</div>
                <h3 className="font-display text-2xl font-bold text-cream">Message Sent!</h3>
                <p className="text-cream/70 font-inter">We'll get back to you shortly.</p>
              </div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="bg-charcoal p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">Location</h3>
                  <p className="text-cream/80 font-inter leading-relaxed">
                    123 Gourmet Avenue<br />
                    Downtown Financial District<br />
                    New York, NY 10013
                  </p>
                  <button className="mt-3 text-gold hover:text-gold/80 font-inter text-sm underline">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-charcoal p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">Phone</h3>
                  <a 
                    href="tel:+15551234567" 
                    className="text-cream/80 font-inter hover:text-gold transition-colors block"
                  >
                    +1 (555) 123-4567
                  </a>
                  <p className="text-cream/60 font-inter text-sm mt-1">
                    Available during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-charcoal p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">Email</h3>
                  <a 
                    href="mailto:info@lumiere.com" 
                    className="text-cream/80 font-inter hover:text-gold transition-colors block mb-1"
                  >
                    info@lumiere.com
                  </a>
                  <a 
                    href="mailto:reservations@lumiere.com" 
                    className="text-cream/80 font-inter hover:text-gold transition-colors block"
                  >
                    reservations@lumiere.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-charcoal p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <Clock className="text-gold mt-1" size={24} />
                <div className="w-full">
                  <h3 className="font-display text-xl font-bold text-cream mb-3">Hours</h3>
                  <div className="space-y-2 text-cream/80 font-inter text-sm">
                    <div className="flex justify-between">
                      <span>Tuesday - Thursday</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>5:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gold">
                      <span>Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 h-96 bg-charcoal rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368459391!3d40.71277597933044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b4c7c67%3A0x3d51c2c7b5ec8f3!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LUMIÈRE Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
