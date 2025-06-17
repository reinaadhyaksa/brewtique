const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        e.target.reset();
    };

    return (
        <section id="contact" className="py-16 bg-cream dark:bg-coffee-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Visit Us</h2>
                    <div className="w-24 h-1 bg-coffee-600 mx-auto dark:bg-latte"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="bg-white dark:bg-coffee-800 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-coffee-700 dark:text-coffee-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-coffee-300 focus:outline-none focus:ring-2 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-coffee-700 dark:text-coffee-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-coffee-300 focus:outline-none focus:ring-2 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-coffee-700 dark:text-coffee-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-coffee-300 focus:outline-none focus:ring-2 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600 dark:text-white"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-full transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:w-1/2" data-aos="fade-left" id="location">
                        <div className="bg-white dark:bg-coffee-800 p-8 rounded-2xl shadow-lg h-full">
                            <h3 className="text-2xl font-serif font-bold mb-6">Our Location</h3>

                            <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256751322!2d-73.9881179241366!3d40.74844097138938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689870312993!5m2!1sen!2sus"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="dark:grayscale dark:opacity-90"
                                ></iframe>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-coffee-600 dark:text-latte mt-1 mr-3"></i>
                                    <p>123 Coffee Street, Brew District<br />New York, NY 10001</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone-alt text-coffee-600 dark:text-latte mr-3"></i>
                                    <p>(212) 555-1234</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-coffee-600 dark:text-latte mr-3"></i>
                                    <p>hello@brewtique.com</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-clock text-coffee-600 dark:text-latte mr-3"></i>
                                    <p>
                                        Mon-Fri: 7:00 AM - 8:00 PM<br />
                                        Sat-Sun: 8:00 AM - 9:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-coffee-200 dark:border-coffee-700">
                                <h4 className="font-bold mb-3">Connect With Us</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="social-icon bg-coffee-100 hover:bg-coffee-200 dark:bg-coffee-700 dark:hover:bg-coffee-600 text-coffee-700 dark:text-white"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="social-icon bg-coffee-100 hover:bg-coffee-200 dark:bg-coffee-700 dark:hover:bg-coffee-600 text-coffee-700 dark:text-white"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="social-icon bg-coffee-100 hover:bg-coffee-200 dark:bg-coffee-700 dark:hover:bg-coffee-600 text-coffee-700 dark:text-white"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="social-icon bg-coffee-100 hover:bg-coffee-200 dark:bg-coffee-700 dark:hover:bg-coffee-600 text-coffee-700 dark:text-white"
                                    >
                                        <i className="fab fa-tiktok"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;