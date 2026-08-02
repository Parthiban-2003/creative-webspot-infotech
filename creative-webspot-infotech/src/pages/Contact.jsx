import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../animations/variants';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
            <SEO title="Contact" description="Get in touch with Creative WebSpot Info Tech for your next project." canonical="/contact" />

            <section className="py-20">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
                        <h1 className="text-4xl font-poppins font-bold mb-6">Let's Build Something Great</h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Have a project in mind? Reach out to us and let's discuss how we can help your business grow.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: MapPin, title: 'Address', text: '123 Tech Park, Innovation City, 400001' },
                                { icon: Phone, title: 'Phone', text: '+1 (234) 567-8900' },
                                { icon: Mail, title: 'Email', text: 'hello@creativewebspot.com' },
                                { icon: Clock, title: 'Hours', text: 'Mon - Fri: 9:00 AM - 6:00 PM' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 aspect-video rounded-2xl overflow-hidden shadow-soft bg-gray-200 dark:bg-gray-800">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25987368715491!3d40.697670068516254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                title="Company Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInRight}>
                        <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-secondary rounded-2xl shadow-glass space-y-5">
                            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>

                            <div className="grid md:grid-cols-2 gap-5">
                                <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                <input required type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                                    <option value="">Select Service</option>
                                    <option>Software Development</option>
                                    <option>Hardware Solutions</option>
                                    <option>AI & Automation</option>
                                    <option>Media Production</option>
                                </select>
                            </div>

                            <textarea required rows="5" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition resize-none" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>

                            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                                {submitted ? <><CheckCircle className="w-5 h-5" /> Message Sent!</> : <>Send Message <Send className="w-4 h-4" /></>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}