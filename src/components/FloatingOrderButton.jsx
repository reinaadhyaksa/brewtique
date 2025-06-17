import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const FloatingOrderButton = ({ onClick, cart }) => {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 bg-coffee-600 hover:bg-coffee-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-40"
        >
            <div className="relative">
                <ShoppingBagIcon className="h-6 w-6" />
                {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {itemCount}
                    </span>
                )}
            </div>
        </button>
    );
};

export default FloatingOrderButton;