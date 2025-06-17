import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }, []);

    return (
        <section
            id="home"
            className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-coffee-100 to-cream dark:from-coffee-800 dark:to-coffee-900"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                        Artisan Coffee <br />
                        <span className="text-coffee-600 dark:text-latte">Crafted with Love</span>
                    </h1>
                    <p className="text-lg mb-8 text-coffee-700 dark:text-coffee-200">
                        Experience the finest coffee from carefully selected beans and our warm service.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#menu"
                            className="bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-full text-center transition flex items-center justify-center space-x-2"
                        >
                            <i className="fas fa-mug-hot"></i>
                            <span>Order Now</span>
                        </a>
                        <a
                            href="#location"
                            className="border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-white px-6 py-3 rounded-full text-center transition flex items-center justify-center space-x-2 dark:border-latte dark:text-latte dark:hover:bg-coffee-700"
                        >
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Visit Us</span>
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2" data-aos="fade-left">
                    <img
                        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                        alt="Artisan coffee being poured"
                        className="rounded-2xl shadow-xl w-full h-auto max-h-[500px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;