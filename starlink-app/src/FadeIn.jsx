import { useState, useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // 1. Create a reference to attach to our wrapper div
  const domRef = useRef();

  useEffect(() => {
    // 2. Set up the observer
    const observer = new IntersectionObserver((entries) => {
      // entries[0] represents the div we are watching
      if (entries[0].isIntersecting) {
        // If it enters the screen, wait for the delay, then fade it in!
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
        
        // 3. Stop watching once it fades in, so it doesn't repeat if they scroll up and down
        observer.unobserve(domRef.current);
      }
    });

    // 4. Tell the observer to start watching our specific div
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function when the component is destroyed
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div 
      ref={domRef} // Attach the reference here!
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)', // A slightly bigger 40px slide looks great on scroll
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;