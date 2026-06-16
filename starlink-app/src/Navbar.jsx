
import logo from './img/logo.png'

const Navbar = () => {
 
  const menuItems = ['Residential', 'Home']

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
      backgroundClip: 'transparent'
    }}>
      <div>
    
  {/* Wrap the image in a link targeting your top section ID */}
  <a 
    href="#Home" 
       style={{ display: 'inline-block', cursor: 'pointer' }}
  >
    <img 
      src={logo} 
      alt="starlink logo" 
      style={{ width: '120px', height: '60px', objectFit: 'contain',alignItems:'center' }} 
    />
  </a>
  </div>


      <ul style={{ display: 'flex', paddingBottom: '5px',  gap: '20px', listStyle: 'none', alignItems:'center', margin:0 }}>
        {/* 4. Use a .map() loop to output each link item dynamically */}
        {menuItems.map((item, index) => (
          <key key={index}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
              {item}
            </a>
          </key>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
