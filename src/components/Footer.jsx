const Footer = () => {
    return (
        <footer className="bg-coffee-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center space-x-2">
                            <span className="text-2xl font-serif font-bold text-latte">Brewtique</span>
                        </a>
                        <p className="mt-2 text-coffee-300 text-sm">
                            Artisan coffee crafted with passion since 2015
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-center">
                        <a href="#home" className="footer-link">Home</a>
                        <a href="#about" className="footer-link">About</a>
                        <a href="#menu" className="footer-link">Menu</a>
                        <a href="#contact" className="footer-link">Contact</a>
                    </div>
                </div>

                <div className="border-t border-coffee-700 mt-8 pt-8 text-center text-coffee-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Brewtique Coffee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;