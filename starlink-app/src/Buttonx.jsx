import { Link } from "react-router-dom";

const Buttonx = ({ to, onClick, children, style, ...rest }) => {
  // 1. We store your styles in a variable so both the Link and Button can share them
  const baseStyles = {
    backgroundColor: "#ffffff",
    color: "black",
    padding: "12px 24px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.2s ease",
    display: "inline-block",
    textDecoration: "none",
    textAlign: "center",

    ...style,
  };

  if (to) {
    return (
      <Link to={to} style={baseStyles} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={baseStyles} {...rest}>
      {children}
    </button>
  );
};

export default Buttonx;
