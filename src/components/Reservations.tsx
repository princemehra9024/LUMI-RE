import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

export function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-gold font-inter text-sm tracking-widest uppercase">Book Your Table</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream">
            Reservations
          </h1>
          <p className="text-cream/70 font-inter text-lg max-w-2xl mx-auto">
            Secure your seat at LUMIÈRE for an unforgettable culinary journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal p-8 md:p-12"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-cream font-inter text-sm">
                    <User size={16} className="text-gold" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-cream font-inter text-sm">
                      <Mail size={16} className="text-gold" />
                      <span>Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-cream font-inter text-sm">
                      <Phone size={16} className="text-gold" />
                      <span>Phone *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Date, Time & Guests */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-cream font-inter text-sm">
                      <Calendar size={16} className="text-gold" />
                      <span>Date *</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-cream font-inter text-sm">
                      <Clock size={16} className="text-gold" />
                      <span>Time *</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-cream font-inter text-sm">
                      <Users size={16} className="text-gold" />
                      <span>Guests *</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Occasion */}
                <div className="space-y-2">
                  <label className="text-cream font-inter text-sm">Special Occasion</label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="proposal">Proposal</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-cream font-inter text-sm">
                    <MessageSquare size={16} className="text-gold" />
                    <span>Special Requests</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black border border-gold/30 px-4 py-3 text-cream font-inter focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Dietary restrictions, seating preferences, etc."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full bg-gold text-black font-inter font-semibold py-4 flex items-center justify-center space-x-2 hover:bg-gold/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>CONFIRM RESERVATION</span>
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6"
              >
                <CheckCircle className="text-gold mx-auto" size={80} />
                <h3 className="font-display text-3xl font-bold text-cream">
                  Reservation Confirmed!
                </h3>
                <p className="text-cream/70 font-inter">
                  Thank you for choosing LUMIÈRE. We've sent a confirmation to your email.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Hours */}
            <div className="bg-charcoal p-8 space-y-4">
              <h3 className="font-display text-2xl font-bold text-gold">Opening Hours</h3>
              <div className="space-y-2 text-cream/80 font-inter">
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

            {/* Policies */}
            <div className="bg-charcoal p-8 space-y-4">
              <h3 className="font-display text-2xl font-bold text-gold">Reservation Policy</h3>
              <ul className="space-y-3 text-cream/80 font-inter text-sm leading-relaxed">
                <li>• Reservations recommended, walk-ins welcomed based on availability</li>
                <li>• Please arrive within 15 minutes of your reservation time</li>
                <li>• Cancellations require 24-hour notice</li>
                <li>• Smart casual dress code enforced</li>
                <li>• Private dining available for groups of 8 or more</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-charcoal p-8 space-y-4">
              <h3 className="font-display text-2xl font-bold text-gold">Contact Us</h3>
              <div className="space-y-3 text-cream/80 font-inter">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-gold" />
                  <a href="tel:+15551234567" className="hover:text-gold transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-gold" />
                  <a href="mailto:reservations@lumiere.com" className="hover:text-gold transition-colors">
                    reservations@lumiere.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
