import React from 'react';

const Footer = () => {
  return (
    <footer 
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '40px 5%',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px'
      }}
    >
      {/* Top Row: Navigation Links */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        <span style={{ cursor: 'pointer' }}>Careers</span>
        <span style={{ cursor: 'pointer' }}>Satellite Operators</span>
        <span style={{ cursor: 'pointer' }}>Authorized Resellers</span>
        <span style={{ cursor: 'pointer' }}>Privacy & Legal</span>
        <span style={{ cursor: 'pointer' }}>Privacy Preferences</span>
      </div>

      {/* Bottom Row: Logo and Copyright text */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          fontSize: '12px',
          color: '#b3b3b3' // Slightly muted silver/gray text
        }}
      >
        {/* SVG for the X / Twitter Logo */}
        <svg 
          viewBox="0 0 24 24" 
          aria-hidden="true" 
          style={{ width: '16px', height: '16px', fill: '#ffffff' }}
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>

        <div>
          <span style={{ marginRight: '15px' }}>Starlink © 2026</span>
          <span>
            Starlink is a division of SpaceX. Visit us at{' '}
            <a 
              href="https://spacex.com" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}
            >
              spacex.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
