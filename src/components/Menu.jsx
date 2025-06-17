import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { menuItems } from '../data';

const Menu = ({ addToCart }) => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const categoryClasses = (category) =>
        `menu-category ${activeCategory === category ? 'active' : ''}`;

    return (
        <section id="menu" className="py-16 bg-cream dark:bg-coffee-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Menu</h2>
                    <div className="w-24 h-1 bg-coffee-600 mx-auto dark:bg-latte"></div>
                </div>

                <div className="flex justify-center mb-8 flex-wrap" data-aos="fade-up">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={categoryClasses("all")}
                    >
                        All Items
                    </button>
                    <button
                        onClick={() => setActiveCategory("hot")}
                        className={categoryClasses("hot")}
                    >
                        🔥 Hot Coffee
                    </button>
                    <button
                        onClick={() => setActiveCategory("cold")}
                        className={categoryClasses("cold")}
                    >
                        ❄️ Cold Brew
                    </button>
                    <button
                        onClick={() => setActiveCategory("dessert")}
                        className={categoryClasses("dessert")}
                    >
                        🧁 Dessert
                    </button>
                    <button
                        onClick={() => setActiveCategory("non-coffee")}
                        className={categoryClasses("non-coffee")}
                    >
                        🥤 Non-Coffee
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="menu-item bg-white dark:bg-coffee-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
                            data-category={item.category}
                            data-aos="fade-up"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-sm ${item.category === 'hot' ? 'bg-coffee-100 dark:bg-coffee-700 text-coffee-800 dark:text-latte' :
                                            item.category === 'cold' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                                                item.category === 'dessert' ? 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200' :
                                                    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                        }`}>
                                        {item.category === 'hot' ? 'Hot' :
                                            item.category === 'cold' ? 'Cold' :
                                                item.category === 'dessert' ? 'Dessert' : 'Non-Coffee'}
                                    </span>
                                </div>
                                <p className="text-coffee-600 dark:text-coffee-300 text-sm mb-4">
                                    {item.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-coffee-700 dark:text-latte">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-coffee-600 hover:bg-coffee-700 text-white px-4 py-2 rounded-full text-sm transition flex items-center space-x-1"
                                    >
                                        <ShoppingCartIcon className="h-4 w-4" />
                                        <span>Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;