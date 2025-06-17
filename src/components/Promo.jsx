const Promo = ({ addToCart }) => {
    const promos = [
        {
            id: 1,
            name: "Morning Espresso",
            description: "Get our signature espresso at 20% off from 7-10 AM on weekdays.",
            originalPrice: 3.50,
            discountPrice: 2.80,
            discount: "-20%",
            tagColor: "bg-red-600",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
        },
        {
            id: 2,
            name: "Latte Duo",
            description: "Buy one latte, get the second one half price. Perfect for coffee dates!",
            originalPrice: 9.00,
            discountPrice: 6.75,
            discount: "Best Seller",
            tagColor: "bg-amber-500",
            image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
        }
    ];

    return (
        <section id="promo" className="py-16 bg-coffee-50 dark:bg-coffee-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Menu Specials</h2>
                    <div className="w-24 h-1 bg-coffee-600 mx-auto dark:bg-latte"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {promos.map((promo) => (
                        <div
                            key={promo.id}
                            className="bg-white dark:bg-coffee-700 rounded-2xl shadow-lg overflow-hidden"
                            data-aos="zoom-in"
                        >
                            <div className="relative">
                                <img
                                    src={promo.image}
                                    alt={promo.name}
                                    className="w-full h-48 md:h-64 object-cover"
                                />
                                <div className={`absolute top-4 right-4 ${promo.tagColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                                    {promo.discount}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{promo.name}</h3>
                                <p className="text-coffee-600 dark:text-coffee-300 mb-4">
                                    {promo.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-xl font-bold text-coffee-700 dark:text-latte">
                                            ${promo.discountPrice.toFixed(2)}
                                        </span>
                                        <span className="text-sm text-coffee-500 dark:text-coffee-400 line-through ml-2">
                                            ${promo.originalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => addToCart({
                                            ...promo,
                                            name: promo.name,
                                            price: promo.discountPrice,
                                            description: promo.description
                                        })}
                                        className="bg-coffee-600 hover:bg-coffee-700 text-white px-4 py-2 rounded-full text-sm transition flex items-center space-x-1"
                                    >
                                        <span>Quick Order</span>
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

export default Promo;