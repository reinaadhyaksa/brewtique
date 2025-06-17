const About = () => {
    return (
        <section id="about" className="py-16 bg-white dark:bg-coffee-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Story</h2>
                    <div className="w-24 h-1 bg-coffee-600 mx-auto dark:bg-latte"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" data-aos="fade-right">
                        <img
                            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                            alt="Coffee beans and equipment"
                            className="rounded-2xl shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2" data-aos="fade-left">
                        <h3 className="text-2xl font-serif font-bold mb-4">Brewing Perfection Since 2015</h3>
                        <p className="mb-6 text-coffee-700 dark:text-coffee-200">
                            Brewtique was born from a passion for exceptional coffee. Our founder, a third-generation
                            barista, wanted to create a space where coffee lovers could experience the perfect cup, crafted with
                            attention to every detail.
                        </p>
                        <p className="mb-6 text-coffee-700 dark:text-coffee-200">
                            We source only the finest beans from sustainable farms around the world, roast them to
                            perfection, and brew each cup with care. Our philosophy is simple: great coffee starts with great
                            ingredients and ends with a great experience.
                        </p>

                        <div className="bg-coffee-50 dark:bg-coffee-700 p-6 rounded-2xl shadow-inner" data-aos="zoom-in">
                            <div className="flex items-start">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1661265882272-baf497d7a0a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
                                    alt="Head barista"
                                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-coffee-600 dark:border-latte"
                                />
                                <div>
                                    <h4 className="font-bold">Michael Rodriguez</h4>
                                    <p className="text-sm text-coffee-600 dark:text-latte mb-2">Head Barista & Founder</p>
                                    <p className="text-sm italic text-coffee-700 dark:text-coffee-200">
                                        "Coffee is more than a drink—it's a moment of connection. My goal is to make every
                                        cup tell a story."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;