import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed w-full z-50 bg-cream/90 backdrop-blur-sm shadow-sm dark:bg-coffee-900/90">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <span className="text-2xl font-serif font-bold text-coffee-700 dark:text-latte">Brewtique</span>
                </a>

                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#menu" className="nav-link">Menu</a>
                    <a href="#promo" className="nav-link">Promo</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800"
                    >
                        {darkMode ? (
                            <SunIcon className="h-5 w-5 text-yellow-300" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>

                    <a
                        href="#order"
                        className="hidden md:block bg-coffee-600 hover:bg-coffee-700 text-white px-4 py-2 rounded-full transition"
                    >
                        Order Now
                    </a>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-cream dark:bg-coffee-800 shadow-lg`}>
                <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                    <a href="#home" onClick={closeMobileMenu} className="nav-link mobile-nav-link">Home</a>
                    <a href="#about" onClick={closeMobileMenu} className="nav-link mobile-nav-link">About</a>
                    <a href="#menu" onClick={closeMobileMenu} className="nav-link mobile-nav-link">Menu</a>
                    <a href="#promo" onClick={closeMobileMenu} className="nav-link mobile-nav-link">Promo</a>
                    <a href="#testimonials" onClick={closeMobileMenu} className="nav-link mobile-nav-link">Testimonials</a>
                    <a href="#contact" onClick={closeMobileMenu} className="nav-link mobile-nav-link">Contact</a>
                    <a
                        href="#order"
                        onClick={closeMobileMenu}
                        className="bg-coffee-600 hover:bg-coffee-700 text-white px-4 py-2 rounded-full text-center transition"
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;