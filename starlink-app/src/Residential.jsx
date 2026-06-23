const Residential = () => {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'sans-serif',
      paddingTop: '80px' // Keeps text safely below your absolute Navbar
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
        Residential Plans
      </h1>
      <p style={{ color: '#e4e4e4', fontSize: '1.2rem' }}>
        Coverage, speed, and pricing details coming soon.
      </p>
    </div>
  );
};

export default Residential;