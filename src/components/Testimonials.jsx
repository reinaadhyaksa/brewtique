import { testimonials } from "../data";

const Testimonials = () => {
    const renderStars = (count) => {
        const stars = [];
        const fullStars = Math.floor(count);
        const hasHalfStar = count % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        }

        return stars;
    };

    return (
        <section id="testimonials" className="py-16 bg-white dark:bg-coffee-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
                    <div className="w-24 h-1 bg-coffee-600 mx-auto dark:bg-latte"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-cream dark:bg-coffee-700 p-6 rounded-2xl shadow-md"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex items-center space-x-1 text-amber-400">
                                    {renderStars(testimonial.stars)}
                                </div>
                            </div>
                            <p className="text-coffee-700 dark:text-coffee-200 italic mb-4">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-coffee-600 dark:text-latte">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;