import logo from './img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // 1. Structure menuItems as objects containing both the label and its URL path
  const menuItems = [
     { name: 'Residential', path: '/Residential' }
     ,{ name: 'Roam', path: '/Roam' }
   
  ];

  return (
    <nav style={{
      position: 'absolute',     
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      display: 'flex', 
      gap: '20px', 
      alignItems: 'center',
      justifyContent: 'flex-start', 
      padding: '10px 40px', 
      color: 'white', 
      fontFamily: 'sans-serif',
      backgroundColor: 'transparent' // Standardized property value
    }}>
      <div>
        {/* 2. Changed logo to use Router <Link> instead of an anchor page hop */}
        <Link 
          to="/" 
          style={{ display: 'inline-block', cursor: 'pointer' }}
        >
          <img 
            src={logo} 
            alt="starlink logo" 
            style={{ width: '120px', height: '60px', objectFit: 'contain' }} 
          />
        </Link>
      </div>

      <ul style={{ display: 'flex', paddingBottom: '5px', gap: '20px', listStyle: 'none', alignItems: 'center', margin: 0 }}>
        {/* 3. Replaced <key> with standard <li> and injected router links dynamically */}
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path} 
              style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
