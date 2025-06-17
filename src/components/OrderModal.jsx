import { useState, useEffect } from 'react';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const OrderModal = ({ isOpen, onClose, cart, updateCart, clearCart }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    if (!isOpen) return null;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08875; 
    const total = subtotal + tax;

    const increaseQuantity = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        updateCart(newCart);
    };

    const decreaseQuantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
        } else {
            newCart.splice(index, 1);
        }
        updateCart(newCart);
    };

    const sendWhatsAppOrder = () => {
        if (!phoneNumber) {
            alert('Please enter your WhatsApp number');
            return;
        }

        const itemsText = cart.map(item =>
            `${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`
        ).join('%0A');

        const message = `Hello Brewtique! I'd like to order:%0A%0A${itemsText}%0A%0ATotal: $${total.toFixed(2)}%0A%0ANotes: ${notes || 'None'}`;

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const whatsappUrl = isMobile
            ? `https://wa.me/6282313931717?text=${message}`
            : `https://web.whatsapp.com/send?phone=6282313931717&text=${message}`;

        window.open(whatsappUrl, '_blank');

        clearCart();
        onClose();
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-coffee-800 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-serif font-bold">Your Order</h3>
                        <button
                            onClick={onClose}
                            className="text-coffee-500 hover:text-coffee-700 dark:text-coffee-300 dark:hover:text-white"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-coffee-700 dark:text-coffee-300 mb-1">
                            WhatsApp Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your WhatsApp number"
                            className="w-full px-4 py-2 rounded-lg border border-coffee-300 focus:outline-none focus:ring-2 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600 dark:text-white mb-4"
                            required
                        />

                        <label htmlFor="notes" className="block text-sm font-medium text-coffee-700 dark:text-coffee-300 mb-1">
                            Order Notes
                        </label>
                        <textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Any special requests?"
                            rows="2"
                            className="w-full px-4 py-2 rounded-lg border border-coffee-300 focus:outline-none focus:ring-2 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600 dark:text-white"
                        ></textarea>
                    </div>

                    <div id="cart-items" className="space-y-4 mb-6">
                        {cart.length === 0 ? (
                            <div className="text-center py-8 text-coffee-500 dark:text-coffee-400">
                                <i className="fas fa-coffee text-4xl mb-2"></i>
                                <p>Your cart is empty</p>
                            </div>
                        ) : (
                            cart.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-coffee-200 dark:border-coffee-700 pb-4"
                                >
                                    <div>
                                        <h4 className="font-bold">{item.name}</h4>
                                        <p className="text-sm text-coffee-600 dark:text-coffee-400">
                                            ${item.price.toFixed(2)} each
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => decreaseQuantity(index)}
                                            className="px-2 py-1 rounded-lg bg-coffee-100 dark:bg-coffee-700 text-coffee-700 dark:text-white"
                                        >
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQuantity(index)}
                                            className="px-2 py-1 rounded-lg bg-coffee-100 dark:bg-coffee-700 text-coffee-700 dark:text-white"
                                        >
                                            <i className="fas fa-plus"></i>
                                        </button>
                                        <span className="ml-4 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="border-t border-coffee-200 dark:border-coffee-700 pt-4 mb-6">
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Tax (8.875%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        onClick={sendWhatsAppOrder}
                        disabled={cart.length === 0}
                        className="w-full bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-full transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span>Send via WhatsApp</span>
                        <ArrowRightIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;