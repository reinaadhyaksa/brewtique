import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Promo from './components/Promo';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import FloatingOrderButton from './components/FloatingOrderButton';
import { Toaster, toast } from 'sonner';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('brewtique-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('brewtique-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    toast.success(`${item.name} added to cart`);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Order placed successfully!');
  };

  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Header />
      <Hero />
      <About />
      <Menu addToCart={addToCart} />
      <Promo addToCart={addToCart} />
      <Testimonials />
      <Contact />
      <Footer />

      <FloatingOrderButton
        onClick={() => setIsModalOpen(true)}
        cart={cart}
      />

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cart={cart}
        updateCart={updateCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;