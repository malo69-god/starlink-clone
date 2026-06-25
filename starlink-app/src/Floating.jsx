import  { useState, useEffect } from 'react';
import logo from './img/logo.png';

const Floating = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // FIXED: Calculates exactly 70% of the viewport height in pixels
      const heroHeight = window.innerHeight * 0.9; 
      
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(236, 224, 224, 0.2)',
        backdropFilter: 'blur(20px)',
        borderRadius: '50px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        padding: '10px 30px', // Nice and compact!
        
        // Fades the navbar smoothly in and out based on scroll state
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none', 
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
      }} 
    >
      <img 
        src={logo} 
        alt="starlink logo" 
        style={{ 
          width: '90px',      // Shrunk down to fit the tight 5px padding
          height: '40px',     // Shrunk down to prevent bloating the nav height
          objectFit: 'contain' 
        }} 
      />
     
      <button className="nav-btn">Get Started</button>
    </nav>
  );
};

export default Floating;
