import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const services = [
    'Software Development',
    'Hardware Solutions',
    'Photography',
    'Video Production',
    'Content Writing',
    'Other'
];

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setForm({ name: '', email: '', phone: '', service: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        }, 1500);
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className="p-8 md:p-10 bg-white dark:bg-secondary rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                        <input
                            required name="name" value={form.name} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                        <input
                            required type="email" name="email" value={form.email} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                        <input
                            type="tel" name="phone" value={form.phone} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Service Interested In</label>
                        <select
                            required name="service" value={form.service} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        >
                            <option value="">Select a service</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Your Message</label>
                    <textarea
                        required name="message" value={form.message} onChange={handleChange} rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                    />
                </div>

                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex items-center justify-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl font-medium"
                        >
                            <CheckCircle className="w-5 h-5" /> Message sent successfully! We'll contact you soon.
                        </motion.div>
                    ) : (
                        <motion.button
                            key="button"
                            type="submit"
                            disabled={status === 'loading'}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                            ) : (
                                <>Send Message <Send className="w-4 h-4" /></>
                            )}
                        </motion.button>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}