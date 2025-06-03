
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ scrollY }: { scrollY: number }) => {
  const [helloText, setHelloText] = useState('');
  const [iAmText, setIAmText] = useState('');
  const [nameText, setNameText] = useState('');
  
  const helloComplete = helloText === 'Hello,';
  const iAmComplete = iAmText === 'I am';

  useEffect(() => {
    const helloTyping = setTimeout(() => {
      if (helloText.length < 6) {
        setHelloText('Hello,'.slice(0, helloText.length + 1));
      }
    }, 150);

    return () => clearTimeout(helloTyping);
  }, [helloText]);

  useEffect(() => {
    if (helloComplete) {
      const iAmTyping = setTimeout(() => {
        if (iAmText.length < 4) {
          setIAmText('I am'.slice(0, iAmText.length + 1));
        }
      }, 100);

      return () => clearTimeout(iAmTyping);
    }
  }, [helloComplete, iAmText]);

  useEffect(() => {
    if (iAmComplete) {
      const nameTyping = setTimeout(() => {
        if (nameText.length < 4) {
          setNameText('Syam'.slice(0, nameText.length + 1));
        }
      }, 200);

      return () => clearTimeout(nameTyping);
    }
  }, [iAmComplete, nameText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
      
      {/* Animated background photos with better positioning */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
          alt="Coding"
          className="absolute top-20 left-10 w-72 h-56 object-cover rounded-2xl shadow-2xl animate-float"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${Math.sin(scrollY * 0.01) * 3}deg)`,
            animationDelay: '0s'
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
          alt="MacBook"
          className="absolute bottom-20 right-10 w-72 h-56 object-cover rounded-2xl shadow-2xl animate-float"
          style={{
            transform: `translateY(${scrollY * -0.15}px) rotate(${Math.sin(scrollY * 0.01 + Math.PI) * 3}deg)`,
            animationDelay: '1s'
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
          alt="Code"
          className="absolute top-1/2 left-1/4 w-64 h-48 object-cover rounded-2xl shadow-2xl animate-float opacity-60"
          style={{
            transform: `translateY(${scrollY * 0.05}px) rotate(${Math.sin(scrollY * 0.005) * 2}deg)`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Scroll-triggered animated pictures */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
          alt="Programming Setup"
          className="absolute w-80 h-60 object-cover rounded-3xl shadow-2xl transition-all duration-1000"
          style={{
            top: `${20 + scrollY * 0.3}%`,
            right: `${10 + Math.sin(scrollY * 0.01) * 5}%`,
            transform: `rotate(${Math.sin(scrollY * 0.005) * 10}deg) scale(${0.8 + Math.sin(scrollY * 0.01) * 0.2})`,
            opacity: scrollY > 100 ? 1 : 0
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
          alt="Code Editor"
          className="absolute w-72 h-52 object-cover rounded-3xl shadow-2xl transition-all duration-1000"
          style={{
            bottom: `${15 + scrollY * 0.2}%`,
            left: `${5 + Math.cos(scrollY * 0.008) * 8}%`,
            transform: `rotate(${Math.cos(scrollY * 0.008) * -8}deg) scale(${0.9 + Math.cos(scrollY * 0.01) * 0.1})`,
            opacity: scrollY > 200 ? 1 : 0
          }}
        />
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-2xl">
            {helloText}
            <span className="animate-pulse text-purple-400">|</span>
          </h1>
          
          {helloComplete && (
            <h2 className="text-2xl md:text-4xl text-white/90 font-light">
              {iAmText}
              {!iAmComplete && <span className="animate-pulse text-purple-400">|</span>}
            </h2>
          )}
          
          {iAmComplete && (
            <h3 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-serif drop-shadow-lg">
              {nameText}
              {nameText.length < 4 && <span className="animate-pulse text-white">|</span>}
            </h3>
          )}
        </div>

        {nameText.length === 4 && (
          <div className="mt-12 animate-fade-in">
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Passionate coding student crafting digital experiences with modern technologies. 
              Building the future one line of code at a time, exploring AI, web development, and innovative solutions.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Discover My Work
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout}>
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/60 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-5 h-5 text-white/50 mt-1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
