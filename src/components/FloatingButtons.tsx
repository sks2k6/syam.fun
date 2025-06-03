
import { useState, useEffect } from 'react';
import { Instagram, Bot, MessageCircle, Contact, Gamepad2, ChevronUp } from 'lucide-react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialButtons = [
    { icon: Instagram, href: '#instagram', color: 'bg-gradient-to-r from-pink-500 to-purple-500' },
    { icon: Bot, href: '#bot', color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { icon: MessageCircle, href: '#whatsapp', color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { icon: Contact, href: '#contact', color: 'bg-gradient-to-r from-gray-500 to-slate-500' },
    { icon: Gamepad2, href: '#games', color: 'bg-gradient-to-r from-red-500 to-orange-500' },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50 space-y-3">
      {/* Social buttons */}
      {socialButtons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          className={`block w-14 h-14 rounded-full ${button.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <button.icon className="w-6 h-6 text-white m-4" />
        </a>
      ))}
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
        style={{ animationDelay: '500ms' }}
      >
        <ChevronUp className="w-6 h-6 text-white m-4" />
      </button>
    </div>
  );
};

export default FloatingButtons;
