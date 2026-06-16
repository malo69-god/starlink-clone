

const Buttonx =({ onClick, children, style, ...rest }) =>{
  
  
  return (
    <button 
      onClick={onClick} 
      {...rest} 
      style={{ 
        // Your default styles:
        backgroundColor: '#ffffff',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.2s ease',
        
        // Overwrite defaults with any styles passed from the outside:
        ...style 
      }}
    >
      {children}
    </button>
  );
}

export default Buttonx;
