import React, { useRef } from 'react';
import van from "./roam/van.jpeg";
import camp from "./roam/camp.jpeg";
import phone from "./roam/phone.jpeg";

const cardData = [
  {
    id: 1,
    title: "Travel.",
    description: "Bring your internet with you while traveling anywhere in over 160+ countries, territories, and other markets around the world.",
    image: van 
  },
  {
    id: 2,
    title: "Camping.",
    description: "Camp in the most remote areas across the world with high-speed internet.",
    image: camp 
  },
  {
    id: 3,
    title: "Boating.",
    description: "Connect in territorial and inland waterways, with optional open-ocean coverage.",
    image: phone 
  }
];

const Slide = () => {
  // 1. Create a reference to target the slider container
  const sliderRef = useRef(null);

  // 2. The function to scroll the container LEFT
  const scrollLeft = () => {
    if (sliderRef.current) {
      // 380px is exactly one card width (350px) plus the gap (30px)
      sliderRef.current.scrollBy({ left: -505, behavior: 'smooth' }); 
    }
  };

  // 3. The function to scroll the container RIGHT
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 505, behavior: 'smooth' });
    }
  };

  return (
    <section 
      style={{
      
        padding: '10px 40px',
        display: 'flex',
        flexDirection: 'column', /* Changed to column to stack buttons above slider */
        alignItems: 'center'
      }}
    >
      
     

      {/* THE SLIDER CONTAINER */}
      <div 
        ref={sliderRef} /* We attach the reference here so the buttons can control it */
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory', 
          gap: '30px',
          maxWidth: '1200px',
          width: '100%',
          paddingBottom: '20px',
          
          /* Hides the scrollbar in Firefox and IE */
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
        }}
      >
        {/* A tiny style block to hide the scrollbar in Chrome/Safari/Edge */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {cardData.map((card) => (
          <div 
            key={card.id}
            style={{
              flex: '0 0 482px', 
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'sans-serif',
              scrollSnapAlign: 'start' 
            }}
          >
            <img 
              src={card.image} 
              alt={card.title} 
              style={{
                width: '100%',
                aspectRatio: '16/9', 
                objectFit: 'cover',  
                borderRadius: '16px', 
                marginBottom: '20px'
              }}
            />
            <p style={{ color: '#a0a0a0', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>
              <strong style={{ color: 'white' }}>{card.title}</strong> {card.description}
            </p>
          </div>
        ))}

      </div>
       {/* THE ARROW BUTTONS */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'flex-start', /* Pushes buttons to the right side */
          gap: '15px', 
          maxWidth: '1200px', 
          width: '100%', 
          marginTop: '20px' 
        }}
      >
        <button 
          onClick={scrollLeft} 
          style={{
            padding: '10px 15px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white',
            borderRadius: '50%', /* Makes them stylish circles! */
            fontSize: '18px'
          }}
        >
          &#8592; {/* HTML code for Left Arrow */}
        </button>
        <button 
          onClick={scrollRight} 
          style={{
            padding: '10px 15px',
            cursor: 'pointer',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '50%',
            fontSize: '18px'
          }}
        >
          &#8594; {/* HTML code for Right Arrow */}
        </button>
      </div>
    </section>
  );
};

export default Slide;